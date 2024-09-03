import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
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
    const container = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState<number>()

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

    useGSAP(() => {
        if (activeIndex === undefined) return // 沒選擇的淡出

        const timeline = gsap.timeline()

        ;[0, 1, 2, 3]
            .filter(index => index != activeIndex)
            .map(index => {
                timeline.to(`.block-component-${index}`, { alpha: 0 }, 0)
            })

        timeline.eventCallback('onComplete', () => {
            console.log('oncomplete')
        })
        if (container.current) {
            const containerRect = container.current.getBoundingClientRect()
            const block: HTMLDivElement = document.querySelector(`.block-component-${activeIndex}`)!
            const blockRect = block.getBoundingClientRect()

            // 計算移動到正中間的位移
            const containerCenterX: number = containerRect.left + containerRect.width / 2,
                moveX: number = containerCenterX - blockRect.x - blockRect.width / 2

            const containerCenterY: number = containerRect.top + containerRect.height / 2,
                moveY: number = containerCenterY - blockRect.y - blockRect.height / 2

            timeline.call(() => {
                gsap.to(`.block-component-${activeIndex}`, {
                    x: moveX,
                    y: moveY,
                })
            })
        }
    }, [activeIndex])

    return (
        <div className='container border-white border py-24 px-10' ref={container}>
            <div className='flex flex-wrap items-center justify-center gap-16 w-[400px]'>
                {blockDefArr.map(({ text }, index) => (
                    <Block
                        key={index}
                        index={index}
                        text={text}
                        active={activeIndex === index}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
