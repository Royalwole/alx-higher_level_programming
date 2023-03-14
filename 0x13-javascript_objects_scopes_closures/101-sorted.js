#!/usr/bin/node

const dict = require('./101-data.js'); // import the dictionary from the file

const newDict = {}; // initialize the new dictionary

// loop through the keys of the original dictionary
for (const userId in dict) {
  const occurrences = dict[userId]; // get the number of occurrences for this user

  // check if the occurrences are already a key in the new dictionary
  if (newDict[occurrences]) {
    // if yes, add this user to the list of user ids for that occurrence count
    newDict[occurrences].push(userId);
  } else {
    // if not, create a new key in the new dictionary with this occurrence count and add this user to the list of user ids
    newDict[occurrences] = [userId];
  }
}

console.log(newDict); // print the new dictionary

