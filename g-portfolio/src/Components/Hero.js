import React from 'react'
import Image from "next/image";
import web1 from "../Assets/docs.png";
import web2 from "../Assets/myPort.png";
import web3 from "../Assets/web3.png";
import web4 from "../Assets/web4.png";




const Hero = () => {
  return (
    <section>
    <div>
        <h3 className="text-3xl py-1 dark:text-white font-semibold">My Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Explore my portfolio for a glimpse into a world where pixels meet purpose. From responsive<span className="text-teal-500"> design mastery   </span> to optimizing web performance, every project reflects my commitment to elevating the user experience.
        <span className="text-teal-500"> I thrive </span> in collaborative environments, working closely with design teams and backend developers to bring cohesive and polished web solutions to life.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div className="basis-1/3 flex-1">
          <Image src={web1}  className="rounded-lg object-cover cursor-pointer" width={"100%"} height={'100%'} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
          <Image src={web2} className="rounded-lg object-cover cursor-pointer" width={"100%"} height={'100%'} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
          <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={'100%'} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
          <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={'100%'} layout="responsive"/>
        </div>
   
      </div>
    </section>
  )
}

export default Hero