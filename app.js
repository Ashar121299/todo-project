var N = prompt("Enter your name:");


var gender = prompt("Enter your gender:");

var age = prompt("Enter your age:");
if(age<=0){
    alert("your name is zero or less than zero");
}

 var c=prompt("skip welcoming message?")
 if(c=="no"){
   
    
        if (gender=="male"){
            alert("welcome Mr. "+N );

        }
        if(gender=="female"){
            alert("welcome Ms. "+N )

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
var Q1=prompt("are you love programming ?");

var Q2=prompt("are you living in jordan ?");

var Q3=prompt("are you working now?");

pushQuestion(Q1);
pushQuestion(Q2);
pushQuestion(Q3);


function treserveArray(array){
    for (let i=0;i<array.length;i+=1){
        console.log(array[i]);
    }
    

}
treserveArray(arr);







    





