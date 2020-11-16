import React, { useState } from "react";
import arrow from "../assets/down-arrow.svg";
import teacherIcon from "../assets/teacher1.svg";
import "./RomanNumerals.css";

type RomanNumeral = {
  num: string;
};

const RomanNumerals: React.FC = () => {
  const INITIAL_STATE = {
    num: "",
  };
  const [values, setValues] = useState<RomanNumeral>(INITIAL_STATE);

  function ToRoman(num: number) {
    let roman = "",
      romanLetters = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ],
      Numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const length = romanLetters.length;
    for (let i = 0; i < length; i++) {
      while (num >= Numbers[i]) {
        roman = roman + romanLetters[i];
        num = num - Numbers[i];
      }
    }
    return roman;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const RenderSVG = ({ className, src }: string | any) => {
    return <img src={src} className={className} alt="svg icon" />;
  };

  return (
    <div className="container">
      <RenderSVG src={teacherIcon} className="board" />
      <form className="converter">
        <div>
          <input type="text" name="num" onChange={handleChange} />
          <RenderSVG src={arrow} className="arrow" />
          <p>{ToRoman(parseInt(values.num))}</p>
        </div>
      </form>
    </div>
  );
};

export default RomanNumerals;
