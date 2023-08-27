const User = function(name,age){
    this.name = name;
    this.age = age;
    // this.showName = function (){
    //     console.log(this.name);
    // }
}

User.prototype.showName = function(){
    console.log(this.name)
}

const mike = new User("Mike", 30);  //new를 없애면 undefined

class User2 {
    constructor(name, age){
        this.name = name;   //객체 초기화
        this.age = age;
    }
    showName(){ //클래스내의 메소드는 User2의 프로토타입을 저장
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);   //클래스는 new 없이는 실행할 수 없다.   출력값에 __proto__를 보면 constructor: class라고 명시되어 있는데 이 경우에는 new가 없으면 error 출력

for(const p in mike){
    console.log(p)  //name age showName
}
for(const p in tom){
    console.log(p)  //name age
}
//for in 문은 프로토타입에 포함된 프로퍼티들을 다 보여준다.
//하지만 class 메소드는 for in문에서 제외된다.

//상속

class Car {
    constructor(color) {    //클래스의 constructor는 빈 객체를 만들어주고 this는 빈 객체를 가르킵니다.
    //?반면 extends를 써서 만든 자식객체는 빈 객체가 만들어지고 this를 할당하는 작업을 건너뛰게 됩니다. 그래서 항상 super() 키워드로 부모클래스 컨스트럭쳐를 실행해줘야 한다.
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.logZ("drive..");
    }
    stop(){
        console.log("STOP!")
    }
}

class Bmw extends Car {
    // constructor(...args){    아무것도 없으면 이게 생략되어 있음 부모의           constructor를 받아와야 한다.
    //     super(...args);
    // }

    constructor(color){ //자식 constructor에 동일한 인수를 받는 작업을 해줘야 함    인수로 받고 super로 넘겨줌
        super(color);
        this.navigation = 1;
    }
    park(){ //class 내부에서 선언한 메소드는 prototpye 안으로
        console.log("PARK");
    }
    stop(){
        super.stop();   //메소드 오버라이딩
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");