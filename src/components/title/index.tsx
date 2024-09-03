'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import './index.css'

export default function Title() {
    const container = useRef(null)
    useGSAP(() => {
        gsap.from('.title', { scaleY: 0, duration: 0.7, delay: 0.4 })
    })

    return (
        <div
            ref={container}
            className='title border-white border absolute bottom-4 -left-8 -right-8 rounded-xl h-6'
        >
            <div className='glow h-4/5'></div>
        </div>
    )
}
