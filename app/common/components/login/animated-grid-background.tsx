import { motion } from 'framer-motion'

export function AnimatedGridBackground() {
  const gridSize = 20
  const dotSize = 2

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = (index % gridSize) * (100 / (gridSize - 1))
          const y = Math.floor(index / gridSize) * (100 / (gridSize - 1))
          return (
            <motion.circle
              key={index}
              cx={`${x}%`}
              cy={`${y}%`}
              r={dotSize}
              fill="#4ade80"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )
        })}
      </motion.g>
    </svg>
  )
}

