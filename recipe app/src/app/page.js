import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Welcome to recipe app</h2>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
