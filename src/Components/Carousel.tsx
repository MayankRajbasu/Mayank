
import React from 'react'
import Card from './Card';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Event {
    title: string;
    imageUrl: string;
    desc:string;
    tech1:string;
    tech2:string;
    tech3:string;
    link:string;
}

const Carousel: React.FC<{ events: Event[] }> = ({ events }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true },
        // [Autoplay({ delay: 2000 })]
    )

    return (
        <div className="embla my-12 w-full z-2 flex items-center">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {events.map((event, index) => (
                        <div className="embla__slide text-transparent " key={index}>
                            <Card event={event} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
