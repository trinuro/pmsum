import { dayak_strip } from "./objective";
import { ACTIVITY_HIGHLIGHTS } from "@/data";
import Link from "next/link"
import {Highlight_button} from "./highlight_card";

const background_colour = '[#FCEDDE]';

const Highlights = () =>{

    return (
        <section className="relative">
            <div className={`absolute w-full h-full top-0 bg-[#FCEDDE] -z-10`}></div>
            <div className="padding-container max-container relative">
                <h2 className="font-extrabold text-[36px] text-center py-8">ACTIVITY HIGHLIGHTS</h2>
                <section className="lg:px-[40px] 3xl:px-[120px] flex flex-col pb-8 lg:flex-row flex-wrap items-center justify-center gap-8">
                    {
                        ACTIVITY_HIGHLIGHTS.map((highlight, index)=>activity_card(index, highlight, background_colour))
                    }
                </section>
                <div className="flexCenter">
                    <Link href="/activities" className="py-4 px-10 bg-slate-300 mb-10 rounded-xl font-extrabold">MORE ACTIVITIES</Link>
                </div>
                {dayak_strip('left-0')}
                {dayak_strip('right-0')}
            </div>
        </section>
    )
}

interface HighlightProp{
    icon : React.ReactNode,
    name : string,
    highlighted_picture : string,
    date : string,
    main_page_link : string,
    description : string,
    colour : string,
    colour_hex : string,
}

export const activity_card = (index:Number, {icon, name, highlighted_picture, date, main_page_link, description, colour, colour_hex}:HighlightProp, bg_color:string='transparent') =>{

    return (        
        <Highlight_button index={index} icon={icon} name={name} highlighted_picture={highlighted_picture} date={date} main_page_link={main_page_link} description={description} bg_color={bg_color} colour={colour} colour_hex={colour_hex}></Highlight_button>    
    )
}

export default Highlights;