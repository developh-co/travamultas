import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface PreloaderProps {
  setLoading: (loading: boolean) => void
}

export default function Preloader({ setLoading }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // Duration of the preloader
    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className='fixed top-0 left-0 w-full h-full items-center justify-center bg-beige px-10 flex-col flex gap-10'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <h1 className='text-4xl text-body'>Trava Multas</h1>
      </motion.div>

      <motion.div
        className='w-1/3 h-1 bg-body rounded-full'
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
