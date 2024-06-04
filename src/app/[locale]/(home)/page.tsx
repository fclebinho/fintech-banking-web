import { getServerSession } from "next-auth";
import auth from "../../../auth";
import Home from "./home";

export default async function IndexPage() {
  const session = await getServerSession(auth);
  return <Home />;
}
