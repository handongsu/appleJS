let user = {
    name :'Mike',
    age : 30,
}   //객체 리터럴

//생성자 함수
function User(name, age){   //첫글자 대문자
    //this = {}
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }

    //return this;
}
let user1 = new User('Mike', 30);   //new 연산자를 사용해서 호출
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);
let user5 = new User('Han', 40);
user5.sayName(); //'Han'


// 1. new 함수명()을 선언하면
// 2. 함수 안에 this={} 가 생성됩니다
// 3. this의 property 들을 추가합니다
// 4. return 으로 반환합니다.

// new를 붙이지 않으면 함수만 실행해 주기 때문에 undefined 