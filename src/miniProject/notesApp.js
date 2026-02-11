/**
 * Notes App - Mini Project
 * A simple CRUD (Create, Read, Update, Delete) application for managing notes
 * This demonstrates practical JavaScript skills with arrays and objects
 */

// In-memory storage for notes (array of note objects)
let notes = [];
let nextId = 1; // Auto-incrementing ID for new notes
const today = new Date(); // For getting the date today

/**
 * Note Object Structure:
 * {
 *   id: number,
 *   title: string,
 *   content: string,
 *   createdAt: Date,
 *   updatedAt: Date
 * }
 */

// ============================================
// CREATE
// ============================================

/**
 * Adds a new note
 * @param {string} title - Note title
 * @param {string} content - Note content
 * @returns {object} The created note object
 */
function addNote(title, content) {
  // TODO: Implement addNote
  // Steps:
  // 1. Create a new note object with id, title, content, createdAt, updatedAt
  // 2. Use nextId for the id, then increment it
  // 3. Set both createdAt and updatedAt to current date (new Date())
  // 4. Push the note to the notes array
  // 5. Return the created note
  let newNote = null;
  if (title === "" || content === ""){
    throw new Error("Missing fields.");// ensure title and content are not empty strings
  } else {
      newNote = {
      id : nextId,
      title : title,
      content : content,
      createdAt : today,
      updatedAt : today
    }
    notes.push(newNote);
    nextId += 1;
  }
  return newNote;
}

// ============================================
// READ
// ============================================

/**
 * Gets all notes
 * @returns {Array} Array of all notes
 */
function getAllNotes() {
  // TODO: Implement getAllNotes
  // Hint: Return a copy of the notes array to prevent external modification
  // You can use the spread operator [...notes] or notes.slice()
  return [...notes];
}

/**
 * Gets a note by ID
 * @param {number} id - Note ID
 * @returns {object|null} The note object or null if not found
 */
function getNoteById(id) {
  // TODO: Implement getNoteById
  // Hint: Use the find() method to search the notes array
  // Return the found note or null
  const note = notes.find(note => note.id === id) || null;
  return note;
}

/**
 * Searches notes by keyword in title or content
 * @param {string} keyword - Search keyword
 * @returns {Array} Array of matching notes
 */
function searchNotes(keyword) {
  // TODO: Implement searchNotes
  // Hint: Use filter() to find notes where title or content includes the keyword
  // Consider converting to lowercase for case-insensitive search
  // Return array of matching notes (empty array if none found)
  keyword = keyword.toLowerCase();
  const noteFound = notes.filter(note => note.title.toLowerCase().includes(keyword) || note.content.toLowerCase().includes(keyword));
  return noteFound;
}

// ============================================
// UPDATE
// ============================================

/**
 * Updates an existing note
 * @param {number} id - Note ID to update
 * @param {string} newTitle - New title (optional)
 * @param {string} newContent - New content (optional)
 * @returns {object|null} The updated note or null if not found
 */
function updateNote(id, newTitle, newContent) {
  // TODO: Implement updateNote
  // Steps:
  // 1. Find the note by id
  // 2. If not found, return null
  // 3. Update title if newTitle is provided
  // 4. Update content if newContent is provided
  // 5. Update the updatedAt timestamp to current date
  // 6. Return the updated note
  const note = getNoteById(id);
  if (note != null){
    if (newTitle != ""){
      note.title = newTitle;
    }

    if (newContent != ""){
      note.content = newContent;
    }
    note.updatedAt = today;
  }
  return note
}

// ============================================
// DELETE
// ============================================

/**
 * Deletes a note by ID
 * @param {number} id - Note ID to delete
 * @returns {boolean} True if deleted, false if not found
 */
function deleteNote(id) {
  // TODO: Implement deleteNote
  // Hint: Use findIndex() to locate the note, then splice() to remove it
  // Return true if deleted, false if note wasn't found
  const index = notes.findIndex(note => note.id === id);
  if (index >= 0){
    notes.splice(index, 1);
    return true
  }
  return false;
}

/**
 * Deletes all notes (use with caution!)
 * @returns {number} Number of notes deleted
 */
function deleteAllNotes() {
  // TODO: Implement deleteAllNotes
  // Steps:
  // 1. Store the current count of notes
  // 2. Clear the notes array
  // 3. Reset nextId to 1
  // 4. Return the count of deleted notes
  const noteCount = getNotesCount();
  notes.splice(0, noteCount);
  nextId = 1;
  return noteCount;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Gets the total count of notes
 * @returns {number} Number of notes
 */
function getNotesCount() {
  // TODO: Implement getNotesCount
  // Hint: Return the length of the notes array
  const notesCount = notes.length;
  return notesCount;
}

/**
 * Gets notes sorted by creation date
 * @param {boolean} ascending - Sort order (true for oldest first, false for newest first)
 * @returns {Array} Sorted array of notes
 */
function getNotesSortedByDate(ascending = false) {
  // TODO: Implement getNotesSortedByDate
  // Hint: Create a copy of notes array, then use sort() with a compare function
  // Compare createdAt dates
  // Return the sorted array
  const sortedNotes = getAllNotes();
  if (ascending){
    sortedNotes.sort((note1, note2) => note2 - note1);
  }
  else {
    sortedNotes.sort((note1, note2) => note1 - note2);
  }
  return sortedNotes
}

// Export all functions
export {
  addNote,
  getAllNotes,
  getNoteById,
  searchNotes,
  updateNote,
  deleteNote,
  deleteAllNotes,
  getNotesCount,
  getNotesSortedByDate,
};
