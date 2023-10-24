// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Dragon";


// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "mythical crature who have hard scales that are impenetrable by human swords. Dragons are known to breathe fire, fly and love gold. They destroy anyone who dares intrude their territory."

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = false;
if (isFriendly === false) {
  isFriendly = "not friendly";
}
else {
  isFriendly = "friendly";
}


// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = Math.floor(Math.random() * 60) + 1;


// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit = visitorAge > 15;
if (canVisit === false) {
  canVisit = "Unfortunately, you are too young to visit this zoo.";
}
else {
  canVisit = "Welcome to the zoo!";
}


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary = "The " + creatureName + " is a " + creatureDescription + " They are " + isFriendly + " to humans. " + "You are age " + visitorAge + ". " + canVisit

// 7. Print the summary using console.log()
console.log(zooSummary);


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
let creatureName2 = "Griffin"
let creatureDescription2 = "eagle-lion hybrid, who are known as companions of Zeus. They are noble, good creatures who protect people from evildoers. They symbolize strength and leadership. Quite an amazing creature this is."
let isFriendly2 = true;
if (isFriendly2 === false) {
  isFriendly2 = "not friendly";
}
else {
  isFriendly2 = "friendly";
}
let creatureName3 = "Unicorn"
let creatureDescription3 = "look like horses but have a very sharp horn. Do not be decieved by what others say about the Unicorn. Unicorns tend to be violent when agressed and friendlier when calmed."
let isFriendly3 = false;
if (isFriendly3 === false) {
  isFriendly3 = "not friendly";
}
else {
  isFriendly3 = "friendly";
}

zooSummary = "The " + creatureName + " is a " + creatureDescription + " They are " + isFriendly + " to humans. " + " The " + creatureName2 + " is a " + creatureDescription2 + " They are " + isFriendly2 + " to humans. " + " The " + creatureName3 + " is a " + creatureDescription3 + " They are " + isFriendly3 + " to humans. " + "You are age " + visitorAge + ". " + canVisit;

console.log(zooSummary);