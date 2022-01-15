import { PortableText } from '../types';

export function toPlainText(blocks: PortableText): string {
  if (!blocks) {
    return '';
  }
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}
