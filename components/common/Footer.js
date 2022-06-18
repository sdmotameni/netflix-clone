export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-24 space-x-3 bg-[#141414]">
      <img
        className="w-12 h-12 border border-gray-400 rounded-full"
        src="/sep.png"
        alt=""
      />
      <p className="text-sm text-white text-gray-400">
        Developed by <span className="font-semibold">Sep Motameni</span>
      </p>
    </footer>
  );
}
