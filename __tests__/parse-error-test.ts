import { parseError } from "../src/parse-error";

const ERR_MESS = "This is an error message.";

class Test {
  public toString = (): string => ERR_MESS;
}

class Test2 {}

describe("parseError() function test. ", () => {
  test("Should parse a valid error.", () => {
    try {
      throw Error(ERR_MESS);
    } catch (err) {
      expect(parseError(err)).toBe(ERR_MESS);
    }

    try {
      throw ERR_MESS;
    } catch (err) {
      expect(parseError(err)).toBe(ERR_MESS);
    }
  });

  test("Should convert non error type to string.", () => {
    try {
      throw new Test();
    } catch (err) {
      expect(parseError(err)).toBe(ERR_MESS);
    }

    try {
      throw new Test2();
    } catch (err) {
      expect(parseError(err) !== ERR_MESS).toBe(true);
    }
  });
});
