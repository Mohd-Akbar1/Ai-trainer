import { SignInButton ,SignedIn,SignedOut} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     home Page

     <h1>Welcome to Ai based fitness trainer</h1>
     <SignedOut>
     
     <SignInButton/>
     </SignedOut>


    <h1>Sign Out</h1>
     <SignedIn>
         <SignedOut/>
     </SignedIn>

    
    </div>
  );
}
