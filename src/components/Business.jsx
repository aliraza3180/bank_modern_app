import React from "react";
import { features } from "../constants";
import Button from "./Button";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white xs:text-[18px] text-base leading-[23px] bm-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite xs:text-[16px] text-[14px] leading-[23px] bm-1">
        {content}
      </p>
    </div>
  </div>
);

const business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold xs:text-[48px] xxs:text-[35px] text-3xl text-white xs:leading-[76.8px] leading-[65.8px] w-full">
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite xs:text-[18px] text-base leading-[30.8px] max-w-[470px] mt-5`}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default business;
