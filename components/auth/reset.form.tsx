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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
});

export default function ResetPasswordForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                <FormLabel htmlFor="email">E-mailadres</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="naam@voorbeeld.nl"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-between items-center mt-5 space-y-5">
            <Button type="submit" className="px-10">
              Reset wachtwoord
            </Button>
            <Button variant="link" onClick={() => router.push("/auth/login")}>
              Terug naar inloggen
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
