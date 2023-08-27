let desc = '안녕하세요.';
desc.length;    //문자열 길이 
desc[2]     //특정위치에 접근  '하'

//대신 한글자만 바꾸는건 허용x
desc[4] = '용' // X

// indexOf(text)

let desc = "Hi guys. Nice to meet you."

desc.indexOf('to'); // 14
if(desc.indexOf("Hi")){ // false 반환하면 0이 나와서 false
    console.log("Hi가 포함된 문장입니다");
}

//str.substring(n, m)   //n과 m 사이 문자열 반환
//n과 m을 바꿔도 동작함
//음수는 0으로 인식

let desc = "abcdefg"
desc.substring(2,5);
desc.substring(5,2);    //둘 다 "cde"

//str.substr(n, m)
//n 부터 시작  m 개를 가져옴

//str.trim(); : 앞 뒤 공백 제거

//str.repeat(n) : n번 반복

// 문자열 비교

"a".codePointAt(0); //97
String.fromCodePoint(97) //"a"

let userList = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "kevin", age: 20},
    {name: "Harry", age: 50},
    {name: "Steve", age: 40},
];

// 나이가 30이상
let result = userList.reduce((acc, cur) =>{
     if(cur.age >= 30){
        acc.push(cur.name);
    }
    return acc;
},[]);  
// 누산 초기값 : [] -> ["Mike"]