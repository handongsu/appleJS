let a = 'age';

const user = {
    name : 'Mike',
    [a] : 30 //age : 30 //배열이 아니라 변수 a에 할당된 값이 들어간다
    //computed property
}
function makeObj(key, val){
    return{
        [key]: val,
    };
}

const obj = makeObj("나이", 33);
console.log(obj) // {성별: 33}

//여러가지 메소드

//Object.assign() : 객체 복제
const user2 = {
    name :'Mike',
    age : 30
}
const cloneUser = user; // X user에는 객체 자체가 아니라 객체가 저장되어 있는 메모리 주소인 객체에 대한 참조 값이 저장됩니다. 
// 즉 참조값 주소만 복사됩니다.

const newUser = Object.assign({}, user); //저 빈객체에 user 객체가 병합된다
// {} + {name : 'Mike, age : 30}

//newUser.name = 'Tom';
//console.log(user.name); //Mike
//newUser != user
const newUser2 = Object.assign({name:'Tom'}, user); // 안에 있는 Tom을 user 객체가 덮어쓴다

const user3 = {
    name :'Mike'
}
const info1 = {
    age : 30,
}
const info2 = {
    gender : 'male',
}
Object.assign(user3, info1, info2); //user3에 객체를 다 합칠 수 있다.

//Object.keys() : 키 배열 반환
const user4 = {
    name :'Mike',
    age : 30
}
Object.keys(user4);      //["name", "age"]
Object.values(user4)    //["Mike", "30"]
Object.entries(user4)   //[["name","Mike"], ["age","30"]]

//Object.fromEntries() : 키/값 배열을 객체로
const arr = 
[
    ["name","Mike"],
    ["age","30"]
];
Object.fromEntries(arr);    
// {
//     name :'Mike',
//     age : 30
// }

al