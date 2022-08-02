var Name = prompt("Enter your name:");
var gender = prompt("Enter your gender:");
var age = prompt("Enter your age:");

if(age<=0){
    alert("your age is zero or less than zero");
}

var confirmQuestion=confirm("skip welcoming message?")
if(confirmQuestion==false){
    if (gender=="male"){
        alert("welcome Mr. "+Name );
    }
    else if(gender=="female"){
            alert("welcome Ms. "+Name )
         }
    else{
        alert("welcome");
    }
} 

const arr =[] ; 
function pushQuestion(Q){
    if (Q == "yes" || Q == "no"){
        arr.push(Q);
    }
    else{
        arr.push("invalid");
    }
}

function questionOne (){
    var Q1=prompt("are you love programming ?");
    pushQuestion(Q1);
}
function questionTwo (){
    var Q2=prompt("are you living in jordan ?");
    pushQuestion(Q2);
}
function questionThree(){
    var Q3=prompt("are you working now?");
    pushQuestion(Q3);
}
questionOne();
questionTwo();
questionThree();

function treserveArray(array){
    for (let i=0;i<array.length;i+=1){
        console.log(array[i]);
    }
}
treserveArray(arr);







    





