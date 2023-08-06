"90" + "80" == "9080";
"9080" / 2 == 4540; //숫자가 아니더라도 나누기 같은 경우는 자동으로 숫자로 변환된다.

//boolean

//false의 값들은

// 숫자 0 
// 빈문자열 ""
// nullundefined
// NaN

console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

//Number 암기!!

// Number(null)    // 0
// Number(undefined)    // NaN

//Number(0)     //false 숫자 0
//Number('0')   //true

//Number("")    //false 빈문자열"
//Number(" ")   //true