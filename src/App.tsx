import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import './App.css'
import Block from './components/block'

gsap.registerPlugin(useGSAP)

interface BlockDef {
    text: string
    pos: { x: number; y: number }
}

const blockDefArr: BlockDef[] = [
    { text: '毅力', pos: { x: -30, y: -30 } },
    { text: '樂觀', pos: { x: 30, y: -30 } },
    { text: '積極', pos: { x: -30, y: 30 } },
    { text: '執著', pos: { x: 30, y: 30 } },
]

function App() {
    const container = useRef(null)

    useGSAP(() => {
        const randomTimeArr: number[] = blockDefArr.map(_ => gsap.utils.random(0, 0.3))
        const randomDurationArr: number[] = blockDefArr.map(_ => gsap.utils.random(0.9, 1.4))
        blockDefArr.map(({ pos: { x, y } }, index) => {
            const delay: number = randomTimeArr[index],
                duration: number = randomDurationArr[index]

            gsap.from(`.block-component-${index}`, {
                delay,
                duration,
                x,
                y,
            })
        })

        gsap.fromTo(
            '.title',
            {
                duration: 0.7,
                scaleY: 0,
            },
            {
                scaleY: 1,
                delay: 1,
                onComplete: () => {
                    // TODO: svg動畫插圖
                },
            }
        )
    })

    return (
        <div className='container' ref={container}>
            <div className='flex flex-wrap gap-16 w-[400px]'>
                {blockDefArr.map(({ text }, index) => (
                    <Block key={index} index={index} text={text} />
                ))}
            </div>
        </div>
    )
}

export default App
