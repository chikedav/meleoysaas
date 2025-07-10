// components/home/Landing.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Landing() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
          Welcome to <span className="text-indigo-500">Meleoy</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg">
          Automate your creativity with AI tools that reward you. Build, share, and earn points.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex space-x-4"
      >
        <Link
          href="/signin"
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-3 rounded-xl"
        >
          Get Started
        </Link>
        <Link
          href="/pricing"
          className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 px-6 py-3 rounded-xl"
        >
          View Pricing
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-sm text-zinc-600"
      >
        © {new Date().getFullYear()} Meleoy. All rights reserved.
      </motion.div>
    </main>
  );
}
