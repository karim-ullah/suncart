"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
//   console.log(user);
  return (
    <div className="max-w-11/12 mx-auto py-10">
      <Card className="max-w-96 mx-auto flex flex-col items-center border">
        <Avatar size="lg">
          <Avatar.Image
            alt={user?.image}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-medium text-xl">{user?.name}</h2>
        <p className="text-sm text-muted">{user?.email}</p>
        <Button size="sm"> <BiEdit></BiEdit> <Link href={'/update-profile'}>Update Profile</Link></Button>
      </Card>
    </div>
  );
};

export default ProfilePage;
