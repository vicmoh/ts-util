import { Epoch } from "../src/epoch";

describe("Epoch constant test.", () => {
  test("oneMinInMilEpoch(): Should be 60000 milliseconds in one minute..", () => {
    expect(Epoch.oneMinInMilEpoch()).toBe(60000);
  });

  test("oneDay(): Should be 86400000 milliseconds in one day.", () => {
    expect(Epoch.oneDay()).toBe(86400000);
  });
});
