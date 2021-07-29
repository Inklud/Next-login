import Layout from "../layouts/Layout";
import { HeaderTitle, LoginForm, Meta } from "../components";

export default function Login() {
  return (
    <Layout>
      <Meta title="Login Project" />
      <HeaderTitle title="Login" />
      <LoginForm />
    </Layout>
  );
}
