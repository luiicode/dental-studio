import {Navbar} from "@/components/layout/Navbar.tsx";
import {Hero} from "@/components/section/Hero.tsx";
import {Services} from "@/components/section/Services.tsx";
import {Testimonials} from "@/components/section/Testimonials.tsx";
import {Footer} from "@/components/layout/Footer.tsx";

export function DentalStudio() {
    return (
        <div
            className='bg-background-primary min-h-screen w-full pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] box-border'>
            <section
                className='flex flex-col flex-1 gap-5 w-full'>
                <Navbar/>
                <Hero/>
                <Services/>
                <Testimonials/>
                <Footer/>
            </section>
        </div>
    );
}