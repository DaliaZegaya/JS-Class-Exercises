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

// //תרגיל 3
// class User {
//     firstName;
//     lastName;
//     age;
//     email; 
//     constructor (firstName, lastName, age, email) {
//         this.firstName= firstName;
//         this.lastName= lastName;
//         this.age= age;
//         this.email= email;
//     }
// }
// //תרגיל 4
// let or= new User ("Or", "Gadamo",23, "orchok@gmail.com")
// let daniel= new User ("yonatan", "hh",25, "daniel@gmail.com")
// let yonatan= new User ("daniel", "ll",24, "yonatan@gmail.com")
// console.log(or);
// console.log(daniel);
// console.log(yonatan);

// //תרגיל 5+6
// function myFunc () {
//     let userData= new User (Fname.value, Lname.value, age.value, email.value)
//     console.log(userData);
//     myTable.innerHTML= `<tr><td> ${userData.firstName} ${userData.lastName} </tr> </td>`
// }

// //תרגיל 7
// class Dog {
//     name;
//     type;
//     age;
//     constructor (name, type, age) {
//         this.name= name;
//         this.type= type;
//         this.age= age;
//     }
// }
// //תרגיל 8
// let firstDog= new Dog ("loka", "o", 3)
// let secDog= new Dog ("lopi", "p", 2)
// let threeDog= new Dog ("poly", "x", 2)
// let fourDog= new Dog ("jojo", "p", 2)
// let fiveDog= new Dog ("loco", "p", 2)
// let dogsArray= [firstDog, secDog, threeDog, fourDog, fiveDog]
// console.log(dogsArray);

//תרגיל 9
class Teacher {
    constructor (firstName, lastName, tecClass, email) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.tecClass= tecClass;
        this.email= email;
    }
}

//תרגיל 10
const techersArray= []
function techFunc () {
    const tech= new Teacher (Tfname.value, Tlname.value, Tclass.value, Temail.value)
        if(techersArray.length<4){
            techersArray.push(tech)
        }
    console.log(techersArray)
    TeacTable.innerHTML= `<tr> <td> ${tech.email} </td> </tr>`

}






