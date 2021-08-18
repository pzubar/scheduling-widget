const convertElementContentToArray = (element) =>
  element.textContent
    .trim()
    .replace(/\s*\n+\s*/g, '\n')
    .split('\n');


export default convertElementContentToArray
