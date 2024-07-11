'use strict'
function farengeytgaAylantirish(selsiy){
    console.log("farengeytgaAylantirish ==> "+selsiy*9/5+32)
}
farengeytgaAylantirish(25)
function convertToCelsius(farengeyt){
    console.log("Tselsiyga aylantiring ==> "+(farengeyt-32)*5/9)
}
convertToCelsius(86)
function temperaturaniOzgartirish(raqam, gradus) {
    if (gradus==='C'){
        console.log(raqam*9/5+32+'F')
    }
    else{
        console.log((raqam-32)*5/9+'C')
    }
    return gradus
}
temperaturaniOzgartirish(25,'C')
temperaturaniOzgartirish(86,'F')