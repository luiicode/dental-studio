import {Box, Cone, Cylinder} from "lucide-react";

export const ServiceCard = [
    {
        icon: <Box size={35} className='text-accent-primary group-hover:text-accent-secondary/90'/>,
        title: 'Diseño de Sonrisa',
        description: 'Carillas de porcelana y resina de alta estética para lograr la simetría y el color perfecto de forma natural.',
        details: {
            detail1: 'Mockup digital previo',
            detail2: 'Mínimamente invasivo'
        },
        image: 'public/Smile Studio Landing.jpg'
    },
    {
        icon: <Cylinder size={35} className='text-accent-primary group-hover:text-accent-secondary/90'/>,
        title: 'Ortodoncia Invisible',
        description: 'Alineadores transparentes Invisalign que corrigen tu postura dental sin que nadie note que los llevas puestos.',
        details: {
            detail1: 'Sin brackets metálicos',
            detail2: 'Removibles para comer'
        },
        image: 'public/Smile Studio Aligner.jpg'
    },
    {
        icon: <Cone size={35} className='text-accent-primary group-hover:text-accent-secondary/90'/>,
        title: 'Implantología',
        description: 'Recupera la funcionalidad y estética de tus piezas perdidas con implantes de titanio de máxima biocompatibilidad.',
        details: {
            detail1: 'Cirugía guiada por PC',
            detail2: 'Sedación consciente'
        },
        image: 'public/Smile Studio Implant.jpg'
    }
]