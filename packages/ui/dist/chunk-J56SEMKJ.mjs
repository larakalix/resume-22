import l from 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var a=(t=>(t[t.default=0]="default",t[t.big=1]="big",t[t.small=2]="small",t[t.extrasmall=3]="extrasmall",t))(a||{});var g=({title:n,inverted:o=!1,size:r=1,subtitle:e=null,className:t=void 0})=>{if(!n&&!e)return null;let d=l({["font-semibold text-[2.8rem] md:text-[3.8rem] px-2 md:px-[10rem]"]:r===0,["font-bold text-[2.4rem] md:text-[4.2rem] px-2 md:px-[10rem]"]:r===1,["font-semibold text-[1rem] md:text-[2.2rem] px-2 md:px-[10rem]"]:r===2,["font-semibold text-[1rem] md:text-[1.2rem] px-2 md:px-[6rem]"]:r===3}),m=l({["text-white dark:text-v-black"]:o,["text-v-black dark:text-white"]:!o});return jsxs(Fragment,{children:[jsx("h1",{className:`font-montserrat md:leading-[2.8rem] ${d} ${m} ${t!=null?t:""}`,children:n}),e!=null?e:jsx("span",{className:`font-montserrat text-xs font-light italic ${m}`,children:e})]})};

export { a, g as b };
