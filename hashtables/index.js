function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }

  return undefined;
} // O(n^2)

firstRecurringCharacter([1, 2, 3, 4, 5, 1]);

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map[2]);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
}

firstRecurringCharacter2([2, 5, 1, 2, 4, 3, 2]);
