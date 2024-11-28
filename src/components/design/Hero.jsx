import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="z-1 h-6 mx-2.5 bg-n-11 relative rounded-b-[1.25rem] shadow-xl lg:h-6 lg:mx-8" />
      <div className="z-1 h-6 mx-6 bg-n-11/70 relative rounded-b-[1.25rem] shadow-xl lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="left-10 right-10 h-0.25 bg-n-6 pointer-events-none absolute top-[55.25rem] hidden xl:block" />

      <PlusSvg className="z-2 pointer-events-none absolute left-[2.1875rem] top-[54.9375rem] hidden xl:block" />

      <PlusSvg className="z-2 pointer-events-none absolute right-[2.1875rem] top-[54.9375rem] hidden xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="border-n-2/10 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 aspect-square w-[65.875rem] rounded-full border" />
      <div className="border-n-2/10 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 aspect-square w-[51.375rem] rounded-full border" />
      <div className="border-n-2/10 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 aspect-square w-[36.125rem] rounded-full border" />
      <div className="border-n-2/10 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 aspect-square w-[23.125rem] rounded-full border" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="border-n-2/5 -translate-x-1/2 absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] rounded-full border md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="w-0.25 rotate-[46deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="w-0.25 -rotate-[56deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="w-0.25 rotate-[54deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="w-0.25 -rotate-[65deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="w-0.25 -rotate-[85deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="w-0.25 rotate-[70deg] absolute bottom-1/2 left-1/2 h-1/2 origin-bottom">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
