const oneOf = function (list = [], target) {
  return list.some(item => item === target);
}

export default oneOf;
