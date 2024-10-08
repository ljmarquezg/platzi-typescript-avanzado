// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
export function parseStr(input: boolean): number;

export function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join(''); // string
    } else if(typeof input === 'string') {
      return input.split(''); // string[]
    } else if(typeof input === 'number') {
      return true;
    } else if(typeof input === 'boolean') {
      return 4;
    }
  }
  
  const rtaArray = parseStr('Nico');
  rtaArray.reverse();
  console.log('rtaArray', 'Nico =>' ,rtaArray);
  
  const rtaStr = parseStr(['N','i','c','o']);
  rtaStr.toLowerCase();
  
  console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);

  const rtaNumber= parseStr(5);
  console.log('rtaNumber', "5 =>",rtaNumber);

  const rtaBoolean = parseStr(false);
  console.log('rtaBoolean', "false =>",rtaBoolean);