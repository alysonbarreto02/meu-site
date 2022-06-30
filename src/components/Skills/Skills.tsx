import { AboutMe } from "./AboutMe";
import { Citacao01 } from "./Citacao01";
import { Citacao02 } from "./Citacao02";
import { Emblems } from "./Emblems";

export default function Skills() {
    return (
        <div className="flex gap-2">
            <AboutMe />
            <div className="w-1/2 h-screen gap-2 grid grid-cols-4 grid-rows-5 mr-4">
                <Citacao01 />
                <Citacao02 />
                <Emblems />
            </div>
        </div>
    )
}





