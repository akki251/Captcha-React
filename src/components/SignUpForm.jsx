import React, { useCallback, useState } from "react";
import Captcha from "./Captcha";
import CustomInput from "./CustomInput";
import { BsLightbulbFill } from "react-icons/bs";
import toggleDarkMode from "./../../helpers/toggleDarkMode";
const SignUpForm = () => {
  const [captchaStatus, setCaptchaStatus] = useState({
    isSubmit: false,
    numberOfRetries: 0,
  });

  const handleSubmit = () => {
    setCaptchaStatus((prevState) => ({
      isSubmit: true,
      numberOfRetries: prevState.numberOfRetries + 1,
    }));
  };

  const onChangeStatus = useCallback((status) => {
    if (status === false) {
      setCaptchaStatus((prevState) => ({
        isSubmit: false,
        numberOfRetries: prevState.numberOfRetries + 1,
      }));
    } else {
      setCaptchaStatus((prevState) => ({
        isSubmit: false,
        numberOfRetries: 0,
      }));
    }
  }, []);

  return (
    <div className=" flex min-h-screen flex-col bg-gray-300  dark:bg-[#2D2727] ">
      <div className="py-5 flex justify-center ">
        <span
          onClick={toggleDarkMode}
          className="w-[50px] h-[50px]  dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        >
          <BsLightbulbFill />
        </span>
      </div>
      <section className="wrapper  flex-1   flex items-center justify-center">
        <div
          id="form-wrapper"
          className="md:w-1/4 sm:w-1/2 bg-white drop-shadow-lg shadow-lg rounded-xl py-5 px-8 "
        >
          <CustomInput labelTitle="Your Name" htmlFor="name">
            <input
              id="name"
              className="outline-none py-2 border-4 border-pink-300 rounded-md px-2"
              type="text"
              placeholder="Rohit"
            />
          </CustomInput>
          <CustomInput labelTitle="Enter Password" htmlFor="password">
            <input
              id="password"
              className="outline-none py-2 border-4 border-pink-300 rounded-md px-2"
              type="password"
            />
          </CustomInput>
          <Captcha
            isSubmit={captchaStatus?.isSubmit}
            onChangeStatus={onChangeStatus}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-700 p-3  rounded-md my-3 text-white shadow-2xl drop-shadow-md dark:text-gray-200 dark:bg-[#413543]"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
