import Layout from "../layouts/Layout";
import { HeaderTitle, Forgottenpassform, Meta } from "../components";

export default function ForgottenPassword() {
  return (
    <Layout>
      <Meta title="Login Project" />
      <HeaderTitle title="Forgotten password" />
      <Forgottenpassform />
    </Layout>
  );
}
