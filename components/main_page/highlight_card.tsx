'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card_flip from "react-card-flip"; // npm install react-card-flip


interface HighlightProp{
    icon : string,
    icon_alt_name : string,
    name : string,
    highlighted_picture : string,
    date : string,
    main_page_link : string,
    description : string
}

interface highlightButtonProp{
    icon : string,
    icon_alt_name : string,
    name : string,
    index : Number;
    highlighted_picture : string,
    date : string,
    main_page_link : string,
    description : string,
    bg_color : string,
    colour : string,
}

export function Highlight_button({icon, icon_alt_name, name, index, highlighted_picture, date, main_page_link, description, bg_color, colour}:highlightButtonProp){
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }
    
    return (
        <>
        <Card_flip flipDirection='horizontal' isFlipped={isFlipped}>
            {/* Front */}
            <section key={`highlighted-activity-${index}`} id={`highlighted-activity-${index}`} className={`border-${colour} border-2 bg-${bg_color} border-solid px-4 py-5 rounded-lg max-w-[340px] relative`}>
                <div className="flex flex-row items-center justify-center pb-5">
                        <Image src={icon} alt={icon_alt_name} height={75} width={75}></Image>
                        <p className="font-extrabold text-[20px] uppercase">{name}</p>
                </div>
                <div id={`highlighted-activity-front-${index}`}>
                    <Image src={highlighted_picture} alt="Highlighted picture" height={1024} width={900} className="w-full h-auto"></Image>
                    <p className="pt-5 text-gray-text text-center">Organised on {date}</p>
                    <div className="flex justify-end pt-8 font-extrabold text-[48px] w-full text-right" id={`arrow-${index}`}>
                        <button onClick={flipCard}>
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.267 36.5398L12.8693 32.1761L23.1136 21.9318H0V15.5227H23.1136L12.8693 5.29545L17.267 0.914773L35.0795 18.7273L17.267 36.5398Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            {/* Back */}
            <section key={`highlighted-activity-${index}`} id={`highlighted-activity-${index}`} className={`bg-${colour} px-4 py-5 rounded-lg max-w-[340px] relative text-white`}>
                <div className="flex flex-row items-center justify-center pb-5">
                        <Image src={icon} alt={icon_alt_name} height={75} width={75}></Image>
                        <p className="font-extrabold text-[20px] uppercase">{name}</p>
                </div>
                <div id={`highlighted-activity-back-${index}`}>
                    <p className="text-center font-[24px]">{description}</p>
                    <div className="flex justify-between font-extrabold text-[24px] w-full text-right pt-6" id={`arrow-${index}`}>
                        <button onClick={flipCard}>
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5511 36.5398L0.738636 18.7273L18.5511 0.914773L22.9489 5.27841L12.7045 15.5227H35.8182V21.9318H12.7045L22.9489 32.1591L18.5511 36.5398Z" fill="white"/>
                            </svg>
                        </button>
                        <Link href={main_page_link}>LEARN MORE</Link>
                    </div>
                </div>
            </section>
        </Card_flip>
        {/* <section key={`highlighted-activity-${index}`} id={`highlighted-activity-${index}`} className={`border-${colour} border-2 bg-inherit border-solid px-4 py-5 rounded-lg max-w-[340px] relative`}>
            <div className="flex flex-row items-center justify-center pb-5">
                <Image src={icon} alt={icon_alt_name} height={75} width={75}></Image>
                <p className="font-extrabold text-[20px] uppercase">{name}</p>
            </div>
            <Card_flip flipDirection='horizontal' isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    A
                </div>
                <div onClick={flipCard}>B</div>
            </Card_flip>
            <div id={`highlighted-activity-back-${index}`} className={`hidden text-white`}>
                <p className="text-center font-[24px]">{description}</p>
                <div className="flex justify-between font-extrabold text-[24px] w-full text-right pt-6" id={`arrow-${index}`}>
                    <button onClick={handleClick}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5511 36.5398L0.738636 18.7273L18.5511 0.914773L22.9489 5.27841L12.7045 15.5227H35.8182V21.9318H12.7045L22.9489 32.1591L18.5511 36.5398Z" fill="white"/>
                        </svg>
                    </button>
                    <Link href={main_page_link}>LEARN MORE</Link>
                </div>
            </div>
                
            <div id={`highlighted-activity-front-${index}`}>
                <Image src={highlighted_picture} alt="Highlighted picture" height={1024} width={900} className="w-full h-auto"></Image>
                <p className="pt-5 text-gray-text text-center">Organised on {date}</p>
                <div className="flex justify-end pt-8 font-extrabold text-[48px] w-full text-right" id={`arrow-${index}`}>
                    <button onClick={handleClick}>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.267 36.5398L12.8693 32.1761L23.1136 21.9318H0V15.5227H23.1136L12.8693 5.29545L17.267 0.914773L35.0795 18.7273L17.267 36.5398Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section> */}
        </>
    )
}
