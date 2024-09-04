import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import SelectBlock from '../selectBlock'
import './index.css'

const textArr: string[] = ['無懼未來的自己', '勇於挑戰的自己', '珍惜每天的自己']

export default function PhaseTwo() {
    const container = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

    useGSAP(() => {
        gsap.timeline()
            .from('.frame', {
                scaleY: 0,
                duration: 1,
            })
            .addLabel('block-start')
            .from(
                '.option-block',
                { opacity: 0, padding: 0, height: 0, duration: 1 },
                'block-start'
            )
            .from('.option-block span', { opacity: 0 }, 'block-start')
    })

    useGSAP(() => {
        if (activeIndex === undefined) return

        gsap.timeline()
            .to(`.item[data-index="${activeIndex}"`, {
                borderColor: '#67e8f9',
                duration: 0.5,
            })
            .set('.title-text', { textContent: textArr[activeIndex] }, '-=0.2 ')
            .from('.title-text', { scaleX: 0 })
            .to('.option-block', { opacity: 0, padding: 0, height: 0, duration: 1, delay: 0.5 })
    }, [activeIndex])

    return (
        <div className='flex flex-wrap justify-center gap-1'>
            <div className='relative w-[300px] flex flex-wrap justify-center' ref={container}>
                <div className='w-full flex gap-4 items-center justify-between'>
                    <div className='point flex items-center text-xl'>..</div>
                    <p className='title-text absolute left-1/2 -translate-x-1/2 origin-left' />
                    <div className='outer frame'>
                        <div className='inner frame'></div>
                    </div>
                    <div className='point flex items-center'>..</div>
                </div>
            </div>
            <div className='option-block flex flex-col w-3/5 text-center'>
                {textArr.map((text, index) => (
                    <SelectBlock
                        key={text}
                        index={index}
                        text={text}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
                <div className='border-2 border-white border-t-0 rounded-b-xl h-6'></div>
            </div>
        </div>
    )
}
