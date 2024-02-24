let noCount = 0;

const yesButtonSize = () => noCount * 20 + 16;

const handleNoClick = () => {
  noCount++;
  updateNoButtonText();
  updateYesButtonSize();
};

const getNoButtonText = () => {
  const phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely?",
    "PLEASE",
    "Pretty please",
    "With a chocolate rice cake on top",
    "What about a brown sugar milk tea",
    "No matcha",
    "But :*(",
    "I am going to die",
    "Yep im dead",
    "ok ur talking to Kevin's ghost",
    "DED",
    "Really DED",
    "My soul is weeping",
    "please babe",
    "WHYYYYYYYY",
    ":((((",
    "PRETTY PLEASE",
    "Estoy muerto",
    "por qué",
    "No :(",
  ];

  return phrases[Math.min(noCount, phrases.length - 1)];
};

const updateNoButtonText = () => {
  const noButton = document.getElementById("no-button");
  noButton.innerText = noCount === 0 ? "No" : getNoButtonText();
};

const hideNoButton = () => {
  const noButton = document.getElementById("no-button");
  noButton.style.display = "none";
};

const updateYesButtonSize = () => {
  const yesButton = document.getElementById("yes-button");
  yesButton.style.fontSize = `${yesButtonSize()}px`;
};

const handleYesClick = () => {
  hideNoButton();
  document.getElementById("gif").src =
    "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  document.getElementById("question").innerText = "WOOOOOO!!! I love you!! ;))";
};

document.getElementById("yes-button").addEventListener("click", handleYesClick);

document.getElementById("no-button").addEventListener("click", handleNoClick);
updateNoButtonText();
