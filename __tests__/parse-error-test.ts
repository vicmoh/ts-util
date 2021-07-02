import { parseError } from "../src/parse-error";

const ERR_MESS = "This is an error message.";

class Test {
  public toString = (): string => ERR_MESS;
}

class Test2 {}

test("parseError() should parse a valid error.", () => {
  try {
    throw Error(ERR_MESS);
  } catch (err) {
    expect(parseError(err) === ERR_MESS).toBe(true);
  }

  try {
    throw ERR_MESS;
  } catch (err) {
    expect(parseError(err) === ERR_MESS).toBe(true);
  }
});

test("parseError() should convert non error type to string.", () => {
  try {
    throw new Test();
  } catch (err) {
    expect(parseError(err) === ERR_MESS).toBe(true);
  }

  try {
    throw new Test2();
  } catch (err) {
    expect(parseError(err) !== ERR_MESS).toBe(true);
  }
});
