console.log("globVarInit.js is available");
var topnum = 7;  //will later be used to represent current index
var rando;    //will later be used as a swap index
var temporary;   //will later be used as a temporary holder so we can swap rando and topnum
var myCard = document.getElementsByClassName('card');
//myCard[index] is the same functionality as dom.getClass('card)[index];
var aceChecker = [];
var kingChecker = [];
var queenChecker = [];
var tenChecker = [];
var myArray = [
  'Images/aceheart.png',
  'Images/aceheart.png',
  'Images/kingheart.png',
  'Images/kingheart.png', 
  'Images/queenheart.png',
  'Images/queenheart.png',
  'Images/tenheart.png',
  'Images/tenheart.png'
]; //myArray end. myArray holds image paths as Strings
var cardBack = 'Images/clicker.png';