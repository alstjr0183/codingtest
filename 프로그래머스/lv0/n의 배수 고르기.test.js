/*

미지의값 : numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return
    자료
        정수 n과 
        정수 배열 numlist
    조건
        numlist 개수만큼 반복
        반복문 index % n = 0이면 배열에 넣기

계획

반성

*/

function solution(n, numlist) {
  let result = [];

  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      result.push(numlist[i]);
    }
  }

  return result;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual([6, 9, 12]);
    expect(solution(5, [1, 9, 3, 10, 13, 5])).toEqual([10, 5]);
    expect(solution(12, [2, 100, 120, 600, 12, 12])).toEqual([
      120, 600, 12, 12,
    ]);
  });
});
