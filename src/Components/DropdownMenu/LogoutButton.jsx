"use client";
import { authClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh(); // Tells the Dropdown to update immediately
    router.push("/"); // Send them home
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer hover:text-blue-200 w-full text-left">
      Logout
    </button>
  );
};

export default LogoutButton;