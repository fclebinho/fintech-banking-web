import { getServerSession } from "next-auth";
import auth from "../../auth";
import Home from "./home";

type IndexPageProps = {
  params: {
    locale: string;
  };
};

export default async function IndexPage({
  params: { locale },
}: IndexPageProps) {
  const session = await getServerSession(auth);
  return <Home session={session} locale={locale} />;
}
