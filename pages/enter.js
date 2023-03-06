import { signInWithPopup , signInAnonymously , signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);
  // 1. user is signed out <SignInButton />
  // 2. user is signed in, but missing username <UsernameForm />
  // 3. user is signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="btn-google" onClick={() => signInWithGoogle()}>
      <img src={"/google-icon.png"} /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

function UsernameForm() {
  return (
    <>
    
    </>
  );
}
