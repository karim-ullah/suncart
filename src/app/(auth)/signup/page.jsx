'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { BiCheck } from "react-icons/bi";

const SignUpPage = () => {

    const onSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data);
        
    }
  return (
    <div className="max-w-11/12 mx-auto flex justify-center items-center h-screen">
      <Form className="flex w-96 flex-col gap-4 shadow-sm p-10" onSubmit={onSubmit}>
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
            name="photo_url"
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
          <Button type="submit">
            <BiCheck />
            Register
          </Button>
          
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
