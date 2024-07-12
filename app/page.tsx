'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Teaser from './components/Teaser'
import Preloader from './components/Preloader'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <AnimatePresence>
      {loading && <Preloader setLoading={setLoading} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: loading ? 2.5 : 0,
          ease: 'easeInOut'
        }}
        className='relative min-h-screen bg-teaser bg-cover bg-center bg-no-repeat'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.3, delay: 1.5, ease: 'easeInOut' }}
          className={`absolute inset-0 ${loading ? 'hidden' : ''}`}
        >
          <Teaser />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
