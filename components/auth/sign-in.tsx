"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema as formSchema } from "@/lib/data/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/data/auth";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { parseActionError } from "@/lib/data/safe-action";

export function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { execute, isExecuting } = useAction(signIn, {
    onSuccess: () => {
      toast.success("Sign up successful");
    },
    onError: ({ error }) => {
      toast.error(parseActionError(error));
    },
  });

  return (
    <>
      <Card className="w-[400px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
        <CardHeader className="bg-[#000080] text-white p-1 flex flex-row items-center justify-between border-b-2 border-black">
          <CardTitle className="text-sm font-bold">
            Take down big pizza
          </CardTitle>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
            >
              _
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
            >
              □
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-5 h-5 bg-[#c0c0c0] border-2 border-black text-black font-bold"
            >
              X
            </Button>
          </div>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className="p-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <FormControl>
                    <Input
                      id="username"
                      {...field}
                      className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset]"
                    />
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
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      {...field}
                      className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="hover:bg-[#c0c0c0] border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset]"
              loading={isExecuting}
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
}
