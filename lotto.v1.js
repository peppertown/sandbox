// 번호를 추첨함
// 그 번호는 될리가 없으니 그 번호를 빼고 다시 추첨함
// 그 추첨한 번호를 한번 더 뺄까말까 결정함
// 안뺀다면 거기서 추첨함
// 번호를 뺀다면 한번 더 빼고 추첨함

const getNumbers = () => {
  let numbers = Array.from({ length: 45 }, (_, i) => i + 1);
  let targets = drawNumbers(numbers);
  numbers = filtering(numbers, targets);
  console.log("--------------- 남은 번호 목록 --------------");
  console.log(numbers);
  console.log("-------------------------------------------");

  const choice = ["yes", "no"];
  const answer = choice[Math.floor(Math.random() * 2)];

  let winningNumbers;

  console.log(`
    번호를 추가적으로 제외 할까요? ${answer}
    `);
  if (answer == "yes") {
    targets = drawNumbers(numbers);
    numbers = filtering(numbers, targets);
    console.log("--------------- 남은 번호 목록 --------------");
    console.log(numbers);
    console.log("-------------------------------------------");
  }
  winningNumbers = drawNumbers(numbers);

  winningNumbers = Array.from(winningNumbers).sort((a, b) => a - b);
  console.log(`
    ********행운의 번호********`);
  console.log(`
         ${winningNumbers}`);
  console.log(`
    ************************`);
};

const filtering = (array, targets) => {
  console.log("----------제외된 번호 목록----------");
  console.log(targets);
  console.log("--------------------------------");
  return array.filter((num) => !targets.has(num));
};

const drawNumbers = (numbers) => {
  const lottery = new Set();
  while (lottery.size < 6) {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    lottery.add(numbers[randomNumber]);
  }
  return lottery;
};

getNumbers();
