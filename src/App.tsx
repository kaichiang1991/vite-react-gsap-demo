import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import './App.css'
import PhaseOne from './components/phase1'

gsap.registerPlugin(useGSAP)

function App() {
    const [currentPhase, setCurrentPhase] = useState<number>(0)

    return currentPhase === 0 ? (
        <PhaseOne nextPhase={() => setCurrentPhase(phase => phase + 1)} />
    ) : (
        <></>
    )
}

export default App
