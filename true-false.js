// Falsy
//  false, 0, "", undefine, null, NaN
// truely
// "0", "whiteSpace", {}, []
let name = 12;
if (name || name == 0) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}