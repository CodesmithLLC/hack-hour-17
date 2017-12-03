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

const findName = function(jazbook, name) {
  const contact = jazbook.find(elem => elem[0] === name);
  return contact ? contact[1] : false;
};

class Phonebook {
  constructor(jazbook) {
    jazbook.forEach(contact => this.add(contact));
  }

  add([name, number]) {
    this[name] = number;
  }

  remove(name) {
    if (this[name]) delete this[name];
  }
}

const objectToExport = {
  findName,
  makePhoneBookObject: (jazbook) => new Phonebook(jazbook)
};

module.exports = objectToExport;