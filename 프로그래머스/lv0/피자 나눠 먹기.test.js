/*

미지의값 : n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return
    자료
        피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라
        피자 조각 수 slice
        피자를 먹는 사람의 수 n
    조건

계획
    n의 배수가 slice 이상이기만 하면됨
    n*1 부터 시작해서 slice 이상 확인
    while문 사용?
반성

*/

function solution(slice, n) {
  let count = 1;

  while (n > slice * count) {
    count++;
  }

  return count;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution(7, 10)).toBe(2);
    expect(solution(4, 12)).toBe(3);
  });
});
