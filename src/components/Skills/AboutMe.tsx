export function AboutMe() {
    return (
        <div className="w-1/2 h-screen gap-2 grid grid-cols-4 grid-rows-5">
            <div className="h-4/5 col-span-full bg-gradient-to-r from-gray-600 
            to-gray-500 ml-4 rounded-md row-span-5 flex px-2">
                <div className="w-1/2 h-full flex items-center ">
                    <div className="border-transparent bg-gradient-to-tr from-green-500 to-lime-400 rounded-xl p-1">
                    <img src="/assets/eu.png" alt="" className="w-full rounded-xl p-1 bg-gradient-to-r from-gray-600 
            to-gray-500" />
                    </div>
                </div>
                <div className="w-1/2 h-full justify-center items-center flex py-24">
                    <div className="">
                        <h2 className=" ml-4 text-white font-semibold text-3xl pb-4 text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-lime-400">About me.</h2>
                        <p className="ml-4 text-white">My name is <strong className="text-transparent bg-clip-text bg-gradient-to-tl from-green-500 to-lime-400">Alyson</strong>, welcome to my space. 
                        I'm <strong className="text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-lime-400">19</strong>.</p>
                        <br />
                        <p className="ml-4 text-white">I'm a front-end developer and an enthusiast of the 
                        <strong className="text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-lime-400"> Tech</strong> branch and its aspects. Currently working with <span className="underline font-sans">HTML</span>, 
                        <span className="underline font-sans">CSS</span>, <span className="underline font-sans">Javascript</span> and <span className="underline font-sans">Next</span>.
                        The good side of the technology area is always having new challenges and this keeps me motivated all the time 
                        </p>
                        <br />
                        <p className="ml-4 text-white">When I'm not working I dedicate myself to personal projects or I'm at the <strong className="text-transparent bg-clip-text bg-gradient-to-tl from-green-500 to-lime-400">beach</strong> because no one is made of iron ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
