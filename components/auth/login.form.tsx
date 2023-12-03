"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { login } from "@/components/api/backend-wrapper";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const response = await login(values.email, values.password);
    if (!response.success) {
      form.setError(response.for ?? "root", { message: response.errorMessage });
    } else {
      if (response.access_token) {
        const expiryTime = new Date();
        expiryTime.setTime(expiryTime.getTime() + 3600000);
        Cookies.set("sc_token", response.access_token, {
          expires: expiryTime,
        });
        router.back();
      } else {
        throw new Error("No access token received");
      }
    }
  }

  return (
    <>
      <Form {...form}>
        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}
        <form
          onSubmit={form.handleSubmit(async (data) => await onSubmit(data))}
          className="flex flex-col justify-between items-center mt-5 space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="naam@voorbeeld.nl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wachtwoord</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="wachtwoord" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-between items-center w-full mt-5 space-y-5 ">
            <Button className="px-10 py-2 mt-5 " type="submit">
              Log in
            </Button>
            <Button
              variant="link"
              onClick={() => router.push("/auth/password-reset")}
            >
              Wachtwoord vergeten?
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
