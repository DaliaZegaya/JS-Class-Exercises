// //תרגיל 1
// class Student {
//     sname;
//     mclass;
//     mid;
//     constructor (sname, mclass, mid) {
//         this.sname = sname;
//         this.mclass = mclass;
//         this.mid = mid
//     }
// }
// //תרגיל 2
// let dalia= new Student ("dalia", "non", "55545")
// let batel= new Student ("batel", "kok", "55555")
// console.log(dalia);
// console.log(batel);

//תרגיל 3
class User {
    firstName;
    lastName;
    age;
    email; 
    constructor (firstName, lastName, age, email) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
        this.email= email;
    }
}
//תרגיל 4
let or= new User ("Or", "Gadamo",23, "orchok@gmail.com")
let daniel= new User ("yonatan", "hh",25, "daniel@gmail.com")
let yonatan= new User ("daniel", "ll",24, "yonatan@gmail.com")
console.log(or);
console.log(daniel);
console.log(yonatan);

//תרגיל 5+6
function myFunc () {
    let userData= new User (Fname.value, Lname.value, age.value, email.value)
    console.log(userData);
    myTable.innerHTML= `<tr><td> ${userData.firstName} ${userData.lastName} </tr> </td>`
}

//תרגיל 7
class dog {
    name;
    type;
    age;
    constructor (name, type, age) {
        this.name= name;
        this.type= type;
        this.age= age;
    }
}



