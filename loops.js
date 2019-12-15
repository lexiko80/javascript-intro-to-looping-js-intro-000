var forLoop = (stringArray) => {
  for(let i = 0; i < 25; i++) {
    if (i == 1) {
      stringArray.push('I am 1 strange loop.')
    else {
      stringArray.push('I am ${i} strange loops.')
    }
    }
  }
}
