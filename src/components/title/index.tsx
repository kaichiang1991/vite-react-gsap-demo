'use client'
import './index.css'

export default function Title({ text }: { text: string }) {
    return (
        <div className='border-white border absolute bottom-4 -left-8 -right-8 rounded-xl leading-6'>
            {text}
            <div className='glow'></div>
        </div>
    )
}
