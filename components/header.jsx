import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
} from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.jpg"}
            alt="logo finanzas"
            height={60}
            width={200}
            className="h-12 w-auto object-center"
          />
        </Link>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Iniciar Sesión</Button>
          </SignInButton>
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};

export default Header;
