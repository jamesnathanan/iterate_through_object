/* Using Object.keys()
The Object.keys() function returns an array of the object's own enumerable properties. You can then iterate over each key in the object using forEach().
*/

const obj = {
  name: 'Jean-Luc Picard',
  rank: 'Captain'
};

// Prints "name Jean-Luc Picard" followed by "rank Captain"
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

/* Using Object.values()
The Object.values() function returns an array of the object's own enumerable property values. In other words, it returns an array over the object's values that you can iterate through using forEach().
*/

const obj2 = {
  name: 'Jean-Luc Picard',
  rank: 'Captain'
};

// Prints "Jean-Luc Picard" followed by "Captain"
Object.values(obj2).forEach(val => {
  console.log(val);
});
