import Image from "next/image";
import Hello from "../component/hello";

export default function Home() {
  console.log("-- SERVER/CLIENT?");

  return (
    <>
      <h1>Welcome to Next JS learning</h1>
      <Hello />
    </>
  );
}
