import DataGenerator from "./DataGenerator";

export default class SortedIndexArrayGenerator implements DataGenerator {
  
  // dependsOn = [
    //   "set"
    // ]

  generate(wordListData: any) {
    // Create a sorted array of wordListData.array, but with the original index appended to each element

    // Likely to be much less efficient - but more readable
    // const sortedIndexArray = wordListData.array.map((word: string, index: number) => {
    //   return {
    //     word,
    //     index
    //   }
    // }).sort((a: any, b: any) => {
    //   return a.word.localeCompare(b.word);
    // });

    // Likely more efficient - but less readable and hard to work with
    const sortedIndexArray = wordListData.array.map((word: string, index: number) => {
      return word + "\t" + index;
    }).sort();

    wordListData.sortedIndexArray = sortedIndexArray;
  }
}