import Layout from "../layouts/Layout";
import { HeaderTitle, Resetpassform, Meta } from "../components";
import { useRouter } from "next/router";

export default function ResetPass() {
  const router = useRouter();
  console.log(router.query.code);

  return (
    <Layout>
      <Meta title="Login Project" />
      <HeaderTitle title="Reset password" />
      <Resetpassform code={router.query.code} />
    </Layout>
  );
}
