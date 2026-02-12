/**
 * Asynchronous Programming Demo
 * Examples of callbacks, promises, and async/await patterns
 */

  const validId = 0; // Constant to check if id is valid and avoid magic numbers

// ============================================
// 1. CALLBACKS
// ============================================

/**
 * Simulates fetching user data with a callback
 * @param {number} userId - User ID to fetch
 * @param {function} callback - Callback function (error, data)
 */
function fetchUserCallback(userId, callback) {
  console.log(`Fetching user ${userId}...`);

  // Simulate network delay with setTimeout
  setTimeout(() => {
    // TODO: Complete this callback example
    // Hint: Call the callback with (null, userData) for success
    // or (error, null) for failure
    if (userId > validId) {
      const userData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      callback(null, userData);
      // Call callback with success data
    } else {
      callback(new Error(), null);  
      // Call callback with error
    }
  }, 1000);
}

/**
 * Demonstrates callback pattern
 */
function demonstrateCallbacks() {
  console.log('\n=== Callback Demo ===');
  fetchUserCallback(0, (error, userData) => {
    if (error){
      console.log(error);
    } else {
      console.log(userData);
    }
  });
  // TODO: Call fetchUserCallback and handle the result
  // Hint: Pass a callback function that logs the result or error
}

// ============================================
// 2. PROMISES
// ============================================

/**
 * Simulates fetching user data with a Promise
 * @param {number} userId - User ID to fetch
 * @returns {Promise} Promise that resolves with user data
 */
function fetchUserPromise(userId) {
  console.log(`Fetching user ${userId}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Complete this promise example
      // Hint: Use resolve(userData) for success
      // Use reject(error) for failure

      if (userId > validId) {
        const userData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        };
        resolve(userData)
        // Resolve with user data
      } else {
        reject(new Error());
        // Reject with error
      }
    }, 1000);
  });
}

/**
 * Demonstrates promise pattern with .then() and .catch()
 */
function demonstratePromises() {
  console.log('\n=== Promise Demo ===');
  // TODO: Call fetchUserPromise and chain .then() and .catch()
  // Hint: Use .then() to handle success and .catch() to handle errors
  // Log the results to console
  const promise = fetchUserPromise(1).then(success => {
    console.log(success);
  }).catch(errors => {
    console.log(errors);
  })
}

// ============================================
// 3. ASYNC/AWAIT
// ============================================

/**
 * Creates a delay using promises
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside a Promise
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    }, ms);
  });
}

/**
 * Fetches multiple users sequentially using async/await
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchMultipleUsers(userIds) {
  // TODO: Implement this using async/await
  // Hint: Use a loop and await fetchUserPromise for each ID
  // Use try/catch to handle errors
  // Return an array of all user data

  const userList = [];

  try{
    for (const id of userIds){
      let user = await fetchUserPromise(id);
      userList.push(user);
    }
    return userList;
  } catch (error){
    console.error(error);
    throw error;
  }
  
}

/**
 * Demonstrates async/await pattern
 */
async function demonstrateAsyncAwait() {
  console.log('\n=== Async/Await Demo ===');
  // TODO: Call fetchMultipleUsers with an array of user IDs
  // Use try/catch to handle any errors
  // Log the results
  try {
    const userList = await fetchMultipleUsers([1,2,0]);
    console.log("Success.", userList);
  } catch (error) {
    console.log("Failed.");
  }
  

}

// ============================================
// BONUS: Promise.all()
// ============================================

/**
 * Fetches multiple users in parallel using Promise.all()
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchUsersParallel(userIds) {
  // TODO: Implement this using Promise.all()
  // Hint: Map userIds to promises, then use Promise.all()
  // This is faster than sequential fetching!
  const promiseArray = userIds.map(fetchUserPromise);
  return await Promise.all(promiseArray);
}

// Export functions
export {
  fetchUserCallback,
  demonstrateCallbacks,
  fetchUserPromise,
  demonstratePromises,
  delay,
  fetchMultipleUsers,
  demonstrateAsyncAwait,
  fetchUsersParallel,
};
