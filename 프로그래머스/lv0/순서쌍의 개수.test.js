/*

미지의값 : 자연수 순서쌍의 개수를 return
    자료
        자연수 n
    조건

계획
    1~자연수 n만큼 반복?
    20/1, 20/2, 20/3 ~~
    여기서 나머지가 0이여야함
    배열에 push


반성

*/

function solution(n) {
  let result = [];

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  return result.length;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution(20)).toBe(6);
    expect(solution(100)).toBe(9);
  });
});
