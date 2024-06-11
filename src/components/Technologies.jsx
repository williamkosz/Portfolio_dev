import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri"
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";





const Technologies = () => {
  return (
    <div className="boerder-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-[#dc4d25]" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-[#254bdd]" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-[#efd81c]" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoNodejs className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-[#f06033]" />
            </div>

        </div>
    </div>

  )
}

export default Technologies