//call, apply, bind - 함수 호출 방식과 관계없이 this를 지정할 수 있음

//call : 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName();
showThisName.call(mike);

/* apply : apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다. call은 함수와 마찬가지로 매개변수를 직접 받지만, 
? apply는 매개변수를 배열로 받습니다.*/
const nums = [3,10,1,6,4];
//const minNum = Math.min(...nums);
//const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3,10,1,6,4])

const maxNum = Math.max.call(null, ...nums);



//bind : 함수의 this값을 영구히 바꿀 수 있습니다.

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
const updateMike = update.bind(mike)    

updateMike(1980, 'police')
console.log(mike)

