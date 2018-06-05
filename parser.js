// 각각에 데이터함수에서 데이터 확인
function ArrayParser(word) {
  let parsingData = {
    type: '',
    child: []
  }
  parsingData.type = checkArray(word);
  parsingData.child = checkNumber(word);

  return parsingData;
}

// Array 확인 함수
function checkArray(wordData) {
  const splitWord = wordData.split('');
  if (splitWord[0] === "[" && splitWord[splitWord.length - 1] === "]") {
    return 'Array';
  } else {
    console.log('unexpected token');
    return;
  }
}

// Number 확인 함수
function checkNumber(wordData) {
  const splitWord = wordData.split(",");

  const childValue = splitWord.map(element => {
    const value = element.replace(/\[|\]/, "");
    if(value.search(/[0-9]/) !== -1){
      const childArr = {
        type: 'Number',
        value: value,
        child: [],
      }
      return childArr;
    }
  });
  return childValue; 
}

const str = "[123, 22, 33]";
const strArr = "[1, 2]";
const strArr2 = "[132132, 2321,32111,32942,3211,1,4,65,6,8,9,1,2,3,4,5,6,7,8,9]";


const result = ArrayParser(str);
const resultFirst = ArrayParser(strArr);
const resultSecond = ArrayParser(strArr2);

console.log(JSON.stringify(result, null, 2));
console.log(JSON.stringify(resultFirst, null, 2));
console.log(JSON.stringify(resultSecond, null, 2));
