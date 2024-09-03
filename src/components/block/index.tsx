import Title from '../title'
import './index.css'

export default function Block({ text }: { text: string }) {
    return (
        <div className='custom-block w-[130px] h-[190px] p-2'>
            <div className='w-full h-full custom-block items-center relative border-[3px]'>
                <Title />
                <span className='w-full absolute text-center bottom-4'>{text}</span>
            </div>
        </div>
    )
}
