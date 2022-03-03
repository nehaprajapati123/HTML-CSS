console.log("let's learn about constructor");

let obj={
    Fname:"neha",
    Lname:"prajapati",
    village:"bhalswa"

}

// console.log(obj.Fname);
function info(name,sir_name,villa){
    this.Fname=name;
    this.Lname=sir_name;
    this.village=villa;

}

result=new info("neha","prajapati","ghr")
console.log(result);