import { MdDoubleArrow } from "react-icons/md";
import { Description } from "./Description";

export default function Init() {
    return (
        <div className="flex">
            <Description/>
            <div className="flex h-full w-1/2 ">
                    <MdDoubleArrow className="w-5/6 h-5/6 -mt-2 text-neutral-800" />
            </div>
        </div>
    )
}


