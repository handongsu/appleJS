//  toString() 10진수 -> n진수 진법변환

//Math

// .ceil()  :올림
// .floor() : 내림
// .round() : 반올림

// 소수점 자릿수 : 둘째자리 까지 표현
// Math.round(userRate * 100)/100
//혹은 .toFixed()

let userRate = 30.1234;
userRate.toFixed(2);    //30.12
userRate.toFixed(6); //30.123400 넘기면 0으로 채워준다.

//하지만 .toFixed()는 문자열을 반환한다는 점입니다.
//그래서 Number를 이용하는 경우가 많다.

//isNaN()

let x = Number('x')

x == NaN    //false
x === NaN   //false
NaN == NaN  //false     자기자신도 false로 반환

//parseInt()

let redColor = "f3"
parseInt(redColor, 16); //243   16진수로 변환

parseInt('11' , 2) // 3

Math.abs(-1) //1 절대값

Math.pow(2, 10) //1024 제곱

Math.sqrt(16) //4 제곱근