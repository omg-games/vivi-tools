export type WordListIssues = {
  emptyLines: number[];
  trailingSpaces: number[];
  duplicates: string[];
  unexpectedCharacters: string[];
  unsortedList: boolean;
}

export async function validateWordList(wordList: string[]): Promise<WordListIssues> {
  return null;
}