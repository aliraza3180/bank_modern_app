import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {" "}
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[48px] xxs:text-[35px] text-3xl text-white xs:leading-[76.8px] leading-[65.8px] w-full">
        Easily control your billing <br className="sm:block hidden" /> &
        invoicing.
      </h2>
      <p
        className={`font-poppins font-normal text-dimWhite xs:text-[18px] text-base leading-[30.8px] max-w-[470px] mt-5`}
      >
        In fact, it is the product, but also the mass. Mauris eu adipiscing
        ultrices methodio aenean neque. In fact, the entire medical center is
        located in the whole street.
      </p>
      <div className="flex flex-row flex-wrap gap-2 sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple"
          className="w-[128px]
h-[42px] object-contain sm:mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google-play"
          className="w-[128px]
h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);
export default Billing;
