"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import useGetUser from "@/hook/useGetUser";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session } = useSession(); // Get the session object
  const { user } = useGetUser(); // get user from local storage

  const router = useRouter();

  const SignOutfun = () => {
    console.log("Signing out...");
    signOut();
    localStorage.clear();
  };

  if (!session && !user) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-5">
          You are not logged Officially Using Verified Mail Please Use Email To
          Acess This Section
        </h1>
        <Link
          href="/login"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Profile Header */}
      <header className="bg-gray-200 py-5">
        <div className="container mx-auto px-5">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-gray-600 font-bold text-xl">
              Home
            </Link>
            <button
              onClick={() => {
                SignOutfun();
              }}
              className="text-gray-600 font-bold"
            >
              Sign-Out
            </button>
          </nav>
        </div>
      </header>

      {/* Profile Details */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-10">
            {session && session.user?.image && (
              <Image
                src={session.user.image}
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
            )}
          </div>
          <h1 className="text-4xl font-bold mb-5">
            Welcome, {session?.user?.name || user?.name}!
          </h1>
          <p className="text-lg mb-3 text-gray-600">
            Email: {session?.user?.email || user.id}
          </p>

          {/* Additional Personal Information */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">
              Personalized Information
            </h2>
            <p className="text-lg text-gray-700">
              Here you can display additional user details or preferences.
            </p>
            <div className="mt-6">
              <Link
                href="/edit-profile"
                className="bg-blue-500 text-white py-2 px-6 rounded-md"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-5 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 Your College Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
