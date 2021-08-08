import { useRouter } from "next/router";
import { Meta, HeaderTitle, Resetpassform } from "../components";

export default function ResetPass() {
  const router = useRouter();

  return (
    <>
      <Meta title="Login Project" />
      <HeaderTitle title="Reset password" />
      <Resetpassform code={router.query.code} />
    </>
  );
}
