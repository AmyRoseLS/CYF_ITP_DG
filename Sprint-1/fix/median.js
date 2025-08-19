// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

// if list isn't an array, return null
  if (!Array.isArray(list)) {
    return null;                
  }

// add every Number element from list to a new array called reducedList (ignore elements that aren't numbers, including elements that can be coerced to numbers)
  let reducedList =[];
  list.forEach((element) => {
    if (typeof element === "number") {
      reducedList.push(element);        
    }
  })

// if nothing has been added to reducedList, there must be no numbers in list => return null
  if (reducedList.length == 0) {
    return null;
  }

// sortedList is reducedList in increasing numerical order
  const sortedList = reducedList.toSorted((a, b) => a - b);

// if sortedList has an uneven number of elements, the median is simply the number in the middle
  if (sortedList.length%2 != 0) {
    const middleIndex = Math.floor(sortedList.length / 2);
    const median = sortedList[middleIndex];
    return median;
  }

// if sortedList has an even number of elements, the median is the average of the middle TWO numbers.
  else {
    const upperIndex = sortedList.length/2;
    const lowerIndex = upperIndex - 1;
    const median = (sortedList[lowerIndex]+sortedList[upperIndex])/2;
    return median;
  }
}

module.exports = calculateMedian;
