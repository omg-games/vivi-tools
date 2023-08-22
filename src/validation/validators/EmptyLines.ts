import { ListValidator, WordListIssue } from "./ListValidator";

export class EmptyLines implements ListValidator {
  requireSortedArray = false;

  constructor() {

  }

  results(): WordListIssue[] {
    return []; // TODO
  }
}

export function arrayCheck() {

}

export function arrayWordCheck() {

}

export function setCheck() {

}

export function setWordCheck() {

}