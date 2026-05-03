import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./ui/WordsPullUpMultiStyle";

const featureCards = [
  {
    type: "video",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    text: "Your creative canvas.",
  },
  {
    type: "text",
    number: "01",
    title: "Project Storyboard.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Visual timeline mapping",
      "Scene-by-scene framing",
      "Character tracking",
      "Export directly to PDF"
    ]
  },
  {
    type: "text",
    number: "02",
    title: "Smart Critiques.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "AI pacing analysis",
      "Instant creative notes",
      "Editing tool integrations"
    ]
  },
  {
    type: "text",
    number: "03",
    title: "Immersion Capsule.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Deep-focus notification silencing",
      "Adaptive ambient soundscapes",
      "Intelligent schedule syncing"
    ]
  }
];

export function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headingSegmentsRow1 = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-[#E1E0CC]" }
  ];
  const headingSegmentsRow2 = [
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8,
      }
    })
  };

  return (
    <section id="workshops" className="relative min-h-screen w-full bg-black py-16 md:py-24 px-4 md:px-6">
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 md:mb-24 px-2">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal w-full flex flex-col items-center text-center gap-2">
            <WordsPullUpMultiStyle segments={headingSegmentsRow1} />
            <WordsPullUpMultiStyle segments={headingSegmentsRow2} />
          </div>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2 lg:h-[480px]">
          {featureCards.map((card, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                whileHover={card.type === "text" ? { scale: 1.02, y: -4, boxShadow: "0 30px 60px rgba(0,0,0,0.8)", zIndex: 20 } : {}}
                variants={cardVariants}
                className="relative rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col h-[400px] lg:h-full group"
              >
                {card.type === "video" ? (
                  <>
                    <video
                      src={card.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="relative h-full flex items-end p-6 md:p-8">
                      <span className="text-[#E1E0CC] font-medium text-lg leading-tight w-full max-w-[150px]">
                        {card.text}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#212121] h-full w-full p-6 sm:p-8 flex flex-col items-start transition-colors duration-500 hover:bg-[#252525]">
                    <div className="flex justify-between items-start w-full mb-8">
                      <img src={card.icon} alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-contain grayscale opacity-80" />
                      <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider">
                        {card.number}
                      </span>
                    </div>
                    
                    <h3 className="text-[#E1E0CC] text-xl sm:text-2xl font-medium mb-6">
                      {card.title}
                    </h3>
                    
                    <ul className="flex flex-col gap-4 mb-auto">
                      {card.items?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-8 flex items-center gap-2 text-[#E1E0CC] text-sm group-hover:gap-3 transition-all">
                      Learn more 
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
