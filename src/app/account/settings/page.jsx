"use client";
import { authClient } from "@/lib/auth/client";

export default function SettingsPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="p-8">Loading profile...</div>;

  if (!session) {
    return <div className="p-8">Please log in to view this page.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Email Address</label>
            <p className="text-lg">{session.user.email}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-500">User ID</label>
            <p className="text-xs font-mono text-gray-400">{session.user.id}</p>
          </div>
        </div>

        <button 
          onClick={() => authClient.signOut()}
          className="mt-8 px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
        >
          Sign Out of All Devices
        </button>
      </div>
    </div>
  );
}