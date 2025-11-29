/*

미지의값 : 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 
    자료
        x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
        x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
        x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
        x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
        x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수
    조건

계획
    배열 0번째, 1번째 index가 양수인지 음수인지 확인
    각 조건에 따라 return 1,2,3,4

반성

*/

function solution(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution([2, 4])).toBe(1);
    expect(solution([-7, 9])).toBe(2);
  });
});
