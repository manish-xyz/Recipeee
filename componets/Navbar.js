import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Home</button>
          </Link>
        </li>

        {/*user is signed in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "/chef.png"} />
              </Link>
            </li>
            <li className="username">{username}</li>
            {isVerified && (
              <p>verified</p>
            )}
          </>
        )}
        {/*user is not singed OR has not created username */}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log In</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
