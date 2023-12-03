import * as z from "zod";
import { formSchema } from "@/components/auth/login.form";

export interface LoginResponse {
  success: boolean;
  access_token?: string;
  refresh_token?: string;
  errorMessage?: string;
  for?: keyof z.infer<typeof formSchema>;
}
