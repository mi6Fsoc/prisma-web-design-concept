import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { WordsPullUp } from "./ui/WordsPullUp";

export function Hero() {
  const navItems = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];

  const textDelay = 0.5;
  const btnDelay = 0.7;

  return (
    <section className="h-screen w-full relative p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col items-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <nav className="absolute top-0 flex items-center bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-10">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 mb-2 md:mb-8 z-10 w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[#E1E0CC] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>
            
            <div className="col-span-12 md:col-span-4 flex flex-col md:items-start justify-end pb-2 md:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: textDelay }}
                className="text-primary/70 text-xs sm:text-sm md:text-base mb-6 md:mb-10 max-w-sm leading-[1.2]"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: btnDelay }}
                className="group flex items-center justify-between gap-6 pl-6 pr-1 py-1 bg-primary rounded-full hover:gap-8 transition-all duration-300"
              >
                <span className="text-black font-medium text-sm sm:text-base">Join the lab</span>
                <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transform group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
