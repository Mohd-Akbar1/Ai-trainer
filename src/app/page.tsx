import { SignInButton ,SignedIn,SignedOut} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     home Page

     <h1>signed out</h1>
     <SignedOut>
     
     <SignInButton/>
     </SignedOut>

     <SignedIn>
         <SignedOut/>
     </SignedIn>

    
    </div>
  );
}
