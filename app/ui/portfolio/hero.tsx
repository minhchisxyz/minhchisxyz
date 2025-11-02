
import Image from "next/image";
import Me from "./img/me.png"

export default function Hero  (
    { setPageAndBackgroundAction, name }: {
      setPageAndBackgroundAction: (page: string) => void,
      name: string
    }
) {
  const hover = 'hover:shadow-none hover:inset-shadow-[-4px_4px_8px_#222222,2px_-2px_6px_#ffffff] hover:cursor-pointer'
  const shadow = 'shadow-[4px_4px_8px_#222222,-2px_-2px_6px_#ffffff]'
  const glass = `bg-white/15 backdrop-blur-md border border-none rounded-lg`
  return (
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
      <span className="text-blue-300 font-semibold text-lg">
        Hi, my name is
      </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mt-3 mb-5 text-white text-shadow-hero">
            { name }
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-8 text-shadow-medium">
            I enthusiast in coding, badminton and doing gym things
          </h2>
          <div className="flex justify-center md:justify-start gap-4">
            <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setPageAndBackgroundAction('projects');
                }}
                className={`px-8 py-3 text-white font-semibold transition-all ${glass} ${shadow} ${hover}`}
            >
              My Projects
            </button>
            {/*<Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setPage('contact');
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Get in Touch
            </Link>*/}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl bg-white/10 backdrop-blur-sm p-1">
            <Image
                src={Me}
                alt="Myself"
                placeholder={"blur"}
                className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
  );
}