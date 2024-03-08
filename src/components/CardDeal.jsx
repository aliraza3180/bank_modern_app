import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold xs:text-[48px] xxs:text-[35px] text-3xl text-white xs:leading-[76.8px] leading-[65.8px] w-full">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite xs:text-[18px] text-base leading-[30.8px] max-w-[470px] mt-5`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
