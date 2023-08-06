const superman = {
    name : 'clark',
    age : 30,
}

superman.hairColor = 'black';   //생성
superman['hobby'] = 'football'; //생성
delete superman.age;    //삭제
console.log(superman.name)

function makeObject(name, age) {
    return {
        name,
        age,        //축약 가능
        hobby: 'football'
    }
}

const Mike = makeObject("Mike" , 30);
console.log(Mike)

//값이 존재하는지 (실용적이지 않음)
console.log("age" in Mike);     //true
console.log("birthday" in Mike);    //false

function isAdult(user) {
    if(!('age' in user) || user.age < 20){
        return false;
    }
    return true;
}

const Kevin = {
    name: "Kevin",
    age : 30
};

const Jane = {
    name : "Jane"
};

console.log(isAdult(Jane))

//for ...in
const Mike2 = {
    name: "Mike",
    age : 30
};

for(x in Mike2){
    console.log(x); // key 값들이 나온다  name , age
    console.log(Mike[x]) // key값의 value가 나온다.
}


//method : 객체 프로퍼티로 할당 된 함수 

//화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
//화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴

let boy = {
    name : "Mike",
    showName: function(){
        console.log(this.name)  //여기서 boy를 this로 바꾸면 this는 해당 객체를 가리키기 때문에 boy = null이여도 잘 출력된다.
    }
};

let man = boy;
boy = null;

man.showName(); // boy를 null로 하면 오류가 뜬다