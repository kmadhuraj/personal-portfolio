import React, { Children } from "react";
import { motion } from 'framer-motion';
export default function Button({ children, onClick }) {
  return (
    <>
      <motion.button
        onClick={onClick}
        className="tw-w-40 tw-border-none tw-rounded-md  tw-h-10 tw-bg-zinc-700 hover:tw-bg-gray-500 hover:tw-text-white tw-uppercase focus:tw-animate-scramble "
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
      >
        {children}
      </motion.button>
    </>
  );
}
