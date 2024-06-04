import { resendConfirmationCode } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

type ResendCodeButtonProps = {
  email: string;
};

const ResendCodeButton: React.FC<ResendCodeButtonProps> = ({ email }) => {
  const t = useTranslations("SignUpConfirm");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleResendCode = () => {
    setLoading(true);
    resendConfirmationCode(email).finally(() => setLoading(false));
  };

  return (
    <Button className="w-full" variant="ghost" onClick={handleResendCode}>
      {t("resend-code")}
    </Button>
  );
};

export default ResendCodeButton;
