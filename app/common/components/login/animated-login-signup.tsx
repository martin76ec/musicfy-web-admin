import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "~/common/components/ui/button"
import { Input } from "~/common/components/ui/input"
import { Label } from "~/common/components/ui/label"
import { QRCode } from './qr-code'
import { AnimatedLogo } from './animated-logo'
import { AnimatedGridBackground } from './animated-grid-background'

export default function AnimatedLoginSignup() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleView = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
      {/* Animated grid background */}
      <AnimatedGridBackground />

      {/* Login/Signup container */}
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-4xl relative z-10 border border-green-500 overflow-hidden flex min-h-96">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-8 flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold text-green-400">Login</h2>
              <form className="flex flex-col justify-between h-full" onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col gap-4'>
                  <div>
                    <Label htmlFor="login-email" className="text-gray-300">Email</Label>
                    <Input id="login-email" type="email" placeholder="Enter your email" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div>
                    <Label htmlFor="login-password" className="text-gray-300">Password</Label>
                    <Input id="login-password" type="password" placeholder="Enter your password" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500 focus:ring-green-500" />
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-black">Login</Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-400">Sign Up</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label htmlFor="signup-name" className="text-gray-300">Name</Label>
                  <Input id="signup-name" type="text" placeholder="Enter your name" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div>
                  <Label htmlFor="signup-email" className="text-gray-300">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500 focus:ring-green-500" />
                </div>
                <div>
                  <Label htmlFor="signup-password" className="text-gray-300">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-green-500 focus:ring-green-500" />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-black">Sign Up</Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1 flex items-center justify-center bg-gray-800">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="qr-code"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <QRCode />
                <p className="text-center mt-4 text-gray-300">Scan to login with mobile</p>
              </motion.div>
            ) : (
              <motion.div
                key="animated-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedLogo />
                <p className="text-center mt-4 text-gray-300">Join our community today!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button onClick={toggleView} className="text-sm text-green-400 hover:underline">
          {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  )
}

