export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-12 space-x-3 bg-[#141414] md:h-24">
      <img
        className="border border-gray-400 rounded-full w-9 h-9 md:w-12 md:h-12 border-3"
        src="/sep.png"
        alt=""
      />
      <p className="text-xs text-white text-gray-400 md:text-sm">
        Developed by <span className="font-semibold">Sep Motameni</span>
      </p>
    </footer>
  );
}
