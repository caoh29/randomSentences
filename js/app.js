// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
const synth = window.speechSynthesis;

let textToSpeak = "";

let subject = "";
let verb = "";
let adjective = "";
let animal = "";
let place = "";

const subjects = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const animals = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; // renamed locations to places

const table = document.getElementById("table");

const subjectList = document.getElementById('subject');
const verbList = document.getElementById('verb');
const adjectiveList = document.getElementById('adjective');
const animalList = document.getElementById('animal');
const placeList = document.getElementById('location');

const subjectBtn = document.getElementById('subjectBtn');
const verbBtn = document.getElementById('verbBtn');
const adjectiveBtn = document.getElementById('adjectiveBtn');
const animalBtn = document.getElementById('animalBtn');
const placeBtn = document.getElementById('locationBtn');

const speakButton = document.getElementById('speakBtn');
const generateRandomButton = document.getElementById('generateRandomBtn');
const resetButton = document.getElementById('resetBtn');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function generateSentence() {
	textToSpeak = `${subject} ${verb} ${adjective} ${animal} ${place}`;
}

function selectSubject() {
	const randomNum = Math.floor(Math.random() * subjects.length);
	helper(randomNum, subjectList);
	subject = subjects[randomNum];
}

function selectVerb() {
	const randomNum = Math.floor(Math.random() * verbs.length);
	helper(randomNum, verbList);
	verb = verbs[randomNum];
}

function selectAdjective() {
	const randomNum = Math.floor(Math.random() * adjectives.length);
	helper(randomNum, adjectiveList);
	adjective = adjectives[randomNum];
}

function selectAnimal() {
	const randomNum = Math.floor(Math.random() * animals.length);
	helper(randomNum, animalList);
	animal = animals[randomNum];
}

function selectPlace() {
	const randomNum = Math.floor(Math.random() * places.length);
	helper(randomNum, placeList);
	place = places[randomNum];
}

function helper(randomNum, refList) {
	const activeItems = refList.getElementsByClassName("active");
	while (activeItems.length > 0) {
		activeItems[0].classList.remove("active");
	}
	refList.children[randomNum].classList.add("active");
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
	generateSentence();
	speakNow(textToSpeak);
}

resetButton.onclick = function () {
	textToSpeak = "";
	subject = "";
	verb = "";
	adjective = "";
	animal = "";
	place = "";
	
	const activeItems = table.getElementsByClassName("active");
	while (activeItems.length > 0) {
		activeItems[0].classList.remove("active");
	}
}

// Add event listener for the generate button
generateRandomButton.onclick = function () {
	selectSubject();
	selectVerb();
	selectAdjective();
	selectAnimal();
	selectPlace();
}

subjectBtn.onclick = function () {
	selectSubject();
}

verbBtn.onclick = function () {
	selectVerb();
}

adjectiveBtn.onclick = function () {
	selectAdjective();
}

animalBtn.onclick = function () {
	selectAnimal();
}

placeBtn.onclick = function () {
	selectPlace();
}