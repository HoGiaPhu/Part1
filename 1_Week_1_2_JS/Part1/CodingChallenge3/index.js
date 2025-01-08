//1-------------------------------
var DolphinsTB = (96 + 108 + 89)/3;
console.log("DolphinsTB is: " + DolphinsTB);
var KoalasTB = (99 + 91 + 110)/3;
console.log("KoalasTB is: "+ KoalasTB);
//2---------------------------------
if (KoalasTB === DolphinsTB) {
    console.log("They are DRAW!");
}
if (DolphinsTB>KoalasTB) {
    console.log("Dolphins is WINNER!");
}
if (KoalasTB>DolphinsTB) {
    console.log("Koalas is WINNer!");
}
//3------------------------------
var DolphinsBN1 = (97 + 112 + 101)/3;
var KoalasBN1 = (109+95+123)/3;

if (DolphinsBN1>KoalasBN1 && DolphinsBN1>100) {
    console.log("Dolphins bonus 1 is winner");
} else if (DolphinsBN1<KoalasBN1 && KoalasBN1>100) {
    console.log("Koalas bonus 1 is winner");
} else {
    console.log("They are draw");
}
//4----------------------------
var DolphinsBN2 = (97+112+101)/3;
var KoalasBN2 = (109+95+106)/3

if (DolphinsBN2 > KoalasBN2 && DolphinsBN2>100) {
    console.log("Dolphins bonus 2 is winner");
} else if (DolphinsBN2 < KoalasBN2 && KoalasBN2 >100) {
    console.log("Koalas bonus 2 is winner");
} else if (DolphinsBN2 === KoalasBN2 && DolphinsBN2 > 100 && KoalasBN2 >100) {
    console.log("They are draw");
} else{
    console.log('No winner');
}
