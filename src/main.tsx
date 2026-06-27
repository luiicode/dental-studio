import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import {DentalStudio} from "@/DentalStudio.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DentalStudio/>
    </StrictMode>,
)
