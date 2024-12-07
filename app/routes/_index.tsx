import type { MetaFunction } from "@remix-run/node";
import AnimatedLoginSignup from "~/common/components/login/animated-login-signup";

export const meta: MetaFunction = () => {
  return [
    { title: "Musicfy" },
    { name: "description", content: "Admin Dashboard" },
  ];
};

export default function Index() {
  return (<AnimatedLoginSignup/>);
}
