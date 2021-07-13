"use strict"

window.addEventListener('load',doFirst)

function doFirst(){
    document.getElementById("theForm").onsubmit = calculate ;
}

// column
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const age = document.getElementById("age");
const genders = document.querySelectorAll(".gender") // list
const activity = document.getElementById("activity");
const bodyFat = document.getElementById("fp");

// result
const resultBMI = document.querySelector(".BMI");
const resultBMR = document.querySelector(".BMR");
const resultTDEE = document.querySelector(".TDEE");
const resultFFMI = document.querySelector(".FFMI");

let BMI = 0 ;
let BMR = 0 ;
let TDEE = 0 ;
let FFMI = 0 ;
let userGender = "Male" ;

function calculate() {

    let userHeight = height.value 
    let userWeight = weight.value 
    let userAge = age.value  

    // BMI
    BMI = ((userWeight) / Math.pow(userHeight / 100, 2)).toFixed(2) ;
    resultBMI.textContent = `${BMI}` | 0 ;

    // BMR
    // 判斷被選取 男女
    for(let gender of genders){
        if(gender.checked){
            userGender = gender.value ;
        }
    }
    if(userGender == "Male"){
        BMR = 66 + (13.7 * userWeight) + (5 * userHeight) - (6.8 * userAge) ; 
    }else{
        BMR = 665 + (9.6 * userWeight) + (1.8 * userHeight) - (4.7 * userAge) ; 
    }
    resultBMR.textContent = `${BMR.toFixed(2)}`  ;

    // TDEE
    let activityLevel = activity.value ;
    if(activityLevel == 0){
        TDEE = BMR * 1.2 ;
    }
    if(activityLevel == 1){
        TDEE = BMR * 1.4 ;
    }
    if(activityLevel == 2){
        TDEE = BMR * 1.6 ;
    }
    if(activityLevel == 3){
        TDEE = BMR * 1.8 ;
    }
    if(activityLevel == 4){
        TDEE = BMR * 2 ;
    }
        resultTDEE.textContent = `${TDEE.toFixed(2)}` 

    // FFMI
    FFMI = userWeight * ((100-bodyFat.value)/100) / (Math.pow(userHeight / 100, 2))
    resultFFMI.textContent = `${FFMI.toFixed(2)}` ;

    return false ;
}

