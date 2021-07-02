import { Epoch } from "../src/epoch";

test("Milliseconds epoch test.", () => {
  expect(Epoch.oneMinInMilEpoch() === 60000).toBe(true);
  expect(Epoch.oneDay() === 86400000).toBe(true);
});
