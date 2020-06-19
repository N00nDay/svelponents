export default function typeOf(obj) {
  return {}.toString.call(obj).split(" ")[1].slice(0, -1).toLowerCase();
}

// string
// object
// number
// boolean
// function
// array
