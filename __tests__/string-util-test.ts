import { str } from "../src/str";

test("toFirstCharUpper() should converts the first char to upper case.", () => {
  expect(str("some string").toFirstCharUpper() === "Some string").toBe(true);
});

test("toAllWordsFirstCharUpper() should converts all words of first character to upper case.", () => {
  expect(str("some string").toAllWordsFirstCharUpper() === "Some String").toBe(true);
});
