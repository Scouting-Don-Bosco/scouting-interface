import LoginForm from "@/components/auth/login.form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Inloggen</h1>
      <LoginForm />
    </div>
  );
}
