/* global test expect */
import Logger from './Logger';

describe('Logger formats', () => {
  // test("default(lsk) log.info(1, '2', 3.3)", () => {
  //   // process.env.LOG_FORMAT = 'bunyan'; // default bunyan
  //   process.env.LOG_DATA = '1';
  //   log.lastLoggerArgs = null;
  //   log.info(1, '2', 3.3);
  //   const res = log.lastLoggerArgs[0];
  //   expect(typeof res.time).toStrictEqual('string');
  //   expect(res).toMatchObject({
  //     level: 30,
  //     msg: '1 2 3.3',
  //   });
  // });
  test("lsk log.info(1, '2', 3.3)", () => {
    const log = new Logger({
      format: 'lsk',
    });
    log.info(1, '2', 3.3);
    const res = log.lastLoggerArgs;
    expect(typeof res?.time).toStrictEqual('number');
    expect(res).toMatchObject({
      level: 'info',
      msg: '1 2 3.3',
    });
  });
  test("bunyan log.info(1, '2', 3.3)", () => {
    const log = new Logger({
      format: 'bunyan',
    });
    log.info(1, '2', 3.3);
    const res = log.lastLoggerArgs;
    expect(typeof res?.time).toStrictEqual('string');
    expect(res).toMatchObject({
      level: 30,
      msg: '1 2 3.3',
    });
  });
  test("logrus log.info(1, '2', 3.3)", () => {
    const log = new Logger({
      format: 'logrus',
    });
    log.info(1, '2', 3.3);
    const res = log.lastLoggerArgs;
    expect(typeof res?.time).toStrictEqual('string');
    expect(res).toMatchObject({
      level: 'info',
      msg: '1 2 3.3',
    });
  });
});
