//배열 구조 분해
let users= ['Mike', 'Tom','Jane'];
let [user1,user2,user3] = users;
console.log(user1)
console.log(user2)
console.log(user3)

//let [a,b,c] = [1,2]; // c=undefined
let[a=3,b=4,c=5] = [1,2];   //기본값 설정해주면 undefined 예방

console.log(a); //1
console.log(b); //2
console.log(c); //5

//배열 구조 분해: 일부 반환값 무시
let [user4, ,user5] = ['Mike','Tom', 'Jane','Tony'];
console.log(user4)  //'Mike'
console.log(user5)  //'Jane'

//객체 구조 분해
let user = {name: 'Mike', age: 30};
let {name, age} = user;

console.log(name);  //'Mike'
console.log(age);   //30

//새로운 변수 이름으로 할당
let {name: userName, age: userAge} = user;
console.log(userName);