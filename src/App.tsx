import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'
import Block from './components/block'

gsap.registerPlugin(useGSAP)

function App() {
    return (
        <div className='container'>
            <Block text='毅力' />
        </div>
    )
}

export default App
