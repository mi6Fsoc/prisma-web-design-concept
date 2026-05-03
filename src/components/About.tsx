import { WordsPullUpMultiStyle } from "./ui/WordsPullUpMultiStyle";
import { AnimatedText } from "./ui/AnimatedText";

export function About() {
  const headingSegments = [
    { text: "I am Marcus Chen, ", className: "font-normal" },
    { text: "a self-taught director. ", className: "font-serif italic" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" }
  ];

  return (
    <section id="our-story" className="w-full bg-black py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-[#101010] rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24 w-full max-w-6xl flex flex-col items-center text-center">
          
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 md:mb-12">
            Visual arts
          </span>

          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl mx-auto leading-[1.05] sm:leading-[1.0] mb-12 md:mb-20 text-[#E1E0CC]">
            <WordsPullUpMultiStyle segments={headingSegments} />
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimatedText
              text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
              className="text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
