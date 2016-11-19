var solution = [
	{
		question: "What is Iron Man's first name?",
		answer: "tony"
	},
	{
		question: "What is the name of Iron Man's company?",
		answer: "stark industries"
	},
	{
		question: "What does Obadiah say has always been the Achilles Heel of people who tried to kill Iron Man?",
		answer: "technology"
	},
	{
		question: "When did Iron Man come out?",
		answer: "2008"
	},
	{
		question: "What is the name of Iron Man's assistant?",
		answer: "pepper"
	},
	{
		question: "When did Iron Man 2 come out?",
		answer: "2010"
	},
	{
		question: "What is 'Pepper' allergic to?",
		answer: "strawberries"
	},
	{
		question: "What is the name of Tony's interactive computer assistant?",
		answer: "jarvis"
	},
	{
		question: "What does Tony use in the cave to prevent shrapnel from entering his heart?",
		answer: "arc reactor technology"
	},
	{
		question: "How many tons can Iron Man's suit lift when fully powered?",
		answer: "over 100"
	},
	{
		question: "When did Iron Man 3 come out?",
		answer: "2013"
	},
	{
		question: "Who does Iron Man creator Stan Lee say Tony Stark is based on?",
		answer: "howard hughes"
	},
	{
		question: "When Rhodey (Terrence Howard) looks at the Mark II armour and hints at his War Machine role in Iron Man 2 - what does he say?",
		answer: "next time, baby"
	}
]


for(i = 0; i < solution.length; i++) {
	document.getElementById('question' + [i]).innerHTML = solution[i].question
}

function submit() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < solution.length; i++) {	
		var getAnswer = solution[i].answer
		var userInput = document.getElementById('answer' + [i]).value
		var user =  userInput.toLowerCase()
		var ironMan = document.getElementById('question' + [i])
		if(user == getAnswer) {
			ironMan.className = 'right'
			correct++
		} else {
			ironMan.className = 'animated flash wrong'
			incorrect++
		}
	}
	document.getElementById('yes').className = 'yes'
	document.getElementById('no').className = 'no'
	document.getElementById('YES').innerHTML = correct
	document.getElementById('NO').innerHTML = incorrect
}
