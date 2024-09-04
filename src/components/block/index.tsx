import { Dispatch, SetStateAction } from 'react'
import Title from '../title'
import './index.css'

export default function Block({
    index,
    text,
    active,
    setActiveIndex,
}: {
    index: number
    text: string
    active: boolean
    setActiveIndex: Dispatch<SetStateAction<number | undefined>>
}) {
    return (
        <div
            className={`block-component custom-block w-[130px] h-[190px] p-2 cursor-pointer ${
                active ? 'active' : ''
            }`}
            onClick={() => {
                setActiveIndex(index)
            }}
            data-index={index}
        >
            <div className='w-full h-full custom-block items-center relative border-[3px]'>
                <Title />
                <span className='w-full absolute text-center bottom-4'>{text}</span>
            </div>
        </div>
    )
}
