// UTIL FUNCTIONS
// 1. Composite function
const GenerateCompositeNumber = (number1, number2 = 1, number3 = 1) => number1 * number2 * number3;

// 2. Longest string
const GetLongestString = (list) => {
  let longest = "";

  for (let index = 0; index < list.length; index++) {
    if (list[index].length > longest.length) {
      longest = list[index];
    }
  }

  return longest;
}

// 3. String repetition
const GenerateStringRepetition = (word, repeater) => {
  let repeatedWord = "";

  for (let index = 0; index < repeater; index++) {
    repeatedWord += word;
  }

  return repeatedWord;
}

// 4. Only lastnames
const GetOnlyLastNames = (contacts) => {
  const lastnames = [];

  contacts.forEach(contact => {
    lastnames.push(contact.lastName);
  });

  return lastnames;
}

// 5. Unique numbers
const GetUniqueNumbers = (list1, list2) => {
  const intersections = [];

  for (let index = 0; index < list1.length; index++) {
    if (list2.find(element => element === list1[index])) {
      intersections.push(list1[index]);
    }
  }

  return intersections;
}

// VIEW FUNCTIONS
// Get function menu buttons
const btns = document.getElementsByTagName("button");
const result = document.getElementById("result");

// Set click event for all function menu buttons
for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener('click', (event) => Recylink(event.target.id));
}

const Recylink = (option) => {
  let output;

  switch (option) {
    case 'composite_function':
      confirm("Ingresa 3 números enteros");

      let num1 = prompt("Ingresa el primer número");
      let num2 = prompt("Ingresa el segundo número");
      let num3 = prompt("Ingresa el tercer número");

      output = GenerateCompositeNumber(num1, num2, num3);
      break;
    case 'longest_string':
      confirm("Ingresa una lista de palabras");

      let list = prompt("Ejemplo: best,company,ever")?.split(',');

      output = GetLongestString(list);
      break;
    case 'string_repetition':
      confirm("Ingresa una palabra y el número de veces que se repetirá.");

      let word = prompt("Ingresa una palabra");
      let repeater = prompt("Ingresa el número que se repetirá la palabra");

      output = GenerateStringRepetition(word, repeater);
      break;
    case 'only_lastnames':
      const contacts = [
        { firstName: 'Juanito', lastName: 'Recy' },
        { firstName: 'James', lastName: 'Link' },
        { firstName: 'Harry', lastName: 'Potter' }
      ];

      output = GetOnlyLastNames(contacts);
      break;
    case 'unique_numbers':
      confirm("Ingresa 2 listas de números enteros");

      let list1 = prompt("Ingresa la primera lista. Ejemplo: 1,2,5")
        .split(',')
        .map(item => parseInt(item, 10)); 
      let list2 = prompt("Ingresa la segunda lista. Ejemplo: 2,1,6")?.split(',')
        .split(',')
        .map(item => parseInt(item, 10)); 

      output = GetUniqueNumbers(list1, list2);
      break;
    default:
      break;
  }

  result.textContent = output
  return console.log(output);
};
