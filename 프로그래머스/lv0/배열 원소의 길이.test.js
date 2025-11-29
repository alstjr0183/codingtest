/*

미지의값 : 각 원소의 길이를 담은 배열을 return
    자료
        문자열 배열 strlist
    조건

계획
    반복문
    원소의 length를 배열에 추가

반성

*/

function solution(strlist) {
  let result = [];

  for (let i = 0; i < strlist.length; i++) {
    result.push(strlist[i].length);
  }

  return result;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution(["We", "are", "the", "world!"])).toEqual([2, 3, 3, 6]);
    expect(solution(["I", "Love", "Programmers."])).toEqual([1, 4, 12]);
  });
});
