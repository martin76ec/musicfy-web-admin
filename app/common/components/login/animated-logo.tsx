import { motion } from 'framer-motion'

export function AnimatedLogo() {
  return (
    <div className="w-48 h-48 relative">
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-4 bg-black rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <span className="text-4xl font-bold text-green-500">v0</span>
      </motion.div>
    </div>
  )
}

