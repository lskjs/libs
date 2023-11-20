#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const colors = require('colors/safe.js');

const colorsArray = ['magenta', 'yellow', 'black', 'green', 'white', 'blue', 'cyan', 'red'];

const upperFirst = (a) => a[0].toUpperCase() + a.substr(1);
const bright = (a) => (a === 'black' ? 'gray' : `bright${upperFirst(a)}`);
const bg = (a) => `bg${upperFirst(a)}`;
const space = (a, width = 20) => {
  const extra = Math.floor((width - a.length) / 2);
  if (extra <= 0) return `[${a}]`;
  const leftPad = new Array(extra + 1).join(' ');
  const rightPad = new Array(width - `${leftPad}${a}`.length).join(' ');
  // console.log({ extra, pad });
  return `[${leftPad}${a}${rightPad}]`;
};

for (const color of colorsArray) {
  const brightColor = bright(color);
  const bgColor = bg(color);
  const bgBrightColor = bg(bright(color));
  const str = [
    colors[color](space(`${color}`)),
    colors[brightColor] && colors[brightColor](space(`${brightColor}`)),

    colors.bold(colors[color](space(`BOLD ${color}`))),
    colors[brightColor] && colors.bold(colors[brightColor](space(`BOLD ${brightColor}`))),

    colors[bgColor](space(`${bgColor}`)),
    colors[bgBrightColor] && colors[bgBrightColor](space(`${bgBrightColor}`)),

    colors.bold(colors[bgColor](space(`BOLD ${bgColor}`))),
    colors[bgBrightColor] && colors.bold(colors[bgBrightColor](space(`BOLD ${bgBrightColor}`))),
  ];
  console.log(...str);
}

console.log();
console.log();
console.log(colors.gray('[t] trace'));
console.log(colors.blue('[d] debug'));
console.log(colors.green('[i] info'));
console.log(colors.cyan('[i] info'));
console.log(colors.yellow('[w] warning'));
console.log(colors.red('[e] error'));
console.log(colors.bgRed('[f] fatal'));
console.log(colors.bgBrightRed('[f] fatal'));
console.log(colors.white('[log] some log'));

console.log();
console.log();

// console.log(colors.bold(colors.black('black')));
// console.log(colors.bold(colors.red('red')));
// console.log(colors.bold(colors.green('green')));
// console.log(colors.bold(colors.yellow('yellow')));
// console.log(colors.bold(colors.blue('blue')));
// console.log(colors.bold(colors.magenta('magenta')));

// console.log(colors.bold(colors.black('black')));
// console.log(colors.bold(colors.red('red')));
// console.log(colors.bold(colors.green('green')));
// console.log(colors.bold(colors.yellow('yellow')));
// console.log(colors.bold(colors.blue('blue')));
// console.log(colors.bold(colors.magenta('magenta')));
// console.log(colors.bold(colors.cyan('cyan')));
// console.log(colors.bold(colors.white('white')));
// console.log(colors.bold(colors.gray('gray')));
// console.log(colors.bold(colors.grey('grey')));

// console.log(colors.bold(colors.brightRed('brightRed')));
// console.log(colors.bold(colors.brightGreen('brightGreen')));
// console.log(colors.bold(colors.brightYellow('brightYellow')));
// console.log(colors.bold(colors.brightBlue('brightBlue')));
// console.log(colors.bold(colors.brightMagenta('brightMagenta')));
// console.log(colors.bold(colors.brightCyan('brightCyan')));
// console.log(colors.bold(colors.brightWhite('brightWhite')));

// console.log(colors.black('black'));
// console.log(colors.red('red'));
// console.log(colors.green('green'));
// console.log(colors.yellow('yellow'));
// console.log(colors.blue('blue'));
// console.log(colors.magenta('magenta'));
// console.log(colors.cyan('cyan'));
// console.log(colors.white('white'));
// console.log(colors.gray('gray'));
// console.log(colors.grey('grey'));

// console.log(colors.brightRed('brightRed'));
// console.log(colors.brightGreen('brightGreen'));
// console.log(colors.brightYellow('brightYellow'));
// console.log(colors.brightBlue('brightBlue'));
// console.log(colors.brightMagenta('brightMagenta'));
// console.log(colors.brightCyan('brightCyan'));
// console.log(colors.brightWhite('brightWhite'));

// console.log(colors.bgBlack('bgBlack'));
// console.log(colors.bgRed('bgRed'));
// console.log(colors.bgGreen('bgGreen'));
// console.log(colors.bgYellow('bgYellow'));
// console.log(colors.bgBlue('bgBlue'));
// console.log(colors.bgMagenta('bgMagenta'));
// console.log(colors.bgCyan('bgCyan'));
// console.log(colors.bgWhite('bgWhite'));
// console.log(colors.bgGray('bgGray'));
// console.log(colors.bgGrey('bgGrey'));

// console.log(colors.bgBrightRed('bgBrightRed'));
// console.log(colors.bgBrightGreen('bgBrightGreen'));
// console.log(colors.bgBrightYellow('bgBrightYellow'));
// console.log(colors.bgBrightBlue('bgBrightBlue'));
// console.log(colors.bgBrightMagenta('bgBrightMagenta'));
// console.log(colors.bgBrightCyan('bgBrightCyan'));
// console.log(colors.bgBrightWhite('bgBrightWhite'));

console.log(colors.reset('reset'));
console.log(colors.bold('bold'));
console.log(colors.dim('dim'));
console.log(colors.italic('italic'));
console.log(colors.underline('underline'));
console.log(colors.inverse('inverse'));
console.log(colors.hidden('hidden'));
console.log(colors.strikethrough('strikethrough'));

console.log(colors.rainbow('rainbow'));
console.log(colors.zebra('zebra'));
console.log(colors.america('america'));
console.log(colors.trap('trap'));
console.log(colors.random('random'));
