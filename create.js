const cards = [
  { value: 1, item: "banana" },
  { value: 2, item: "banana" },
  { value: 3, item: "apple" },
  { value: 4, item: "apple" },
  { value: 5, item: "carrot" },
  { value: 6, item: "carrot" },
  { value: 7, item: "pear" },
  { value: 8, item: "pear" },
  { value: 9, item: "strawberry" },
  { value: 10, item: "strawerry" },
  { value: 11, item: "cherry" },
  { value: 12, item: "cherry" },
  { value: 13, item: "watermelon" },
  { value: 14, item: "watermelon" },
  { value: 15, item: "orange" },
  { value: 16, item: "orange" }
];

const choiceOne = []
const choiceTwo = []

const foundCards = []

//issue: you can only display one card at a time that is viewable to the user, if the second card is clicked there is no delay to hide it

//create a card for each item and display on page attached to a button
//start the card face down but still linked to there item
//display the card item as a string once they are clicked (using the button attached)
//add the first item clicked into an array called choice one
//add the second item clicked into an array called choice two
//if display 1 = display 2 , then keep the card item displayed
//push the 2 items into a new array called foundCards
// if the cards are already displayed ignore
//else hide the cards again, clear last item in choice one array and choice two array
//if foundCards.length = cards.length display you win on a div

document.getElementById