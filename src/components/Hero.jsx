import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";
import { AnimatePresence, motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimationUp,
  headContentAnimationDown,
  slideAnimation,
  headTextAnimation,
} from "../utils/motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="home"
        className={`flex md:flex-row flex-col xs:mt-0 mt-2 ${styles.paddingY}`}
      >
        <motion.div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.div
            {...headContentAnimationUp}
            className="flex flex-row items-center py-[6px] sm:px-4 px-2 bg-discount-gradient rounded-[10px] mb-2"
          >
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p
              className={`${styles.paragraph} xxs:text-[14px] text-[12px] xs:text-[20px] ml-2`}
            >
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </motion.div>
          <motion.div
            {...headContainerAnimation}
            className="flex flex-row justify-between items-center w-full"
          >
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] xxs:text-[45px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            <motion.div
              {...headTextAnimation}
              className="ss:flex hidden md:mr-4 mr-0"
            >
              <GetStarted />
            </motion.div>
          </motion.div>
          <motion.div {...headContentAnimationDown}>
            <h1 className="font-poppins font-semibold ss:text-[68px] xxs:text-[42px] text-[39px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Payment Method.
            </h1>
            <p
              className={`${styles.paragraph} max-w-[470px] xs:text-[18px] text-base mt-5`}
            >
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </motion.div>
        </motion.div>
        <div
          className={`flex-1 sm:flex md:-my-0 my-10 relative
        `}
        >
          <motion.div {...headTextAnimation}>
            <img
              src={robot}
              alt="robot"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </motion.div>

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40  white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <div className={`${styles.flexCenter} ss:hidden `}>
            <GetStarted />
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
