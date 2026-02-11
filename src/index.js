/**
 * Week 1 - Main Entry Point
 * This file demonstrates how to import and use the utility functions
 * and the notes app you'll be building.
 */

// Import utility functions
import * as math from './utils/math.js';
import * as strings from './utils/strings.js';
import * as asyncDemo from './utils/asyncDemo.js';
import * as notesApp from './miniProject/notesApp.js';

console.log('=== Week 1: Git & JavaScript Starter ===\n');

// ============================================
// Part 1: Math Utilities Demo
// ============================================
console.log('--- Math Utilities ---');

// TODO: Uncomment and test these once you implement the math functions
console.log('5 + 3 =', math.add(5, 3));
console.log('10 - 4 =', math.subtract(10, 4));
console.log('6 * 7 =', math.multiply(6, 7));
console.log('20 / 4 =', math.divide(20, 4));
console.log('2^8 =', math.power(2, 8));

// console.log('(Math functions not yet implemented)\n');

// ============================================
// Part 2: String Utilities Demo
// ============================================
console.log('--- String Utilities ---');

// TODO: Uncomment and test these once you implement the string functions
console.log('Capitalize "helloo" =', strings.capitalize('helloo'));
console.log('Reverse "javascript" =', strings.reverse('javascript'));
console.log('Is "racecar" a palindrome?', strings.isPalindrome('racecar'));
console.log('Word count in "Hello World" =', strings.wordCount('Hello World'));

// console.log('(String functions not yet implemented)\n');

// ============================================
// Part 3: Async Programming Demo
// ============================================
console.log('--- Async Programming ---');

// TODO: Uncomment and test the async demos once implemented
asyncDemo.demonstrateCallbacks();
asyncDemo.demonstratePromises();
asyncDemo.demonstrateAsyncAwait();

// console.log('(Async demos not yet implemented)\n');

// ============================================
// Part 4: Notes App Demo
// ============================================
console.log('--- Notes App Mini Project ---');

// TODO: Uncomment these once you implement the notes app
const note1 = notesApp.addNote('Learn JavaScript', 'Complete all exercises in week 1');
const note2 = notesApp.addNote('Practice Git', 'Work through merge conflict scenarios');
console.log('All notes:', notesApp.getAllNotes());
console.log('Find note 1:', notesApp.getNoteById(1));
notesApp.updateNote(1, 'Learn JavaScript Basics', 'Focus on functions and arrays');
console.log('Updated notes:', notesApp.getAllNotes());
notesApp.deleteNote(2);
console.log('After deletion:', notesApp.getAllNotes());

// console.log('(Notes app not yet implemented)\n');

// ============================================
// Your Experimentation Space
// ============================================
console.log('--- Your Code Here ---');
// TODO: Use this space to experiment and test your code
// For example:
// - Try different function inputs
// - Test edge cases
// - Combine multiple functions together

console.log("Other tests for Math Utilities");
try {
  console.log("5 / 0", math.divide(5, 0));
} catch (err) {
  console.log(err.message);
}
console.log("\nOther tests for Strings Utilities");
console.log("Capitalize (empty string) =", strings.capitalize(""));
console.log('Is "laptop" a palindrome?', strings.isPalindrome("laptop"));
console.log('Word count in " be alive " =', strings.wordCount(" be alive "));

console.log("\nOther tests for Notes App");
try {
  const note3 = notesApp.addNote("", "Finish task.");
} catch (err) {
  console.log(err.message);
}
console.log("All notes:", notesApp.getAllNotes());
let updatedNote = notesApp.updateNote(0, "Testing", "Notes");
if (updatedNote) console.log("Updated.");
else console.log("Not found.");
console.log('Find note 0:', notesApp.getNoteById(0));
updatedNote = notesApp.updateNote(1, "Testing", "Notes");
console.log("All notes after update:", notesApp.getAllNotes());
notesApp.deleteAllNotes();
console.log("All notes after deletion:", notesApp.getAllNotes());
const note4 = notesApp.addNote("Watch", "Harry Potter");
const note5 = notesApp.addNote("Drink", "Water");
console.log("Number of notes: ", notesApp.getNotesCount());
console.log("Unsorted notes: ", notesApp.getAllNotes());
console.log("Ascending notes: ", notesApp.getNotesSortedByDate());
console.log("Descending notes: ", notesApp.getNotesSortedByDate(true));
console.log('\n=== Keep coding! ===');
