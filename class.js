class user{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("The website data is secret");
    }
}


class Admin extends user{
    editData()
    {
        console.log("You can edit the data");
    }
}

let student1= new user("sakshi","sakshi@gmail.com");
let student2= new user("Mau","Mau@gmail.com");

let admin1=new Admin("Dean","Dean@clg.com")

console.log(student1);
console.log(student2);
student1.viewData();