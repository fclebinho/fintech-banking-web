"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { FormTransaction } from "../form";
import { fetchTransactions } from "@/lib/transactions";

interface TransactionListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TransactionList: React.FC<TransactionListProps> = (props) => {
  const t = useTranslations("Transaction");
  const { toast } = useToast();
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card {...props} x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>{t("subtitle")}</CardDescription>
          </div>
          <div>
            <FormTransaction />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {data && data.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>{t("description")}</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">
                  {t("amount")}
                </TableHead>
                <TableHead className="hidden md:table-cell text-center">
                  {t("due_date")}
                </TableHead>
                <TableHead className="hidden md:table-cell text-center">
                  {t("created_at")}
                </TableHead>
                <TableHead>
                  <span className="sr-only">{t("actions")}</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                data.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {transaction.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.status}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {transaction.amount.toLocaleString(t("currency.locale"), {
                        style: "currency",
                        currency: t("currency.currency"),
                      })}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-center">
                      {new Date(transaction.due_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-center">
                      {new Date(transaction.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
                          <DropdownMenuItem>{t("edit")}</DropdownMenuItem>
                          <DropdownMenuItem
                            disabled={deleteLoading}
                            onClick={() => () => {}}
                          >
                            {t("delete")}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex items-center justify-center min-h-96">
            No data
          </div>
        )}
      </CardContent>
    </Card>
  );
};
