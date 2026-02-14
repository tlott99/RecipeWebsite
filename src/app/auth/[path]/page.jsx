"use client";
import { authClient } from "@/lib/auth/client";
import { AuthView } from "@neondatabase/auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { path } = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    // If user is already logged in, send them to the dashboard/home
    // instead of letting the login component load and trigger a sign-out
    if (!isPending && session) {
      router.push("/dashboard"); 
    }
  }, [session, isPending, router]);

  if (isPending) return null;

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <AuthView pathname={path} />
    </div>
  );
}