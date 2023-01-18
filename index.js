const leastStairValue = function(stairs) {
    // Start with initial value = 1. 
    let initialValue = 1;
  
    // loop until we find the value we need (a value is always found)
    while (true) {
        // we build a total starting at our currentInitial value
        let total = initialValue;
        // we set tracker that will stop loop if the resultant of steps so far have have gone below 1
        isValid = true;
  
        // Iterate over the array "nums".
        for (const stair of stairs) {
            // In each iteration, calculate "total" 
            // add the current step in stairs.
            total += stair;
  
            // If "total" is less than 1, we shall try a larger initi al step value,
            // we mark "isValid" as "false" and break the current iteration.
            if (total < 1) {
                isValid = false;
                break;
            }
        }
        // at this point "isVaild" is true, meaning "total" is never less than 1 in the
        // iteration, therefore we return this "initialValue". Otherwise,increment the value and try a step higher
        if (isValid) {
            return initialValue;
        } else {
            initialValue += 1;
        }      
    }
  };
  
  
  console.log(leastStairValue([1,-4,-2,3])); // 6
  console.log(leastStairValue([-5,4,-2,3,1,-1,-6, -1, 0, 5]))
  console.log(leastStairValue([10,-5,4,-2,3,1,-1,-6,-1,0,5])) /