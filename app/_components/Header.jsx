import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white p-2 flex justify-between">
      <h1 className="text-3xl">
        <Link href="/">Pins</Link>
      </h1>
      <nav className="my-1 mx-1">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/add-pin">Add-pin</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <Link className="underline" href="https://github.com/Learn-with-Sumit">
        GitHub
      </Link>
    </header>
  );
};

export default Header;
