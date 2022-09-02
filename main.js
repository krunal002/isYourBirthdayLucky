var dateOfBirth = document.querySelector("#dateOfBirth");
var luckyNumber = document.querySelector("#luckyNumber");
var checkButton = document.querySelector("#checkButton");
var output = document.querySelector("#output");

checkButton.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky(){
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);

    if(sum % luckyNumber.value === 0){
        output.innerHTML = "Your Birthday is Lucky ✨🥳"
    }
    else{
        output.innerHTML = "Your Birthday is NOT Lucky 🤕"
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