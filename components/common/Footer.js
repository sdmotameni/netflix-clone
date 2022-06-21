import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: {
      scale: 2,
      y: -1500,
    },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 4,
      },
    },
  };

  return (
    <div className="bg-[#141414] py-10">
      <motion.span
        className="flex items-center justify-center space-x-3"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <img
          className="border border-gray-400 rounded-full w-9 h-9 md:w-12 md:h-12 border-3"
          src="/sep.png"
          alt=""
        />
        <p className="text-xs text-white text-gray-400 md:text-sm">
          Developed by <span className="font-semibold">Sep Motameni</span>
        </p>
      </motion.span>
    </div>
  );
}
