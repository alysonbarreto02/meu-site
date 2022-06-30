import { Languages } from "./Languages";

const languages = [{
    title: "JAVASCRIPT",
    url: "/assets/javascript.svg",
},
{
    title: "TYPESCRIPT",
    url: "/assets/typescript.svg",
},
{
    title: "HTML",
    url: "/assets/html.svg",
},
{
    title: "CSS",
    url: "/assets/css3.svg",
},
{
    title: "REACT-JS",
    url: "/assets/react.svg",
},
{
    title: "NEXT-JS",
    url: "/assets/next.png",
},
{
    title: "TAILWIND-CSS",
    url: "/assets/tailwind-css.svg"
}]

export function Emblems() {
    return <div className="bg-gradient-to-r from-gray-500 to-gray-300 col-span-4 
    row-span-2 rounded-md w-full flex overflow-x-scroll items-center gap-4">
        <h3 className=" ml-4 text-white font-semibold text-3xl pb-4 text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-lime-400">Skills.</h3>
        {languages.map((languages, index) => < Languages title={languages.title} url={languages.url} key={index} />)}
    </div>;
}

