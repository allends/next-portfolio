'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const Raindrops = () => {
    const [numRaindrops, setNumRaindrops] = useState<number>(100)

    useEffect(() => {
        const handleResize = () => {
            // Update the number of raindrops based on window size
            const screenWidth = window.innerWidth
            const screenHeight = window.innerHeight
            const newNumRaindrops = Math.floor(
                (screenWidth * screenHeight) / 15000
            ) // Adjust this value as needed
            setNumRaindrops(newNumRaindrops)
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Initial call to set the number of raindrops
        handleResize()

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                placeItems: 'center',
                opacity: 0.3,
                zIndex: -1,
            }}
        >
            {Array.from({ length: numRaindrops }, (_, index) => (
                <Raindrop key={index} />
            ))}
        </div>
    )
}

const Raindrop = () => {
    return (
        <motion.div
            className="bg-slate-300"
            style={{
                width: 10,
                height: 10,
            }}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
        />
    )
}
