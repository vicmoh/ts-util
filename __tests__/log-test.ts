import { log } from "../src/log";

const LOG_MESS = "This is a log message.";
class Test {}
class Test2 {
  test = () => log(this, LOG_MESS);
}

test("log() should output the correct result.", () => {
  expect(log(new Test(), LOG_MESS) === `Test(): ${LOG_MESS}`).toBe(true);
  expect(log(new Test2(), LOG_MESS) === `Test2(): ${LOG_MESS}`).toBe(true);
  expect(new Test2().test() === `Test2(): ${LOG_MESS}`).toBe(true);

  const t1 = log("someFunction", LOG_MESS);
  expect(t1 === `someFunction(): ${LOG_MESS}`).toBe(true);

  const t2 = log("someFunction():", LOG_MESS);
  console.log(t2);
  expect(t2 === `someFunction(): ${LOG_MESS}`).toBe(true);

  const t3 = log("someFunction(): ", LOG_MESS);
  console.log(t3);
  expect(t3 === `someFunction(): ${LOG_MESS}`).toBe(true);
});
