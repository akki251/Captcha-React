import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import generateCaptcha from "./../../helpers/generateCaptcha";
import { toast } from "react-hot-toast";
let captchaText;
const Captcha = ({ isSubmit, onChangeStatus }) => {
  const captchInputRef = useRef();

  useEffect(() => {
    if (isSubmit) {
      const userInput = captchInputRef.current.value;
      if (userInput === captchaText) {
        toast.success("Ding ding ding! Congratulations, you're not a robot.");
        onChangeStatus(true);
      } else {
        toast.error("FAIL. Please try again with a better disguise, robot.");
        onChangeStatus(false);
      }
      captchInputRef.current.value = "";
    }

    // Regeneration new Captcha
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    captchaText = generateCaptcha(6);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillText(captchaText, 10, 35);
  });
  //  we want new captcha on every re-render that's the reason I have not kept the dependency array.

  return (
    <CustomInput labelTitle="Verify the captcha" htmlFor="captcha">
      <canvas id="myCanvas" className="bg-red-200" height="50"></canvas>
      <input
        ref={captchInputRef}
        id="captcha"
        placeholder="Captcha Value here.."
        className="outline-none py-2 border-4 border-pink-300 rounded-md px-2"
        type="text"
      />
    </CustomInput>
  );
};

export default Captcha;
