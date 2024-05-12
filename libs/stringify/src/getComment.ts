import type { CommentProps } from './types';
import { toHumanDate } from './utils/toHumanDate.js';

const defaultFooter = 'Auto generated by http://npmjs.com/package/@lskjs/stringify';

export const getComment = (props: CommentProps) => {
  const date = props.date || new Date();
  const url = props.source || props.url;
  const name = props.filename || props.name;
  const footer = props.footer || defaultFooter;
  const values = props.values || [];

  const keyValues = [
    ['Source', url],
    ['Date', toHumanDate(date)],
    ['Filename', name],
    ...values,
    ['Footer', footer],
  ];

  const maxKeyLength = Math.max(...keyValues.map(([key]) => String(key).length));

  return keyValues
    .map(([key, value]) => {
      if (!value) return null;
      const keyStr = String(key).padEnd(maxKeyLength, ' ');
      if (key === 'Footer') return `\n${value}`;
      return [keyStr, value].filter(Boolean).join(': ');
    })
    .filter(Boolean)
    .join('\n')
    .trim();
};

export default getComment;
