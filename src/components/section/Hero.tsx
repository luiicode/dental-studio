import {Badge} from "@/components/ui/badge.tsx";
import {Activity} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";

export function Hero() {
    return (
        <section id='inicio'
                 className='w-full mt-[calc(6rem+env(safe-area-inset-top))] px-4 md:px-8 lg:px-12 md:pt-10 grid grid-cols-1 lg:grid-cols-2'>
            <section className='flex flex-col gap-4 lg:justify-center'>
                <Badge variant='outline'
                       className='bg-accent-secondary/30 text-accent-primary font-bold uppercase py-3 px-3 flex flex-row items-center gap-2'>
                    <Activity size={20} strokeWidth={2.25}/>
                    Agenda Abierta
                </Badge>
                <h1 className='text-text-primary font-bold text-5xl lg:text-8xl'>Tu sonrisa es nuestra <span
                    className='text-accent-primary italic'>obra maestra</span>
                </h1>
                <p className='mt-5 text-text-secondary text-base text-start lg:text-2xl lg:mt-10'>
                    Combinamos tecnología de vanguardia con un trato humano excepcional para transformar tu salud bucal
                    en una experiencia de bienestar.
                </p>
                <section className='flex flex-col gap-4 lg:items-center lg:flex-row'>
                    <Button size={"lg"} variant={"default"}
                            className='mt-5 mb-3 w-fit text-botton-text bg-accent-primary text-center font-bold text-base py-6 px-4 hover:bg-accent-secondary hover:text-botton-text lg:mt-10 lg:mb-6'>Ver
                        especialidades</Button>
                    <article className='flex flex-row gap-4 lg:mt-4'>
                        <section className='flex -space-x-3 aria-hidden:true'>
                            <img src='/public/user1.avif'
                                 className="size-10 rounded-full border-2 border-white bg-slate-200"/>
                            <img src='/public/user2.jpeg'
                                 className="size-10 rounded-full border-2 border-white bg-slate-300"/>
                            <img src='/public/user3.png'
                                 className="size-10 rounded-full border-2 border-white bg-slate-400"/>
                        </section>
                        <section className='flex flex-col items-start'>
                            <p className='font-bold text-text-primary text-sm'>+2,500 pacientes</p>
                            <p className='text-text-secondary text-sm'>confían en nosotros</p>
                        </section>
                    </article>
                </section>
            </section>
            <section className='mt-20 relative mb-16 md:mb-24 w-full lg:mt-0'>
                <div className='w-[90%] md:w-[85%] lg:w-[80%] ml-auto'>
                    <img src="/public/Smile%20Studio%20Clinic%20Interior.jpg" alt="consultorio"
                         className='w-full h-auto object-cover rounded-2xl'/>
                </div>
                <Card size={"default"} role={"article"}
                      className='absolute left-0 -bottom-10 md:-bottom-16 z-10 w-[60%] shadow-2xl lg:w-[30%] lg:left-20'>
                    <CardTitle className='font-semibold text-accent-primary text-lg text-start pl-3'>Tecnología
                        3D</CardTitle>
                    <CardContent className='text-text-secondary text-xs text-start'>Utilizamos escaneo intraoral de
                        última
                        generación para diagnósticos precisos sin moldes
                        tradicionales.</CardContent>
                </Card>
            </section>
        </section>
    );
}