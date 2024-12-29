"use client";

import { auth_token } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

// interface ProtectedLayoutProps {
//   Component: any;
// }

export function ProtectedLayout(Component: any) {
  return function IsAuth(props: any) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
      const token = localStorage.getItem(auth_token);
      if (!token) {
        router.replace("/sign-in");
        setIsAuthenticated(false);
        setIsLoading(false);
      } else {
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    }, []);

    if (!isAuthenticated) {
      return null;
    }
    if (isLoading) {
      return <Skeleton className="h-[405px] w-[800px] rounded-xl" />;
    }
    return <Component {...props} />;
  };
}
