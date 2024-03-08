import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} shadow-2xl shadow-primary1 hover:shadow-none hover:translate-x-0 hover:translate-y-1 duration-300 rounded-xl`}
    >
      Get Started
    </button>
  );
};
export default Button;
