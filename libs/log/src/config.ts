// eslint-disable-next-line import/named
import { Color } from '@lsk4/colors';

import { Theme } from './types.js';

export const levelsPriority = {
  start: 99,
  log: 99,
  fatal: 60,
  error: 50,
  warn: 40,
  success: 35,
  info: 30,
  debug: 20,
  trace: 10,
};

export const theme: Theme = {
  fatal: ['bgRed'],
  error: ['bold', 'bgRed'],
  warn: ['bgYellow'],
  debug: ['bold', 'cyan'],
  info: ['bold', 'green'],
  trace: ['gray'],
  log: ['bgWhite'],
};

export const themeLight: Theme = {
  // fatal: ['bgRed', 'white'],
  fatal: ['bold', 'red'],
  error: ['red'],
  warn: ['yellow'],
  debug: ['cyan'],
  info: ['green'],
  trace: ['gray'],
  log: ['bgWhite'],
};

export const randomColors: Color[][] = [
  ['red'],
  ['green'],
  ['yellow'],
  ['blue'],
  ['magenta'],
  ['cyan'],
  ['bold', 'red'],
  ['bold', 'green'],
  ['bold', 'yellow'],
  ['bold', 'blue'],
  ['bold', 'magenta'],
  ['bold', 'cyan'],
  // ['dim', 'red'],
  // ['dim', 'green'],
  // ['dim', 'yellow'],
  // ['dim', 'blue'],
  // ['dim', 'magenta'],
  // ['dim', 'cyan'],
];

export const contentColors: Color[][] = [
  ['bold', 'white'],
  ['bold', 'cyan'],
  ['bold', 'green'],
  ['white'],
];
