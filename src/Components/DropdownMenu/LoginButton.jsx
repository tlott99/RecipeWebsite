import { authClient } from "@/lib/auth/client";

const LoginButton = () => {
  return <button onClick={() => authClient.signIn()}>Log In</button>;
};

export default LoginButton;