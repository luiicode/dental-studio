import {Card} from "@/components/ui/card.tsx";
import {ServiceCard} from "@/data/DataServiceCard.tsx";

export function Services() {
    return (
        <section id='servicio' className='scroll-mt-24 mt-20 flex flex-col gap-16 px-4 md:px-8 lg:px-12'>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <article className='flex flex-col gap-2'>
                    <h2 className='text-text-primary font-bold text-3xl'>Cuidado integral para cada etapa</h2>
                    <p className='text-text-secondary font-normal tetx-sm'>
                        Desde limpiezas preventivas hasta rehabilitaciones complejas, cubrimos todas tus necesidades
                        dentales con especialistas certificados.
                    </p>
                </article>
                <section className='w-full h-full flex justify-end lg:place-items-end'>
                    <article className='w-fit h-fit border-b border-accent-secondary'>
                        <span className='font-semibold text-accent-primary'>Ver todos los servicios</span>
                    </article>
                </section>
            </section>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-3 mb-10'>
                {
                    ServiceCard.map((service, i) => (
                        <Card key={i} role={'article'}
                              className='group px-8 py-8 flex flex-col gap-10 hover:shadow-2xl'>
                            <div
                                className='w-fit h-fit p-2 border rounded-xl bg-accent-secondary/40 group-hover:bg-accent-primary transition-colors duration-300'>
                                {service.icon}
                            </div>
                            <section className='flex flex-col gap-4'>
                                <h3 className='font-bold text-xl text-text-primary'>{service.title}</h3>
                                <p className='text-sm text-text-secondary'>{service.description}</p>
                                <ul className='flex flex-col gap-3 list-disc ml-4'>
                                    <li className='font-semibold text-xs text-text-secondary'>{service.details.detail1}</li>
                                    <li className='font-semibold text-xs text-text-secondary'>{service.details.detail2}</li>
                                </ul>
                            </section>
                            <div>
                                <img src={service.image} alt="services" className='rounded-2xl'/>
                            </div>
                        </Card>
                    ))
                }
            </section>
        </section>
    );
}