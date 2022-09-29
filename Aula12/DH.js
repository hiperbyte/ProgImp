// Exercício da função DIGITAL HOUSE

function digitalHouse(num1 = 0, num2 = 0) {
  let dh = "";
  for (i = 1; i <= 100; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      dh = "Digital House";
    } else if (i % num1 == 0 && i % num2 != 0) {
      dh = "Digital";
    } else if (i % num1 != 0 && i % num2 == 0) {
      dh = "House";
    } else {
      dh = i;
    }
    console.log(dh);
  }
  return;
}

digitalHouse(2, 8);
