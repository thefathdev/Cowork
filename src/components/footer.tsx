import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col px-4 py-8">
      <div className="flex items-center justify-between rounded-[2rem] py-12 px-8  gap-32 paragraph-thin bg-rigid-black text-clear-white">
        <div className="w-full max-w-[500px] gap-8 flex flex-col">
          <img src="/logo-white.svg" alt="" className="h-6 self-start" />
          <div className="flex flex-col gap-6">
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-3 bg-rigid-black text-clear-white placeholder:text-clear-white/70 border-b border-clear-white"
              />
              <Button type={"secondary"}>Subscribe</Button>
            </div>
            <p>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 w-full">
          <div className="flex flex-col gap-6">
            <p className="paragraph-strong uppercase">Explore More</p>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="/">Home</a>
              </li>
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
          </div>
          <div className="flex flex-col gap-6">
            <p className="paragraph-strong uppercase">Stay Connected</p>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="/">Subscribe</a>
              </li>
              <li>
                <a href="/">Member Story</a>
              </li>
              <li>
                <a href="/">Locations</a>
              </li>
              <li>
                <a href="/">Wrtie for US</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="paragraph-strong uppercase">Follow Us</p>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">X</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
