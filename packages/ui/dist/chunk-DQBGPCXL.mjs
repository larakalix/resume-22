import r from 'clsx';
import { jsx } from 'react/jsx-runtime';

var n=({inverted:e,justMail:t=!1})=>{let o=r({["text-white bg-v-blue dark:text-white dark:bg-v-blue"]:e&&!t,["text-v-black bg-white dark:text-white dark:bg-v-black"]:!e&&!t,["bg-transparent text-white dark:text-v-black text-[2.5rem] md:text-[5rem] font-bold"]:t===!0});return jsx("a",{href:"mailto:uki@live.co.uk",className:`font-montserrat font-bold px-8 py-4 rounded-v-rounded flex justify-center items-center ${o} hover:opacity-90`,children:t?"uki@live.co.uk":"Got a Project? Let's talk!"})};

export { n as a };
