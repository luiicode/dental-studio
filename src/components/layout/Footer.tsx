export function Footer() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section className='border-t-2 border-t-accent-primary px-4 py-10 md:px-8 lg:px-12'>
            <section
                className='flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-evenly'>
                <section className='flex flex-row items-center gap-2 cursor-default'
                         onClick={() => scrollToSection('inicio')}>
                    <img src="/public/favicon.svg" alt="logo" className='w-9 h-9 md:w-11 md:h-11'/>
                    <h3 className='text-text-primary font-bold text-lg md:text-xl'>Dental Studio</h3>
                </section>
                <p className='text-text-secondary text-base lg:text-lg'>
                    © 2026 Clínica Dental Studio. Todos los derechos reservados.
                </p>
                <ul className='flex flex-row items-center gap-6'>
                    <li className='text-text-secondary hover:text-accent-secondary cursor-pointer'>Privacidad</li>
                    <li className='text-text-secondary hover:text-accent-secondary cursor-pointer'>Terminos</li>
                    <li className='text-text-secondary hover:text-accent-secondary cursor-pointer'>Cookies</li>
                </ul>
            </section>
        </section>
    );
}