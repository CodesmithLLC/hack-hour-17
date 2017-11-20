/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName (jazbook, name) {
  for (let entry of jazbook) {
    if (entry[0] === name) {
      return entry[1];
    }
  }
  return false;
}

// return an object literal representing the jazbook
// class makePhoneBookObject {
//   constructor (jazbook) {
//     this.phonebook = {};
//     for (let entry of jazbook) {
//       this.phonebook[entry[0]] = entry[1];
//     }
//   }

//   add (name, number) {
//     this.phonebook[name] = number;
//   }

//   remove (name) {
//     delete this.phonebook[name];
//   }

//   find (name) {
//     return this.phonebook[name];
//   }
// }

function makePhoneBookObject (jazbook) {
  const phonebook = {};
  for (let entry of jazbook) {
    phonebook[entry[0]] = entry[1];
  }
  return phonebook;
}

// const jazbook = [
// ['alex', '301-844-3421'],
// ['jae', '301-844-1211'],
// ['david', '301-844-0978'],
// ['travis', '301-844-8505'],
// ['jasmine', '1800-974-4539']
// ];

// console.log(findName(jazbook, 'jasmine'));
// const phonebook = new makePhoneBookObject(jazbook);
// console.log(phonebook);

const objectToExport = {
  findName,
  makePhoneBookObject
};

module.exports = objectToExport;
