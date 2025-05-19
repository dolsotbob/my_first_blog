export const TIL0220ObjectDestructuring = `
// 이 함수는 매개변수로 객체를 받아서 다음과 같이 구조 분해 한다: 
// - displayName -> 변수 displayName에 저장 
// - fullName.firstName -> 변수 name 에 저장 
function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is " + name);
}

// user 객체 
let user = {
    id: 42, 
    displayName: "jdoe", 
    fullName: { 
        firstName: "John",
        lastName: "Doe",
    }
};  

whois(user); 
//결과: jdoe is John
`
