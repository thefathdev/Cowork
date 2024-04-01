import Button from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center px-4 pt-6">
      <nav className="flex items-center justify-between w-full py-4 border-t border-b border-rigid-black">
        <a href="/">
          <span className="sr-only">Home</span>
          <img src="/logo.svg" alt="" className="h-6" />
        </a>
        <div className="flex w-auto gap-12">
          <ul className="flex items-center gap-12">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
          </ul>
          <div className="flex gap-6">
            <Button type={"secondary"}>Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
