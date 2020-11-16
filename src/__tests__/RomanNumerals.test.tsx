import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RomanNumerals from "../containers/RomanNumerals";

test('has a number input', () => {
  const { getByLabelText } = render(<RomanNumerals />);
  const input = getByLabelText("Try to add a number between 1 and 3999")
  expect(input).toHaveAttribute("type", "text");
})


test('has letters input', () => {
  const { getByLabelText } = render(<RomanNumerals />);
  const input = getByLabelText("Try to add a letters of I, V, X, L, C, D, M")
  expect(input).toHaveAttribute("type", "text");
})

