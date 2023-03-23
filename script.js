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