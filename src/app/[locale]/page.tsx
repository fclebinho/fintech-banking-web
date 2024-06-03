import { getServerSession } from "next-auth";
import auth from "../../auth";
import Dashboard from "./home";

export default async function IndexPage() {
  const session = await getServerSession(auth);
  return <Dashboard session={session} />;
}
