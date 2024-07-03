import React from 'react';
// import { SlCalender } from "react-icons/sl";
// import { CiClock2 } from "react-icons/ci";

interface Event {
    title: string;
    imageUrl: string;
    desc: string;
    tech1: string;
    tech2: string;
    tech3: string;
    link1: string;
    link2: string;
}

interface EventCardProps {
    event: Event;
}

const Card: React.FC<EventCardProps> = ({ event }) => {
    const renderurl = () => {
        if (event.link2 !== "") {
            return(
            <a href={event.link2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link hover:w-[20px] hover:h-[20px]">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            );
        }
        return null;
    }
    return (
        <div id="cards" className='text-slate-400 text-center relative' >
            <img src={event.imageUrl} alt={event.title} className="w-full h-[16rem] rounded-t-md object-cover" />
            <p className="text-teal-400 font-medium text-[18px] font-regular flex gap-3 justify-center w-full p-2 items-center tracking-tighter"><a href={event.link1} target='_blank' className='flex items-center gap-3 '>{event.title}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github hover:w-[20px] hover:h-[20px]">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg></a>
                {renderurl()}
            </p>
            <p className="font-regular text-[14px] xsm:px-2 sd:px-4">{event.desc}</p>
            <div className="flex w-full p-3 text-center gap-3 justify-center items-center">
                <div className="border border-teal-400 p-1 rounded">{event.tech1}</div>
                <div className="border border-teal-400 p-1 rounded">{event.tech2}</div>
                <div className="border border-teal-400 p-1 rounded">{event.tech3}</div>
            </div>
        </div>
    );
};

export default Card;
