"use client";

import * as React from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { UserProfileCardProps } from "./UserProfileCard";

// Dummy data
export const dummyUser: UserProfileCardProps[] = [
  {
    id: '1',
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1731433452456-27b58e5a0023?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    tasksCompleted: 100,
    totalPoints: 5000,
    dateJoined: "2023-01-01",
    contact: "+1234567890",
    earnings: 1000,
    status: "Active",
    country: "USA",
    points: "1000"
  },
  {
    id: '2',
    name: "Jane Smith",
    email: "jane.smith@example.com",
    imageUrl: "/placeholder.svg",
    tasksCompleted: 200,
    totalPoints: 8000,
    dateJoined: "2023-02-15",
    contact: "+9876543210",
    earnings: 2000,
    status: "Inactive",
    country: "Canada",
    points: "2000"
  },
  {
    id: '3',
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1731642146528-bc5013e4fb42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    tasksCompleted: 150,
    totalPoints: 6000,
    dateJoined: "2023-03-10",
    contact: "+1122334455",
    earnings: 1500,
    status: "Active",
    country: "UK",
    points: "1500"
  },
  {
    id:' 4',
    name: "Bob Williams",
    email: "bob.williams@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    tasksCompleted: 75,
    totalPoints: 3000,
    dateJoined: "2023-04-05",
    contact: "+9988776655",
    earnings: 750,
    status: "Inactive",
    country: "Australia",
    points: "750"
  }
];

export function UsersList() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const router = useRouter();
  return (
    <div className="w-full space-y-4">
      {/* Filter Dropdown */}
      <div className="flex items-center px-6 py-4">
        <Select defaultValue="41">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="41">All (41)</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
        <div className="p-4 text-center bg-white shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">UserID</h3>
        </div>
        <div className="col-span-2 p-4 bg-white shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Image & Name
          </h3>
        </div>
        <div className="hidden p-4 bg-white shadow-sm lg:block">
          <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
        </div>
        <div className="hidden p-4 bg-white shadow-sm md:block">
          <h3 className="text-sm font-medium text-muted-foreground">
            Earnings
          </h3>
        </div>
        <div className="hidden p-4 bg-white shadow-sm lg:block">
          <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
        </div>
        <div className="hidden p-4 bg-white shadow-sm lg:block">
          <h3 className="text-sm font-medium text-muted-foreground">Points</h3>
        </div>
        <div className="p-4 bg-white shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Action</h3>
        </div>
      </div>

      {/* User Rows */}
      <div className="space-y-4">
        {dummyUser.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-4 gap-4 px-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8"
          >
            {/* User ID */}
            <div className="flex items-center p-4 text-center">
              <span className="text-sm font-medium">{user.id}</span>
            </div>

            {/* User Image & Name */}
            <div className="flex items-center col-span-2 gap-3 p-4 bg-white shadow-sm">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user.name}</span>
            </div>

            {/* Email */}
            <div className="items-center hidden p-2 bg-white shadow-sm hover:min-w-fit lg:flex">
              <span className="text-sm truncate text-muted-foreground hover:overflow-visible hover:whitespace-normal ">
                {user.email}
              </span>
            </div>

            {/* Earnings */}
            <div className="items-center hidden p-4 bg-white shadow-sm sm:hidden md:flex">
              <span className="text-sm font-medium truncate text-muted-foreground">
                NGN {user.earnings.toLocaleString()}
              </span>
            </div>

            {/* Status */}
            <div className="items-center hidden p-4 bg-white shadow-sm lg:flex">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  user.status === "active"
                    ? "bg-[#3E7B69] text-white"
                    : "bg-[#B2AFAF] text-white"
                }`}
              >
                {user.status === "active" ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Points */}
            <div className="items-center hidden p-4 bg-white shadow-sm lg:flex">
              <span className="text-sm font-medium">{user.points} Points</span>
            </div>

            {/* Action */}
            <div className="flex items-center justify-between p-4 bg-white shadow-sm">
              <span className="text-sm text-muted-foreground">View User</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-8 h-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => router.push(`/dashboard/users/${user.id}`)}
                  >
                    View User
                  </DropdownMenuItem>
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between px-6 py-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Showing 1 to 10 of 50 entries
        </p>
        <div className="flex items-center mt-4 space-x-6 lg:space-x-8 sm:mt-0">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Display</p>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => setPageSize(Number(value))}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((pageNumber) => (
                <Button
                  key={pageNumber}
                  variant={pageNumber === page ? "default" : "outline"}
                  className="w-8 h-8 p-0"
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-8 h-8 p-0"
              onClick={() => setPage(page + 1)}
              disabled={page === 4}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
