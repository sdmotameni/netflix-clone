export default function Navbar() {
  return (
    <nav className="absolute z-10 justify-between hidden w-full lg:flex">
      {/* Fade Gradient */}
      <div className="z-10 absolute w-screen h-4 bg-gradient-to-b from-[#141414]" />
      <div className="flex items-center justify-between w-full px-20">
        <div className="flex items-center space-x-8 text-lg text-white">
          <img
            className="object-contain w-32 h-20"
            src="/netflix-logo.svg"
            alt=""
          />
          <div>Home</div>
          <div>TV Series</div>
          <div>Movies</div>
          <div>News & Popular</div>
          <div>My List</div>
        </div>

        <div className="text-white">
          <p>Search Icon</p>
          <p>Account Details</p>
        </div>
      </div>
    </nav>
  );
}
