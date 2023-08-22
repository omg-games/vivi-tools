import DataGenerator from "./DataGenerator";

export default class SetGenerator implements DataGenerator {
  
  dependsOn = [];

  generate(wordListData: any) {
    wordListData.set = new Set(wordListData.array);
  }
}