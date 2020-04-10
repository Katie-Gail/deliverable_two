var vacationType = "";
groupSize = 0;
result = ""
travelSuggestion = ""
destination = ""

var vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
console.log(vacationType);

if (vacationType === "musical") {
    destination = "New Orleans";
} else if (vacationType === "tropical"){
    destination = "a beach vacation in Mexico";
} else if (vacationType === "adventurous") {
    destination = "go whitewater rafting in the Grand Canyon";
} else {
    alert ("Please type correctly");
}

var groupSize = prompt("How many are in your group?");
console.log(groupSize);

if (groupSize <= 2) {
    travelSuggestion = "first class plane";
} else if (groupSize === 3,4,5) {
    travelSuggestion = "helicopter";
} else if (groupSize >= 6) { //I don't know why this returns helicopter
    travelSuggestion = "charter flight";
} else {
    alert ("Please type a number");
}

alert (result = "Since you're a group of "  + groupSize + " going on a " + vacationType + " vacation, you should take a " +travelSuggestion+ " to " +destination+ ".")
console.log(result)