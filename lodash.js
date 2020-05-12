const _ = require("lodash");

// .map

const data = [
  {
    name: "Patrick",
    age: "25",
    profile: {
      experience: 2,
    },
  },
  {
    name: "John",
    age: "24",
    profile: {
      experience: 2,
    },
  },
  {
    name: "Teresa",
    age: "26",
    profile: {
      experience: 4,
    },
  },
];

const val = _.map(data, "profile.experience");
console.log(val);
// [ 'Patrick', 'John', 'Teresa' ]

//.find
const users = [
  {
    name: "Patrick",
    age: "25",
    profile: { experience: 3 },
  },
  {
    name: "John",
    age: "24",
    profile: { experience: 2 },
  },
  {
    name: "Teresa",
    age: "26",
    profile: { experience: 4 },
  },
];

const findUser = _.find(users, (user) => user.name === "John");
console.log(findUser);
// { name: 'John', age: '24', profile: { experience: 2 } }

// filter
const filterUsers = _.filter(users, (user) => user.profile.experience > 2);
console.log(filterUsers);

// .keyBy

const usersByName = _.keyBy(users, "name");
console.log(usersByName);

// get
const getExperience = _.get(users[0], "profile.experience", 0);
console.log(getExperience);

// set
const setExperience = _.set(users[2], "profile.experience", 0);
console.log(setExperience);

// deep clone
var original = { foo: "bar" };
var copy = original;
copy.foo = "new value";
console.log(copy, original);

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";

console.log(copy, original);
array = [1, 2, 3, 4];

// .chunk && .compact
const [a, b] = _.chunk(["a", false, "", undefined], 2);
// => [['a', 'b'], ['c', 'd']]
console.log(a, b);
console.log(_.compact(a));
console.log(_.compact(b));

// .concat
var array = [1];
var other = _.concat(array, 2, [3], [[4]], false);
console.log(other);

// difference (?)
console.log(_.difference([2, 4], [3, 5]));
//

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomInteger);
console.log(result);
// result => array of 5 random values
