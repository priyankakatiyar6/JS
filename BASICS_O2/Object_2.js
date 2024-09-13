//const Thunder = new Object()
const Thunder ={}

Thunder.id = "123abc"
Thunder.name = "Rohan"
Thunder.isLoggedIn = false
//console.log(Thunder);

/*const NewUser = {
    email: "Some@gmail.com",
    Name:{
        UserFullName:{
            FirstName:"Mohan",
            LastName: "sharma"
        }
    }
}
console.log(NewUser.Name);
console.log(NewUser.Name.UserFullName);
console.log(NewUser.Name.UserFullName.LastName);*/

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}
const obj3 = {5:'g',6:'h',7:'i'}

//const obj4 = Object.assign({},obj1,obj2,obj3);

// But we not use it 

const obj4 = {...obj1, ...obj2,...obj3}
//console.log(obj4);

const users = [
    {
        id : 1,
        email: "1@gmail.com"
    } ,   
    {
        id : 2,
        email: "2@gmail.com"
    } ,   
    {
        id : 3,
        email: "3@gmail.com"
    }    
    ]
    //console.log(users[0].email)
    /*console.log(Thunder)
    console.log(Object.keys(Thunder))
    console.log(Object.values(Thunder))
    console.log(Object.entries(Thunder))*/
    
    //console.log(Thunder.hasOwnProperty('isLoggedIn'));

    //******************************************//

    const course = {
        coursename: "JS IN HINDI",
        courseprice: "999",
        courseInstructor: "HITESH"
    }
    //course.courseInstructor

    const {courseInstructor:Instructor} = course
    //console.log(courseInstructor);
    //console.log(Instructor);

   /* {
        "Name": "Priyanka",
        "Course" : "HTML",
        "Price" : "Free"
    }*/
   [
    {},
    {},
    {}    

   ]

