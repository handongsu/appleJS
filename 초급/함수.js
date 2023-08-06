let msg = "welcome";
console.log(msg)

function sayHello(name){
    let msg = "Hello"
    console.log(msg + ' ' + name);
}

sayHello('Mike')
console.log(msg)    //전역변수와 지역변수는 서로 간섭을 받지 않는다.

////

let name = "Mike";

function Hello(name){
    console.log(name)
}

sayHello();
sayHello('Jane')    //지역변수를 사용하는 것이 관리에 용이

////

function sayHello2(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello2();    //default 값인 friend 가 출력
sayHello2('Jane');