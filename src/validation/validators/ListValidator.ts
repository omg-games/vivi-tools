export type WordListIssue = {
  type: string;
  message: string;
  indices: number[];
}

export interface ListValidator {
  requireSortedArray: boolean;

  results(): WordListIssue[];
}