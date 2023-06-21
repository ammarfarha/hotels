function f(){
    document.getElementById("test").innerHTML = "Hello <br>";
}


function f1(x = 7){
    document.getElementById("test").innerHTML = "<h1>" + x + " </h1><br>";
}

function f2(x = 2,y = 1){
    let d = new Date(2023,6);
    document.getElementById("test").innerHTML = "<h1>" + (x ** y) + " </h1><br>";
    document.getElementById("test").innerHTML = d;
}

let f3 = (x = 3,y = 5) => {
    document.getElementById("test").innerHTML = "<h1>" + (x ** y) + " </h1><br>";
}

class student{
    constructor(name, last_name, birth_date){
        this.name = name;
        this.last = last_name;
        this.birth = birth_date;
    }
    getFullName(){
        return "Mr. " + this.name + " " + this.last + "<br>";
    }
    Age(){
        let now_day = new Date();
        let now_year = now_day.getFullYear();
        let birth_date = new Date(this.birth);
        let birth_year = birth_date.getFullYear();
        return now_year - birth_year;
    }
}

const s1 = new student("Ahmad", "Yaser", "2000-01-01");
document.getElementById("stu").innerHTML = s1.getFullName();
document.getElementById("stu").innerHTML += s1.Age();


