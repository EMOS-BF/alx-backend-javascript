export default function appendToEachArrayValue(array, appendString) {
  let newarray = []
  for (let idx of array) {
    let value = idx;
    newarray.push(appendString + value);
  }

  return newarray;
}
