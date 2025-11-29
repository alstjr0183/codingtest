/*

미지의값 : numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return
    자료
        정수배열 numbers
        정수 num1, num2 
    조건

계획
    numbers를 slice해서 num1, num2로 자른걸 return?

반성

*/

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3, 4]);
    expect(solution([1, 3, 5], 1, 2)).toEqual([3, 5]);
  });
});
