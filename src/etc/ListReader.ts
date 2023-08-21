import fs from 'fs';

export async function getArrayFromFile(fileName: string): Promise<string[]> {
  const file = await fs.promises.readFile(fileName, 'utf8');
  
  return file.split('\n');
}