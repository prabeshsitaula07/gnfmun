import { FaArrowRightLong } from "react-icons/fa6";

export default function SponsorChild() {
  return (
    <div className="flex justify-between px-12 py-2">
      <div className="text-5xl">
        <h3>Show you care.</h3>
        <h3>Change their life.</h3>
      </div>
      <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2 px-2 my-4 ring-1 ring-primary flex">
                    <span className="w-56 h-48 rounded bg-primary absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white text-lg">Get Started <FaArrowRightLong/></span>
                </button>
    </div>
  )
}
