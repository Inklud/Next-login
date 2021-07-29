import Layout from "../layouts/Layout";
import { HeaderTitle, RegisterForm, Meta } from "../components";

export default function Register() {
  return (
    <Layout>
      <Meta title="Login Project" />
      <HeaderTitle title="Register" />
      <RegisterForm />
    </Layout>
  );
}
