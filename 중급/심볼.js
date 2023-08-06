//property key :문자형
const obj = {
    1: '1입니다',
    false : '거짓'
}

Object.keys(obj); //["1" , "false"]

obj['1']    //'1 입니다.'
obj['false']    //"거짓"    //키를 문자형으로 쓸 수 있다

//Symbol - 유일한 식별자를 만들 때 사용 , 유일성 보장
const a = Symbol();
const b = Symbol(); //new를 붙이지 않는다.

console.log(a)
console.log(b)  //a === b false a == b false

const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

Object.keys(user); //["name" , "age"]  숨겨짐

//Symbol.for() : 전역 심볼
//하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만
//Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id1 = Symbol.for();
const id2 = Symbol.for();
id1 ===id2; //true

