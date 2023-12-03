import ResetPasswordForm from "@/components/auth/reset.form";

export default function PasswordResetPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Wachtwoord resetten</h1>
      <ResetPasswordForm />
    </div>
  );
}
