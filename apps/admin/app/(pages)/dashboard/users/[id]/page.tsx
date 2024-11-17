"use client"

import { dummyUser } from "@/app/components/UserList";
import { UserProfileCard } from "@/app/components/UserProfileCard";

export default function UserProfilePage({
  params
}: {
  params: { id: string };
}) {
  const userData = dummyUser.find((user) => user.id === params.id);
  return (
    <div className="container max-w-lg py-10">
      <UserProfileCard user={userData as any} />
    </div>
  );
}
