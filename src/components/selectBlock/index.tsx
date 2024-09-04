import { Dispatch, SetStateAction } from 'react'

export default function SelectBlock({
    index,
    text,
    setActiveIndex,
}: {
    index: number
    text: string
    setActiveIndex: Dispatch<SetStateAction<number | undefined>>
}) {
    return (
        <div className='option-block border-2 border-white border-t-0 py-4 px-2'>
            <div
                className={`item border border-cyan-300 rounded-md text-white border-opacity-0 transition-all duration-300 `}
                onClick={() => setActiveIndex(index)}
                data-index={index}
            >
                <span className='cursor-pointer'>{text}</span>
            </div>
        </div>
    )
}
