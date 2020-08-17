document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    { name: "chips", img: "images/chips.jpg" },

    {
      name: "bread",
      img: "images/bread.jpg",
    },

    {
      name: "burger",
      img: "images/Burger.jpg",
    },

    {
      name: "milkshake",
      img: "images/milkshake.jpg",
    },

    {
      name: "pasta",
      img: "images/Pasta.jpg",
    },

    {
      name: "tea",
      img: "images/Tea.jpg",
    },

    {
      name: "chips",
      img: "images/chips.jpg",
    },

    {
      name: "bread",
      img: "images/bread.jpg",
    },

    {
      name: "burger",
      img: "images/Burger.jpg",
    },

    {
      name: "milkshake",
      img: "images/milkshake.jpg",
    },

    {
      name: "pasta",
      img: "images/Pasta.jpg",
    },

    {
      name: "tea",
      img: "images/Tea.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //   create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/bac.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/bac.jpg");
      cards[optionTwoId].setAttribute("src", "images/bac.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You have found them all!";
    }
  }

  //   flip your card

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
