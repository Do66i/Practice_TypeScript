/*
Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

add: 단어를 추가함.
get: 단어의 정의를 리턴함.
delete: 단어를 삭제함.
update: 단어를 업데이트 함.
showAll: dictionary 의 단어를 모두 프린트함.
count: dict 단어들의 총 count 를 리턴함.
*/

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }

  update(word: Word, term: string) {
    if (this.words[word.term]) {
      this.words[term] = word.def;
      delete this.words[word.term];
    }
  }
  showAll() {
    return console.log(Object.keys(this.words));
  }

  count() {
    return console.log(Object.keys(this.words).length);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국음식");
const gamja = new Word("gamja", "감자");
const goguma = new Word("goguma", "고구마");

const dict = new Dict();

dict.add(kimchi);
dict.add(gamja);
dict.add(goguma);
