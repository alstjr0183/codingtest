/*

미지의값 : 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return
    자료
        문자열 배열 s1과 s2
    조건

계획
    배열 2개로 이중포문
    첫번째 반복문 index를 기반으로 2번째 반복문 index를 통해 겹치는지 확인
    겹치는게 있으면 push로 추가


반성

*/

function solution(s1, s2) {
  let result = [];

  for (let i = 0; i < s1.length; i++) {
    for (let i2 = 0; i2 < s2.length; i2++) {
      if (s1[i] === s2[i2]) {
        result.push(s2[i2]);
      }
    }
  }

  return result.length;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])).toBe(2);
    expect(solution(["n", "omg"], ["m", "dot"])).toBe(0);
  });
});
