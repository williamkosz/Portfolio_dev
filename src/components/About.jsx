import about from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">A propos de 
            <span className="text-neutral-500"> moi</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-items-center">
                    <img className="rounded-2xl"src= {about} alt="Image pour rubrique à propos de moi" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About