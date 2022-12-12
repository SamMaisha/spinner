const spinnerPosition = ['\r|  ', '\r/  ', '\r--  ', '\r\\  ', '\r|  ', '\r/  ', '\r--  ', '\r\\  ', '\r|  ']

let timer = 100;

for (const char of spinnerPosition) {
  setTimeout(() => {
    process.stdout.write(char)
  }, timer)
  timer += 200;
}









