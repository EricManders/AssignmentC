let days = [
{
	date: 'monday',
	meal: ["Meatballs", "Potatoes","Beans"]
},
{
	date: 'tuesday',
	meal: ["Mac without cheese"]
},
{
	date: "wednesday",
	meal: ["fries"]
},
{
	date: "thursday",
	meal: ["Goulash"]
},
{
	date: "friday",
	meal: ["only greens"]
},
{
	date: "saturday",
	meal: ["Pizza"]
},
{
	date: "sunday",
	meal: ["sushi"]
}
];

var question = prompt("please tell me date of the week");
function xyz(obj) {
	if (question.includes(obj.date)) {
		document.getElementById("text").innerHTML = "You chose: "+ obj.date + ", your dinner is: " + obj.meal; 		
	}
}

let arrayfilter = days.filter(xyz);

function getText() {
	var name = document.getElementById("name").value;
	return name;
}

function getAge() {
	var age = document.getElementById("age").value;
	return age;
}

function showAll(name, age) {
	var name = getText();
	var age = getAge();

	if (name == "" || age == "") 
	{
		document.getElementById("answer").innerHTML = "Please fill in your name and/or age";
	}
	else
	{
		document.getElementById("answer").innerHTML = "your name is: " + name + " your age is: " + age;
	}
}