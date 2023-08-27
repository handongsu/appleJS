// 나머지 매개변수(Rest parameters)

function showName(...names){
    console.log(names);
}

showName(); //[]
showName('Mike');   //['Mike']
showName('Mike', 'Tom');    //['Mike','Tom']

function add(...numbers){   //add안의 값이 배열이 된다
    let result = 0;
    numbers.forEach(num => (result += num));
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

////
function User(name, age, ...skills){  // 앞에 2개는 일반적인 변수로 받았고 나머지는 몇개가 올지 모르지만 나머지 매개변수로 받았다.
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Mike", 20, "JS", "React");
const user3 = new User("Mike", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);


//전개구문
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1, ...arr2, 7,8,9]; //[0,1,2,3,4,5,6,7,8,9]

let user = {name:'Mike', age:30};
let user4 = {...user}; //{name:'Mike', age:30}

//arr1을 [4,5,6,1,2,3] 으로
let arr4 = [1,2,3];
let arr5 = [4,5,6];

arr2.reverse().forEach(num => {
    arr1.unshift(num);
});
console.log(arr2);

////
let user11 = {name:"Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user11 = Object.assign({},user11, info, {
//     skills:[],
// });

// fe.forEach((item)=>{
//     user.skills.push(item);
// });
// lang.forEach((item)=>{
//     user.skills.push(item);
// });

user12 = {
    ...user11,
    ...info,
    skills:[...fe, ...lang]
}

console.log(user12)