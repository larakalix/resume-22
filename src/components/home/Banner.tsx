import React from "react";

export const Banner = () => {
    return (
        <div className="text-center max-w-full flex items-center justify-start flex-col">
            <h2 className="font-montserrat font-extrabold leading-[1] text-[3rem] md:text-[5.2rem] xl:text-[6.5rem] px-[1rem] md:px-[10rem] xl:px-[10rem] text-v-black dark:text-white tracking-[-.05em]">
                Fullstack Developer based in Nicaragua
            </h2>

            <p className="font-montserrat text-[#666666] dark:text-[white] tracking-[-.02em] font-normal leading-[1.6] mt-10 text-[1rem] md:text-[1.25rem]">
                I&apos;m Ivan Lara, I build digital products based on your
                business needs.
            </p>
        </div>
    );
};
