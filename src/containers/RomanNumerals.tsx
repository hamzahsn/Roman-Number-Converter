import React, { useState } from "react";
import arrow from "../assets/down-arrow.svg";
import teacherIcon from "../assets/teacher1.svg";
import "./RomanNumerals.css";

type RomanNumeral = {
  num: string;
  roman: string;
};

type IMatches = {
  [key: string]: number;
};

function RomanNumerals() {
  const INITIAL_STATE = {
    num: "",
    roman: "",
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

  function FromRoman(romanNumber: string) {
    romanNumber = romanNumber.toUpperCase();
    const Dictionary: IMatches = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    const letterToNum = (letter: string) => Dictionary[letter];
    return romanNumber.split("").reduce((acc, curr, index, arr) => {
      if (letterToNum(curr) < letterToNum(arr[index + 1])) {
        return acc - letterToNum(curr);
      } else {
        return acc + letterToNum(curr);
      }
    }, 0);
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
          <label>
            Try to add a number between 1 and 3999
            <input type="text" name="num" onChange={handleChange} />
          </label>
          <RenderSVG src={arrow} className="arrow" />
          <p>{ToRoman(parseInt(values.num))}</p>
        </div>
        <div>
          <label>
            Try to add a letters of I, V, X, L, C, D, M
            <input type="text" name="roman" onChange={handleChange} />
          </label>
          <RenderSVG src={arrow} className="arrow" />
          <p>{FromRoman(values.roman)}</p>
        </div>
      </form>
    </div>
  );
}

export default RomanNumerals;
