/*

미지의값 : 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return
    자료
        가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

    조건
        sides의 원소는 자연수입니다.
        sides의 길이는 3입니다.
        1 ≤ sides의 원소 ≤ 1,000    

계획
    가장 큰 변 찾기
    나머지 두 변 길이 합
    큰변, 두합 비교
    큰변이 합보다 작다면 1 return
    그렇지 않다면 2 return

반성

*/

function solution(sides) {
  const max = Math.max(...sides); // 가장 긴 변
  const sum = sides.reduce((a, b) => a + b, 0); // 전체 합

  return max < sum - max ? 1 : 2;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution([1, 2, 3])).toBe(2);
    expect(solution([3, 6, 2])).toBe(2);
    expect(solution([199, 72, 222])).toBe(1);
  });
});
