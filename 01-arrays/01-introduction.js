const strings = ["a", "b", "c", "d"];

//O(1)
strings.push("e");

//O(1)
strings.pop();

//O(n)
strings.unshift("x");

//O(n)
strings.splice(2, 0, "z");

console.log(strings);
