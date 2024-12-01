import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/users/1">USer 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">USer 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">USer 3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">USer 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
