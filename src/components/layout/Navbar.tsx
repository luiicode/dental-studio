import {Button} from "@/components/ui/button.tsx";

export function Navbar() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <nav
            className='fixed top-0 left-0 w-full z-50 pt-[env(safe-area-inset-top)] bg-background-primary flex flex-row justify-between px-4 md:py-6 md:px-8 lg:px-12'>
            <section className='flex flex-row items-center gap-2 cursor-default'
                     onClick={() => scrollToSection('inicio')}>
                <img src="/public/favicon.svg" alt="logo" className='w-9 h-9 md:w-11 md:h-11'/>
                <h3 className='text-text-primary font-bold text-lg md:text-xl'>Dental Studio</h3>
            </section>
            <section className='flex flex-row items-center gap-4 md:hidden'>
                <Button size='default' variant='outline'
                        className='bg-accent-primary text-botton-text text-base py-2 px-4'>
                    Agendar
                </Button>
            </section>
            <section className='hidden md:flex md:flex-row md:items-center md:gap-10'>
                <ul className='flex flex-row items-center gap-6'>
                    <li><a onClick={() => scrollToSection('inicio')}
                           className='font-semibold text-text-primary text-lg cursor-pointer'>Inicio</a></li>
                    <li><a onClick={() => scrollToSection('servicio')}
                           className='font-semibold text-text-primary text-lg cursor-pointer'>Servicio</a></li>
                    <li><a onClick={() => scrollToSection('testimonio')}
                           className='font-semibold text-text-primary text-lg cursor-pointer'>Testimonio</a></li>
                    <li><a onClick={() => scrollToSection('contactanos')}
                           className='font-semibold text-text-primary text-lg cursor-pointer'>Contactanos</a></li>
                </ul>
                <Button size='lg' variant='outline'
                        className='bg-accent-primary text-botton-text text-lg py-2 px-4 hover:bg-accent-secondary hover:text-botton-text'>
                    Agendar
                </Button>
            </section>
        </nav>
    );
}