function removeItems(list) {
  if (list.length === 0) {
    throw new Error("Input list is empty");
  }

  list.split(" ").map((item) => {
    if (isNaN(item)) {
      throw new Error("List contains non-integer values");
    }
  });
  list = list.split(" ").map((item) => {
    return parseInt(item);
  });

  if (list.length % 10 !== 0) {
    throw new Error("List is not a multiple of 10 in length");
  }

  return list.filter((item, index) => {
    return (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0;
  });
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a list of integers: ", (list) => {
  try {
    const result = removeItems(list);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    readline.close();
  }
});

module.exports = {
  removeItems,
};
