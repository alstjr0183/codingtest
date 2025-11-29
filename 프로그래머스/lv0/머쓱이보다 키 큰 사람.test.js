/*

미지의값 : 머쓱이보다 키 큰 사람의 수
    자료
        머쓱이네 반 친구들 키 배열 array
        머쓱이 키 height
    조건
        1 ≤ array의 길이 ≤ 100
        1 ≤ height ≤ 200
        1 ≤ array의 원소 ≤ 200

계획
    array의 길이만큼 반복문을 돌린다
    반복문안에서 if문으로 array의 원소가 height보다 클경우 count +1을 해준다
    반복문이 끝난후 count를 return한다

반성

*/

function solution(array, height) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) count++;
  }

  return count;
}

describe("", () => {
  it("solution 실행", () => {
    expect(solution([149, 180, 192, 170], 167)).toBe(3);
    expect(solution([180, 120, 140], 190)).toBe(0);
  });
});
