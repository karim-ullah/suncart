'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { CiFloppyDisk } from "react-icons/ci";

const UpdateProfile = () => {

    const onSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const {name, url} = Object.fromEntries(formData.entries())
        await authClient.updateUser({
            name: name,
            image: url,
            
        })
        
        
    }
  return (
    <div className="max-w-11/12 mx-auto flex justify-center items-center py-10">
      <Form className="w-full max-w-96 p-10 shadow-sm border rounded-2xl" onSubmit={onSubmit}>
        <Fieldset>
          <Fieldset.Legend>Update Profile</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
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
              <Input placeholder="Enter name" />
              <FieldError />
            </TextField>

            <TextField isRequired name="url" type="text">
              <Label>Image URL</Label>
              <Input placeholder="Enter Image URL" />
              <FieldError />
            </TextField>


            
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <CiFloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default UpdateProfile;
