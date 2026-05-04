"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { CgGoogle } from "react-icons/cg";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataForm = Object.fromEntries(formData.entries());
    // console.log(dataForm);
    const { email, password } = dataForm;
    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });

    if (data) {
      alert("Login Successfull");
      router.push(callbackUrl)
    }

    if (error) {
      alert(error.message);
    }
    // router.push(callbackUrl)
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    router.push(callbackUrl)
  };
  return (
    <div className="max-w-11/12 mx-auto flex flex-col justify-center items-center py-10">
      <Form
        className="flex w-full md:w-96 flex-col gap-4 shadow-sm p-10 rounded-2xl"
        onSubmit={onSubmit}
      >
        <h3 className="font-semibold text-2xl text-center">Login</h3>
        <Separator></Separator>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button size="sm" type="submit">
            <BiCheck />
            Login
          </Button>
        </div>

        <Separator></Separator>
        <span className="text-center">or</span>
        <Button
          onClick={handleGoogleSignIn}
          className="w-full"
          variant="outline"
        >
          <CgGoogle />
          Sign in with Google
        </Button>
        <p className="text-xs text-center">
          <span className="text-muted">Don’t have an account? </span>
          <Link href={"/signup"}>SignUp</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
