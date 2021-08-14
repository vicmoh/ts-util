import { str } from "../src/str";

describe("toFirstCharUpper() function test.", () => {
  test("should converts the first char to upper case.", () => {
    expect(str("some string").toFirstCharUpper()).toBe("Some string");
  });
});

describe("toAllWordsFirstCharUpper() function test.", () => {
  test("Should converts all words of first character to upper case.", () => {
    expect(str("some string").toAllWordsFirstCharUpper()).toBe("Some String");
  });
});
