"use client";
import Image from "next/image";

const SpeechYDP = () => {
  return (
    <div className="w-full h-3/4 p-4">
      {/* Wrapper for medium screens and up */}
      <div className="md:flex md:flex-col md:items-center">
        {/* Heading Section */}
        <div className="text-center my-4 md:mb-8">
          <h1 className="my-element uppercase font-[700] leading-[120%] text-4xl md:text-5xl">
            Who We Are
          </h1>
        </div>

        {/* Image and Paragraph Section */}
        <div className="md:flex md:items-center md:justify-center w-full">
          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
            <Image
              src="/image/team/mt/MT_Alma_Aizat.png"
              alt="Who We Are"
              width={730}
              height={730}
              className="object-contain md:w-[300px] lg:w-[400px] 2xl:w-[600px]"
            />
          </div>

          {/* Paragraph Section */}
          <div className="md:w-2/3 mx-12 my-2 md:ml-4">
            <div className="text-base lg:text-lg 2xl:text-2xl">
              <p className="my-8">
                As a proud Sarawakian, serving my nation will be one of my
                greatest honors. Hi, I'm Awangku Alma'Aizat bin Awgku Mohamad
                Zainie, a second-year student in the Faculty of Built
                Environment. Taking on the role of president in the current
                tenure is both a privilege and a significant responsibility. My
                duty extends beyond representing Sarawakians on the main campus
                in KL—I am also committed to advocating for and uniting
                Sarawakians across other campuses. Through this role, I aim to
                strengthen our community, foster collaboration, and ensure that
                our voices are heard.
              </p>
              {/* <p className="my-8">
                When I first entered Universiti Malaya, it felt intimidating as
                it was my first time in foreign land. Thanks to PMSUM, I could
                have a little sense of home albeit being across the South China
                Sea. Fast forward 2 years later, I am now helming the very same
                organisation that made me feel like im at home. As such, we
                intend to help our fellow Sarawakians adjust to the new
                surroundings and nurture the freshmen to be actively involved in
                organisational activities.
              </p>
              <p className="my-8">
                To fellow Sarawakians in Universiti Malaya, come and join us in
                embarking on this journey!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechYDP;
