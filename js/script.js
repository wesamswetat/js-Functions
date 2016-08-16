/**
 * Created by Wesam on 8/16/2016.
 */





// #################################################################
// <!--################## TARGEL 1 IN JS FUNCTIONS ############# -->

function sum() {
    var num1 = +document.getElementById('numOneInTargel1').value;
    var num2 = +document.getElementById('numTowInTargel1').value;
    alert("סכום של שני המספרים: " + (num1 + num2));
}

function gt() {
    var num1 = +document.getElementById('numOneInTargel1').value;
    var num2 = +document.getElementById('numTowInTargel1').value;
    alert( "המספר הגדול מביניהם:  "  + ( (num1 > num2) ? num1 : num2));
}


// #################################################################
// <!--################## TARGEL 2 IN JS FUNCTIONS ############# -->

function mayenn() {

    var num1 = +document.getElementById('numOneInTargel2').value;
    var num2 = +document.getElementById('numTowInTargel2').value;
    var num3 = +document.getElementById('numThreeInTargel2').value;

    if ((num1 > num2) && (num1 > num3) && (num2 > num3)) {
        toDiv(num1, num2, num3);
    } else if ((num1 > num2) && (num1 > num3) && (num3 > num2)) {
        toDiv(num1, num3, num2);
    } else if ((num2 > num1) && (num2 > num3) && (num1 > num3)) {
        toDiv(num2, num1, num3);
    } else if ((num2 > num1) && (num2 > num3) && (num3 > num1)) {
        toDiv(num2, num3, num1);
    } else if ((num3 > num1) && (num3 > num2) && (num1 > num2)) {
        toDiv(num3, num1, num2);
    } else if ((num3 > num1) && (num3 > num2) && (num2 > num1)) {
        toDiv(num3, num2, num1);
    }

    function toDiv(h, m, l) {
        document.getElementById('result').innerHTML = "המיון הוא" + h + " " + m + " " + l;
    }

}