const imgEl = document.querySelector("img");
const btnEl = document.querySelector("button");
console.log(btnEl);

console.log(imgEl);

// from 1 to 6 random number
function getRandom6() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomUrl() {
  //                  0      1        2       3     4        5
  const numWords = ["one", "two", "three", "four", "five", "six"];
  const rn = getRandom6() - 1; // 0 - 5
  // rn can be from 1 to 6
  // we want from 0 to 5 as our indicies
  //   console.log(numWords[rn]);

  const url = `assets/dice-${numWords[rn]}.png`;
  return url;
}

imgEl.src = getRandomUrl();

btnEl.addEventListener("click", function () {
  console.log("hi");
  imgEl.src = getRandomUrl();
});
