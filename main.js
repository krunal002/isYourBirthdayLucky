var dateOfBirth = document.querySelector("#dateOfBirth");
var luckyNumber = document.querySelector("#luckyNumber");
var checkButton = document.querySelector("#checkButton");
var output = document.querySelector("#output");

checkButton.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky(){
        var dob = dateOfBirth.value;
        output.innerHTML = dob;
        var sum = calculateSum(dob);

        if(sum === 0){
            output.innerHTML = "Give me your Birthday 😉";
        }
        else if(Number(luckyNumber.value) === 0){
            output.innerHTML = "What's your Lucky number";
        }
        else if(sum % Number(luckyNumber.value) === 0){
            output.innerHTML = "Your Birthday is Lucky ✨🥳"
        }
        else{
            output.innerHTML = "Your Birthday is NOT Lucky 🤕";
        }
}

function calculateSum(dob){
    var sum = 0;
    for (var i=0; i<dob.length; i++){
        if(dob.charAt(i) === "-"){
            continue;
        }
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}