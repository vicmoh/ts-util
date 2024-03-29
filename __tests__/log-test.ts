import { Log } from "../src/log";

const log = new Log({ disable: true });
const func = "Log():";

const LOG_MESS = "This is a log message.";
class Test {}
class Test2 {
  test = () => log.print(this, LOG_MESS);
}

describe(`${func} print test.`, () => {
  test(`Should output the correct format.`, () => {
    expect(log.print(new Test(), LOG_MESS) === `Test(): ${LOG_MESS}`).toBe(
      true
    );
    expect(log.print(new Test2(), LOG_MESS) === `Test2(): ${LOG_MESS}`).toBe(
      true
    );
    expect(new Test2().test() === `Test2(): ${LOG_MESS}`).toBe(true);

    const t1 = log.print("someFunction", LOG_MESS);
    expect(t1 === `someFunction(): ${LOG_MESS}`).toBe(true);

    const t2 = log.print("someFunction():", LOG_MESS);
    expect(t2 === `someFunction(): ${LOG_MESS}`).toBe(true);

    const t3 = log.print("someFunction(): ", LOG_MESS);
    expect(t3 === `someFunction(): ${LOG_MESS}`).toBe(true);
  });

  test(`Should convert object to JSON readable.`, () => {
    const t1 = {
      s1: "hello",
      s2: "world",
    };
    const res = log.print("someFunction", t1);
    expect(res === 'someFunction(): {"s1":"hello","s2":"world"}').toBe(true);
  });
});
