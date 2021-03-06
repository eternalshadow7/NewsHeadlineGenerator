// Janelynn Camingue
// 10/29/17

// I made a background bkg3.png to make it have the texture of a newspaper for the theme.

'use strict';
let myRules={

	// These all mean HELLO
	// Found from https://www.duolingo.com/comment/5940911/Hello-in-100-Languages
  "helloOpening":
	["BONJOUR", "HOLA", "HALLO", "GUTEN TAG", "CIAO", "NAMASTE", "SALAAM", "ZDRAS-TVUY-TE", "ZDRAVO", "HELLO", "TERE", "BULA", "TERVE", "SALUT", "ALOHA", "OI"],
  // These are what the bot will say if you type any variation of 'help'
  "botReadText":
	["'food'", "'world'", "'gossip'"],
  // These are opening sentences the bot will say.
	"botIntroTopic":
	[ "breaking news!", "extra, extra! Read all about it!","you won't believe this!", "isn't that neat?", "how...interesting.", "oh!","wow!", "listen!", "what in the world?", "whoa!", "here's what's going on.", "guess what?" ],

  // These are for gossip.
	"celebrityGossipTopic":
		["Rihanna", "Kim Kardashian", "Khloe Kardashian", "Kourtney Kardashian", "Gigi Hadid", "Heidi Klum", "Taylor Swift", "Kelly Clarkson", "Usher","Demi Lovato", "Kris Jenner", "Lady Gaga", "Katy Perry", "Dakota Fanning", "T-Pain", "Carrie Underwood", "Paula Abdul","Drake", "Justin Bieber", "Selena Gomez", "Leonardo DiCaprio", "Britney Spears", "Johnny Depp", "Avril Lavigne", "Channing Tatum"],
	"celebrityGossipHelpingVerb":
		["caught", "spotted", "found", "discovered", "captured", "photographed", "believed to be", "recorded", "seen", "reported"],
	"celebrityGossipVerb":
		["tripping at the Grammy Awards", "developing a new makeup line", "releasing a new makeup line", "going bankrupt", "tripping over air", "dead", "winning a pie-eating contest", "winning second place in a dance contest", "donating $4,000,000 to charity", "winning a cooking contest", "going undercover", "scuba diving", "getting married", "getting a divorce", "volunteering at a children's hospital","murdered","proposing", "signing autographs","having an affair", "unconscious", "having a mental breakdown", "getting arrested", "getting lyme disease", "falling in love", "writing a new book", "running a marathon", "donating to the local children's hospital", "having a midlife crisis","getting into a car accident", "getting a speeding ticket"],
	"celebrityGossipPlaces":
		["at the movie theater", "at the beach", "at a hotel room", "at a church", "in Los Angeles", "in London", "in Tokyo", "in New York Fashion Week", "in Hollywood", "in Malibu", "in New Jersey", "in Las Vegas", "in Reno", "in Brazil", "in Spain", "in New York", "in New Hampshire", "in Alaska", "in Los Angeles", "at the airport", "in Vietnam", "in Hong Kong", "in New Zealand", "in England", "in Hawaii"],

  // These are for world.
	"worldTopic":
		["Russia", "The United States", "China", "North Korea", "Africa", "South America", "Europe", "Asia", "Australia", "Antarctica"],
	"worldVerb":
		["under attack", "suffering", "dying", "signing a treaty", "prospering"],
	"worldReason":
		["because of", "due to", "during"],
	"worldSubject":
		["hunger", "a drought", "the economy", "deforestation", "winning the Olympics", "discovering an oil spill","waste disposal", "acid rain", "climate change", "loss of biodiversity", "population growth", "a disease", "pollution", "population decline", "poverty", "lack of education", "corruption"],

  // These are for local.
  // Local is default.
	"localTopic":
		["middle school student" , "biochemist", "stunt double", "firefighter", "anthropologist", "tour guide","toddler" , "college student" , "high school student" , "cat" , "high school teacher" , "elementary school student" , "preschooler" , "middle school teacher" , "high school principal" , "middle school principal" , "elementary school principal" , "elderly person" , "babysitter","yoga instructor" , "child" , "martial arts instructor","children's book author", "hot dog vendor", "divorce lawyer", "bus driver", "astronaut" , "software engineer" , "physics professor" , "puppy", "kitten", "aeronautics engineer" , "audio engineer", "ballet dancer", "cabaret singer", "chemist", "biologist", "philosophy professor","gasoline clerk" , "dog"],
  // found at https://github.com/dariusk/corpora/blob/master/data/humans/firstNames.json
	"localFirstNames":
		["Aaliyah",
    "Aaron",
    "Abby",
    "Abigail",
    "Abraham",
    "Adam",
    "Addison",
    "Adrian",
    "Adriana",
    "Adrianna",
    "Aidan",
    "Aiden",
    "Alan",
    "Alana",
    "Alejandro",
    "Alex",
    "Alexa",
    "Alexander",
    "Alexandra",
    "Alexandria",
    "Alexia",
    "Alexis",
    "Alicia",
    "Allison",
    "Alondra",
    "Alyssa",
    "Amanda",
    "Amber",
    "Amelia",
    "Amy",
    "Ana",
    "Andrea",
    "Andres",
    "Andrew",
    "Angel",
    "Angela",
    "Angelica",
    "Angelina",
    "Anna",
    "Anthony",
    "Antonio",
    "Ariana",
    "Arianna",
    "Ashley",
    "Ashlyn",
    "Ashton",
    "Aubrey",
    "Audrey",
    "Austin",
    "Autumn",
    "Ava",
    "Avery",
    "Ayden",
    "Bailey",
    "Benjamin",
    "Bianca",
    "Blake",
    "Braden",
    "Bradley",
    "Brady",
    "Brandon",
    "Brayden",
    "Breanna",
    "Brendan",
    "Brian",
    "Briana",
    "Brianna",
    "Brittany",
    "Brody",
    "Brooke",
    "Brooklyn",
    "Bryan",
    "Bryce",
    "Bryson",
    "Caden",
    "Caitlin",
    "Caitlyn",
    "Caleb",
    "Cameron",
    "Camila",
    "Carlos",
    "Caroline",
    "Carson",
    "Carter",
    "Cassandra",
    "Cassidy",
    "Catherine",
    "Cesar",
    "Charles",
    "Charlotte",
    "Chase",
    "Chelsea",
    "Cheyenne",
    "Chloe",
    "Christian",
    "Christina",
    "Christopher",
    "Claire",
    "Cody",
    "Colby",
    "Cole",
    "Colin",
    "Collin",
    "Colton",
    "Conner",
    "Connor",
    "Cooper",
    "Courtney",
    "Cristian",
    "Crystal",
    "Daisy",
    "Dakota",
    "Dalton",
    "Damian",
    "Daniel",
    "Daniela",
    "Danielle",
    "David",
    "Delaney",
    "Derek",
    "Destiny",
    "Devin",
    "Devon",
    "Diana",
    "Diego",
    "Dominic",
    "Donovan",
    "Dylan",
    "Edgar",
    "Eduardo",
    "Edward",
    "Edwin",
    "Eli",
    "Elias",
    "Elijah",
    "Elizabeth",
    "Ella",
    "Ellie",
    "Emily",
    "Emma",
    "Emmanuel",
    "Eric",
    "Erica",
    "Erick",
    "Erik",
    "Erin",
    "Ethan",
    "Eva",
    "Evan",
    "Evelyn",
    "Faith",
    "Fernando",
    "Francisco",
    "Gabriel",
    "Gabriela",
    "Gabriella",
    "Gabrielle",
    "Gage",
    "Garrett",
    "Gavin",
    "Genesis",
    "George",
    "Gianna",
    "Giovanni",
    "Giselle",
    "Grace",
    "Gracie",
    "Grant",
    "Gregory",
    "Hailey",
    "Haley",
    "Hannah",
    "Hayden",
    "Hector",
    "Henry",
    "Hope",
    "Hunter",
    "Ian",
    "Isaac",
    "Isabel",
    "Isabella",
    "Isabelle",
    "Isaiah",
    "Ivan",
    "Jack",
    "Jackson",
    "Jacob",
    "Jacqueline",
    "Jada",
    "Jade",
    "Jaden",
    "Jake",
    "Jalen",
    "James",
    "Jared",
    "Jasmin",
    "Jasmine",
    "Jason",
    "Javier",
    "Jayden",
    "Jayla",
    "Jazmin",
    "Jeffrey",
    "Jenna",
    "Jennifer",
    "Jeremiah",
    "Jeremy",
    "Jesse",
    "Jessica",
    "Jesus",
    "Jillian",
    "Jocelyn",
    "Joel",
    "John",
    "Johnathan",
    "Jonah",
    "Jonathan",
    "Jordan",
    "Jordyn",
    "Jorge",
    "Jose",
    "Joseph",
    "Joshua",
    "Josiah",
    "Juan",
    "Julia",
    "Julian",
    "Juliana",
    "Justin",
    "Kaden",
    "Kaitlyn",
    "Kaleb",
    "Karen",
    "Karina",
    "Kate",
    "Katelyn",
    "Katherine",
    "Kathryn",
    "Katie",
    "Kayla",
    "Kaylee",
    "Kelly",
    "Kelsey",
    "Kendall",
    "Kennedy",
    "Kenneth",
    "Kevin",
    "Kiara",
    "Kimberly",
    "Kyle",
    "Kylee",
    "Kylie",
    "Landon",
    "Laura",
    "Lauren",
    "Layla",
    "Leah",
    "Leonardo",
    "Leslie",
    "Levi",
    "Liam",
    "Liliana",
    "Lillian",
    "Lilly",
    "Lily",
    "Lindsey",
    "Logan",
    "Lucas",
    "Lucy",
    "Luis",
    "Luke",
    "Lydia",
    "Mackenzie",
    "Madeline",
    "Madelyn",
    "Madison",
    "Makayla",
    "Makenzie",
    "Malachi",
    "Manuel",
    "Marco",
    "Marcus",
    "Margaret",
    "Maria",
    "Mariah",
    "Mario",
    "Marissa",
    "Mark",
    "Martin",
    "Mary",
    "Mason",
    "Matthew",
    "Max",
    "Maxwell",
    "Maya",
    "Mckenzie",
    "Megan",
    "Melanie",
    "Melissa",
    "Mia",
    "Micah",
    "Michael",
    "Michelle",
    "Miguel",
    "Mikayla",
    "Miranda",
    "Molly",
    "Morgan",
    "Mya",
    "Naomi",
    "Natalia",
    "Natalie",
    "Nathan",
    "Nathaniel",
    "Nevaeh",
    "Nicholas",
    "Nicolas",
    "Nicole",
    "Noah",
    "Nolan",
    "Oliver",
    "Olivia",
    "Omar",
    "Oscar",
    "Owen",
    "Paige",
    "Parker",
    "Patrick",
    "Paul",
    "Payton",
    "Peter",
    "Peyton",
    "Preston",
    "Rachel",
    "Raymond",
    "Reagan",
    "Rebecca",
    "Ricardo",
    "Richard",
    "Riley",
    "Robert",
    "Ruby",
    "Ryan",
    "Rylee",
    "Sabrina",
    "Sadie",
    "Samantha",
    "Samuel",
    "Sara",
    "Sarah",
    "Savannah",
    "Sean",
    "Sebastian",
    "Serenity",
    "Sergio",
    "Seth",
    "Shane",
    "Shawn",
    "Shelby",
    "Sierra",
    "Skylar",
    "Sofia",
    "Sophia",
    "Sophie",
    "Spencer",
    "Stephanie",
    "Stephen",
    "Steven",
    "Summer",
    "Sydney",
    "Tanner",
    "Taylor",
    "Thomas",
    "Tiffany",
    "Timothy",
		"Tobi",
		"Tobias",
		"Tobin",
		"Toby",
		"Tobuscus",
		"Topin",
    "Travis",
    "Trenton",
    "Trevor",
    "Trinity",
    "Tristan",
    "Tyler",
    "Valeria",
    "Valerie",
    "Vanessa",
    "Veronica",
    "Victor",
    "Victoria",
    "Vincent",
    "Wesley",
    "William",
    "Wyatt",
    "Xavier",
    "Zachary",
    "Zoe",
    "Zoey"],

	// found at https://github.com/dariusk/corpora/blob/master/data/humans/lastNames.json
	"localLastNames":
		[ "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Miller",
    "Davis",
    "Garcia",
    "Rodriguez",
    "Wilson",
    "Martinez",
    "Anderson",
    "Taylor",
    "Thomas",
    "Hernandez",
    "Moore",
    "Martin",
    "Jackson",
    "Thompson",
    "White",
    "Lopez",
    "Lee",
    "Gonzalez",
    "Harris",
    "Clark",
    "Lewis",
    "Robinson",
    "Walker",
    "Perez",
    "Hall",
    "Young",
    "Allen",
    "Sanchez",
    "Wright",
    "King",
		"Kwan",
    "Scott",
    "Green",
    "Baker",
    "Adams",
    "Nelson",
    "Hill",
    "Ramirez",
    "Campbell",
    "Mitchell",
    "Roberts",
    "Carter",
    "Phillips",
    "Evans",
    "Turner",
    "Torres",
    "Parker",
    "Collins",
    "Edwards",
    "Stewart",
    "Flores",
    "Morris",
    "Nguyen",
    "Murphy",
    "Rivera",
    "Cook",
    "Rogers",
    "Morgan",
    "Peterson",
    "Cooper",
    "Reed",
    "Bailey",
    "Bell",
    "Gomez",
    "Kelly",
    "Howard",
    "Ward",
    "Cox",
    "Diaz",
    "Richardson",
    "Wood",
    "Watson",
    "Brooks",
    "Bennett",
    "Gray",
    "James",
    "Reyes",
    "Cruz",
    "Hughes",
    "Price",
    "Myers",
    "Long",
    "Foster",
    "Sanders",
    "Ross",
    "Morales",
    "Powell",
    "Sullivan",
    "Russell",
    "Ortiz",
    "Jenkins",
    "Gutierrez",
    "Perry",
    "Butler",
    "Barnes",
    "Fisher",
    "Henderson",
    "Coleman",
    "Simmons",
    "Patterson",
    "Jordan",
    "Reynolds",
    "Hamilton",
    "Graham",
    "Kim",
    "Gonzales",
    "Alexander",
    "Ramos",
    "Wallace",
    "Griffin",
    "West",
    "Cole",
    "Hayes",
    "Chavez",
    "Gibson",
    "Bryant",
    "Ellis",
    "Stevens",
    "Murray",
    "Ford",
    "Marshall",
    "Owens",
    "Mcdonald",
    "Harrison",
    "Ruiz",
    "Kennedy",
    "Wells",
    "Alvarez",
    "Woods",
    "Mendoza",
    "Castillo",
    "Olson",
    "Webb",
    "Washington",
    "Tucker",
    "Freeman",
    "Burns",
    "Henry",
    "Vasquez",
    "Snyder",
    "Simpson",
    "Crawford",
    "Jimenez",
    "Porter",
    "Mason",
    "Shaw",
    "Gordon",
    "Wagner",
    "Hunter",
    "Romero",
    "Hicks",
    "Dixon",
    "Hunt",
    "Palmer",
    "Robertson",
    "Black",
    "Holmes",
    "Stone",
    "Meyer",
    "Boyd",
    "Mills",
    "Warren",
    "Fox",
    "Rose",
    "Rice",
    "Moreno",
    "Schmidt",
    "Patel",
    "Ferguson",
    "Nichols",
    "Herrera",
    "Medina",
    "Ryan",
    "Fernandez",
    "Weaver",
    "Daniels",
    "Stephens",
    "Gardner",
    "Payne",
    "Kelley",
    "Dunn",
    "Pierce",
    "Arnold",
    "Tran",
    "Spencer",
    "Peters",
    "Hawkins",
    "Grant",
    "Hansen",
    "Castro",
    "Hoffman",
    "Hart",
    "Elliott",
    "Cunningham",
    "Knight",
    "Bradley"],
	"localVerb":
		["is missing", "was critically injured", "was discovered to be dead", "fell off a cliff", "bought a racecar", "bought a yacht", "got Ebola", "got Cholera", "got tendonitis", "got the flu", "was killed", "was robbed", "was kidnapped","inherited $1,000,000,000", "was hospitalized", "won the lottery", "won a barbeque cook-off","won a chili cook-off","discovered a new star", "discovered a new planet", "won an award", "fell down a well", "found a dinosaur bone","won second place in a beauty pageant", "won $5,000", "discovered a dead body", "discovered a new chemical element"],
	"localConjunction":
		["after", "before", "despite", "without knowing about", "while", "until", "when", "and was seen", "and was spotted", "and was recorded"],
	"localAfterConjunction":
		["gambling at the casino", "getting arrested for tax evasion", "getting arrested for trespassing", "robbing the gasoline station", "watching a horror movie", "stealing a giant gumball machine", "doing grafitti on Mount Rushmore", "stealing candy from a baby", "cheating on the SATs", "poisoning a stray cat", "loitering on streets of downtown", "forging a fake ID", "breaking in the new museum that opened up", "stealing the Mona Lisa", "forging signatures", "polluting the ocean", "publishing a new book",
	"illustrating a new book", "creating a new art piece", "presenting at a tech conference", "coming up with a new cocktail recipe", "starring in a YouTube video", "egging a house", "arsoning portapotties", "speeding over 100mph"],

  // These are for sales.
	"salesTopic":
	["macy's", "jcPenney", "target", "gamestop", "kohl's", "wal-Mart", "k-mart", "safeway", "ikea", "office Depot", "hot Topic", "at&t", "verizon", "petco", "victoria's Secret", "forever 21"],
	"salesPrices":
	["50% off", "80% off", "10% off", "15% off", "30% off", "5% off", "40% off", "70% off", "90% off", "free", "20%  off", "35% off", "25% off", "45% off"],
  "salesDate1":
	["this upcoming", "next"],
	"salesDate":
	["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "week"],

// This is for food.
	"foodTopic":
	["tangerines", "oranges", "baby wipes", "watermelons", "eggs", "peanuts", "diapers", "coconuts", "chocolate chip cookies", "apples", "bananas", "tootsie Rolls", "blueberries", "raspberries", "onions", "potatoes", "tomatoes", "pancakes", "cherries", "cranberries", "grapes", "grapefruits", "guavas", "cantaloupes", "lemons", "limes", "lucky Charms", "frosted Flakes", "mangoes", "olives", "pickles", "pineapples", "krispy Kreme donuts", "pencils", "violins", "guitars", "drums", "marshmallows", "graham crackers"],
	"foodEffects":
	["feeling ill", "feeling happy", "feeling backed up", "feeling like dying", "getting hit by a car", "failing a test", "dropping out of high school", "crying in a corner", "blowing their nose", "bloating", "growing lobster claws", "tripping on air", "gaining weight", "losing weight", "going blind", "going mute", "losing eyesight", "falling off a chimney", "aging", "growing wrinkles", "going bald", "burping", "coughing", "sneezing", "exercising", "gurgling", "eating dirt"]

};


let getMyTraceryGrammar = function() {
	return myRules;
}
let myGrammar = tracery.createGrammar(getMyTraceryGrammar());
myGrammar.addModifiers(baseEngModifiers);
myGrammar.clearState();
let chirp_text=myGrammar.flatten("[greeting: #helloOpening#] #greeting#. That meant 'hello' in another language. Here is where you can get local news for your city. You can also see other news like celebrity gossip, world news, and food if you want.");
let context=myGrammar;

function getBotName(grammar_context) {
	return "News Reporter";
}

function getReplyName(grammar_context) {
	return "Citizen";
}
function makeChirp() {

	let output = myGrammar.flatten("#greeting#. What are you interested in? World news, local news, sales, or some celebrity gossip?");
	let wowFactor=myGrammar.flatten("[enthusiasm: #botIntroTopic.capitalize#]");
	return {"message" :chirp_text, output, wowFactor, "context" : myGrammar};
}
let reply_gram=null;

function makeReply(user_input_text, grammar_context) {
	reply_gram = grammar_context;
	let reply_grammar = grammar_context;
	let partner_message_text=user_input_text;
	let newGrammar=context;
	let reply;
	let replyBot;
// if the user inputs 'gossip', 'food', or 'world', different news stories despending on the topic will be printed out.
// if the user types in 'really' after a certain response, the bot will give a unique response.
// if nothing or no string that matched the conditional ones was typed, the default bot response is for local news.
	if(("gossip"==partner_message_text) || ("Gossip"==partner_message_text) || ("GOSSIP"==partner_message_text)){
		reply=myGrammar.flatten("#enthusiasm# Sources have confirmed that #celebrityGossipTopic# was #celebrityGossipHelpingVerb# #celebrityGossipVerb# #celebrityGossipPlaces#.");
	}else if (("world"==partner_message_text) || ("World"==partner_message_text) || ("WORLD"==partner_message_text)){
		reply=myGrammar.flatten("#enthusiasm# #worldTopic# is #worldVerb# #worldReason# #worldSubject#.");
	}else if(("sales"==partner_message_text) || ("Sales"==partner_message_text) || ("SALES"==partner_message_text)){
		reply=myGrammar.flatten("#salesTopic.capitalize# is having a buy one get one #salesPrices# #salesDate1# #salesDate#!");
	}else if(("food"==partner_message_text) || ("Food"==partner_message_text) || ("FOOD"==partner_message_text)){
		reply=myGrammar.flatten("[selectedFood: #foodTopic.capitalize#] #selectedFood# have been recalled, and consumers have been reporting that they have been #foodEffects#. #selectedFood# have been advise to be avoided at all costs." );
	}else if( ("really?"==partner_message_text) || ("Really?"==partner_message_text) || ("really" == partner_message_text) || ("Really" == partner_message_text)){
		reply=myGrammar.flatten("Yes, really.");
	}else{
		reply=myGrammar.flatten("#greeting#. In other news, a local #localTopic# named #localFirstNames# #localLastNames# #localVerb# #localConjunction# #localAfterConjunction#.");
		     if((partner_message_text=="help")||(partner_message_text=="HELP") || (partner_message_text=="Help") ){
			       reply=myGrammar.flatten("Why not type in #botReadText.capitalize# and see what happens?");
         }
         if(("ok"==partner_message_text) || ("OK"==partner_message_text) || ("okay"==partner_message_text) || ("OKAY"==partner_message_text)){
           reply=myGrammar.flatten("Awesome!");
         }
         if( ("ty"==partner_message_text) || ("TY"==partner_message_text) || ("thanks"==partner_message_text) || ("Thanks"==partner_message_text) || ("THANKS"==partner_message_text) || ("thank u"==partner_message_text) || ("Thank U"==partner_message_text) || ("THANK YOU"==partner_message_text) || ("thank you"==partner_message_text) || ("Thank you"==partner_message_text) || ("Thank You"==partner_message_text) ){
           reply=myGrammar.flatten("You are welcome.");
         }
  }
	return {"message": reply, "context": reply_grammar};
};
