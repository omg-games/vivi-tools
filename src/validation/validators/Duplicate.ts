import { ListValidator, WordListIssue } from "./ListValidator";

export class Duplicate implements ListValidator {
  requireSortedArray = true;

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