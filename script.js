const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// Function to display output in the specified output div
function displayOutput(outputText, outputDivId) {
  const outputDiv = document.getElementById(outputDivId);
  outputDiv.innerHTML = `<h2>${outputText}</h2>`;
}

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  const developerNames = developers.map(person => person.name);
  displayOutput(`Developers: ${developerNames.join(', ')}`, "output1");

}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newData = { name, age, profession };
  data.push(newData);
  displayOutput(`Added new data: ${name}, Age: ${age}, Profession: ${profession}`);
}

// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter(person => person.profession === "admin");
  admins.forEach(admin => {
    const index = data.indexOf(admin);
    data.splice(index, 1);
  });
  displayOutput("Removed all admins", "output3");
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "Doe", age: 30, profession: "developer" },
    { name: "Smith", age: 35, profession: "admin" },
  ];
  const concatenatedArray = data.concat(dummyArray);
  console.log("Concatenated Array:", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  displayOutput(`Average Age: ${average.toFixed(2)}`, "output5");
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  displayOutput(`Is there someone above 25 years old?: ${isAbove25 ? 'Yes' : 'No'}`, "output6");
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  displayOutput(`Unique Professions: ${professions.join(', ')}`, "output7");
}


// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  displayOutput(`Sorted by Age: ${JSON.stringify(data)}`, "output8");
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(person => person.name === "john");
  if (john) {
    john.profession = "manager";
    displayOutput("John's profession updated to 'manager'", "output9");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === "developer").length;
  const adminCount = data.filter(person => person.profession === "admin").length;
  displayOutput(`Total Developers: ${developerCount}, Total Admins: ${adminCount}`, "output10");
}
