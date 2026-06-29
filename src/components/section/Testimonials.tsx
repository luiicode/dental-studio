import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export function Testimonials() {
    return (
        <Card role={"article"}
              className='grid grid-cols-1 gap-6 lg:grid-cols-2 px-4 md:px-8 lg:px-12 bg-accent-primary border rounded-2xl w-10/12 max-w-6xl mx-auto shadow-lg mb-20'>
            <CardContent className='flex flex-col gap-5 lg:gap-10 items-center justify-center py-5 lg:py-0'>
                <h1 className='text-4xl text-botton-text font-extrabold'>¿Listo para tu primera visita?</h1>
                <p className='text-botton-text/80 text-xl font-semibold'>
                    Solicita una valoración inicial gratuita. Nuestro equipo te recibirá en un ambiente relajado y
                    profesional.
                </p>
                <section className='w-full flex flex-col gap-5 items-center justify-center lg:flex-row'>
                    <Button role={'button'} size={'lg'} variant={'outline'}
                            className='bg-background-secondary text-text-primary text-lg py-5 lg:py-7 lg:px-6 hover:bg-accent-secondary hover:text-botton-text font-semibold w-full lg:w-fit'>Agendar
                        por WhatsApp</Button>
                    <Button role={'button'} size={'lg'} variant={'outline'}
                            className='bg-transparent border border-background-secondary py-5 lg:py-7 lg:px-6 text-botton-text text-lg hover:bg-gray-100 font-semibold w-full lg:w-fit'>Llamar
                        a Recepcion</Button>
                </section>
            </CardContent>
            <CardContent className='p-0 grid grid-cols-2 gap-4 w-full max-w-md py-7'>
                <section className='flex flex-col gap-4'>
                    <img src="/public/Smile%20Studio%20Dentist.jpg" alt="Dentist"
                         className='w-full object-cover aspect-square rounded-[2rem] shadow-lg' loading='lazy'/>
                    <Card role={'article'}
                          className='bg-accent-primary border-none text-botton-text rounded-[2rem] aspect-square flex items-center justify-center shadow-lg'>
                        <CardContent className='p-4 text-center flex flex-col justify-center items-center h-full'>
                            <span className='text-5xl font-extrabold tracking-tight mb-2'>98%</span>
                            <span className='text-sm md:text-base font-medium opacity-90'>Satisfaccion</span>
                        </CardContent>
                    </Card>
                </section>
                <section className='flex flex-col gap-4 mt-8 md:mt-12'>
                    <Card role={'article'}
                          className='bg-accent-secondary border-none text-botton-text rounded-[2rem] aspect-square flex items-center justify-center shadow-lg'>
                        <CardContent className='p-4 text-center flex flex-col justify-center items-center h-full'>
                            <span className='text-5xl font-extrabold tracking-tight mb-2'>15+</span>
                            <span className='text-sm md:text-base font-medium opacity-90 leading-tight'>Años de<br/>Experiencia</span>
                        </CardContent>
                    </Card>
                    <img src="/public/Smile%20Studio%20Equipment.jpg" alt="Equipment"
                         className='w-full object-cover aspect-4/5 rounded-[2rem] shadow-lg' loading='lazy'/>
                </section>
            </CardContent>
        </Card>
    );
}