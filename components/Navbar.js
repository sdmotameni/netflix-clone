export default function Navbar() {
  return (
    <nav className="absolute z-10 flex justify-between w-full px-20 py-3">
      {/* Fade Gradient */}
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
    </nav>
  );
}
