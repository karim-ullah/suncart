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
import React from "react";
import { BiCheck } from "react-icons/bi";
import { CgGoogle } from "react-icons/cg";

const SignUpPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataForm = Object.fromEntries(formData.entries());
    // console.log(dataForm);
    const { name, email, url, password } = dataForm;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: url,
      password: password,
      callbackURL: "/",
    });

    // console.log(name, email, url, password, 'formdata');

    // console.log(data, error, "data");

    if (data) {
      alert("Registration Successfull");
    }
    if (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    }


  return (
    <div className="w-11/12 mx-auto flex justify-center items-center py-10">
      <Form
        className="flex w-full md:w-96 flex-col gap-4 shadow-sm p-10 shadow-sm rounded-2xl"
        onSubmit={onSubmit}
      >
        <h3 className="font-semibold text-2xl text-center">SignUp</h3>
        <Separator></Separator>
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
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
          name="url"
          validate={(value) => {
            if (value.length < 8) {
              return "URL must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Photo URL</Label>
          <Input placeholder="Paste your photo URL" />
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
            Register
          </Button>
        </div>
        <Separator></Separator>
        <span className="text-center">or</span>
        <Button
          onClick={handleGoogleSignUp}
          className="w-full"
          variant="outline"
        >
          <CgGoogle />
          Sign in with Google
        </Button>
        <p className="text-xs text-center">
          <span className="text-muted">Already have an account? </span>
          <Link href={"/login"}>Log in to continue.</Link>
        </p>
      </Form>
    </div>
  )
  }

export default SignUpPage;
