console.log("Hello");

console.log(document.querySelector('#weight').value);
// document.querySelector('#weight').value 

function getBmi() {
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value

    let myBmi = Math.floor(703 * (weight / (height * height)));

    document.querySelector('#bmi-display').innerHTML = myBmi;



    if (myBmi <= 18.5) {
        document.getElementById("bmi-display").style.color = "blue";
    } else if (myBmi >= 18.6 && myBmi <= 24.9) {
        document.getElementById("bmi-display").style.color = "#7EDC20";
    } else if (myBmi >= 25 && myBmi <= 29.9) {
        document.getElementById("bmi-display").style.color = "orange";
    } else {
        document.getElementById("bmi-display").style.color = "red";
    }

    //! Less than 18.5 Athletic
    //! 18.6 to 24.9 Average
    //! 25 to 29.9 Overweight
    //! More than 30 Obese
}