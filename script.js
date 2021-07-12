var vowels = ["a", "e", "i", "o", "u"];

document.querySelector(".btn").addEventListener("click", function () {
  var counter = 0;
  var includes = [];
  var value = document.querySelector(".input").value;

  var split = value.split("");

  split.forEach((element) => {
    if (vowels.includes(element)) {
      if (!includes.includes(element)) {
        includes.push(element);
      }

      counter++;
    }
  });
  document.querySelector(
    ".answer"
  ).innerHTML = `Your input <b>${value}</b> has a total of ${counter} vowels which are <b>${includes.join(
    ","
  )}</b>`;
});

document.querySelector(".test").addEventListener("click", function () {
  console.log(this);
});
