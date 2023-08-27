//__proto__ : 프로토타입이라 하는데 프로퍼티에 원하는 값이 없으면 여기서 찾는다.

// const car = {
//     wheels: 4,
//     drive(){
//         console.log("drive..");
//     },
// };

const bmw = {
    color: "red",
    // wheels: 4,
    navigation: 1,
    // drive(){
    //     console.log("drive..");
    // },
}

const benz = {
    color: "black",
    // wheels: 4,
    // drive(){
    //     console.log("drive..");
    // },
}

const audi = {
    color: "blue",
    // wheels: 4,
    // drive(){
    //     console.log("drive..");
    // },
}

const Bmw = function (color){
    this.color = color;
};

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function(){
//     console.log('drive...');
// }
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function(){
//     console.log('STOP!');
// }

//더 깔끔 버전 >이렇게하면 constructor가 사라지기 때문에 풀어쓰는것이 좋다 혹은 constructor를 수동으로 해준다
Bmw.prototype = {
    constructor: Bmw,
    wheels:4,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("STOP!")
    },
}

const x5 = new Bmw('red');
const z4 = new Bmw('blue');
// x5.__proto__ = car;
// z4.__proto__ = car;


// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

for(p in audi){
    console.log(p);
}

//생성자 함수가 새로운 객체를 만들어 낼 때 그 객체는 생성자의 인스턴스라고 합니다.
z4 instanceof Bmw // true
z4.constructor === Bmw; //true
