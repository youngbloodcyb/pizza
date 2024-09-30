"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema as formSchema } from "@/lib/data/validations";
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
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SignUp() {
  const [showAlert, setShowAlert] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.passwordConfirm) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    console.log(values);
  }

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
            onSubmit={form.handleSubmit(onSubmit)}
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
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
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="passwordConfirm">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="passwordConfirm"
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
              className="bg-[#c0c0c0] border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset]"
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </Card>
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#c0c0c0] border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset] p-4 max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <h2 className="text-lg font-bold">Error</h2>
            </div>
            <p>Passwords do not match. Please try again.</p>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() => setShowAlert(false)}
                className="bg-[#c0c0c0] border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)_inset,_-2px_-2px_0px_0px_rgba(0,0,0,0.25)_inset]"
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
