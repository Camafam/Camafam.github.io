window.onload = function() {
  document.getElementById("stoneRibbon").innerHTML = stone;
  document.getElementById("woodRibbon").innerHTML = wood;
  document.getElementById("ironRibbon").innerHTML = iron;
  document.getElementById("copperRibbon").innerHTML = copper;
  document.getElementById("oilRibbon").innerHTML = oil;
};

var stone = 0;

function stoneClick(number) {
  stone = stone + number;
  document.getElementById("stone").innerHTML = stone;
  document.getElementById("stoneRibbon").innerHTML = stone;
  document.getElementById("woodRibbon").innerHTML = wood;
  document.getElementById("ironRibbon").innerHTML = iron;
  document.getElementById("copperRibbon").innerHTML = copper;
  document.getElementById("oilRibbon").innerHTML = oil;
};

var stoneMine = 0;

function buyStoneMine() {
  var stoneMineCost = Math.floor(10 * Math.pow(1.1, stoneMine)); //works out the cost of this cursor
  if (stone >= stoneMineCost && wood >= stoneMineCost) { //checks that the player can afford the cursor
    stoneMine = stoneMine + 1; //increases number of cursors
    stone = stone - stoneMineCost; //removes the cookies spent
    wood = wood - stoneMineCost;
    document.getElementById('stoneMine').innerHTML = stoneMine; //updates the number of cursors for the user
    document.getElementById('stone').innerHTML = stone; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, stoneMine)); //works out the cost of the next cursor
  document.getElementById('stoneMineCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('stoneMineCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  stoneClick(stoneMine);

}, 1000);

var stoneBot = 0;

function buyStoneBot() {
  var stoneBotCost = Math.floor(10 * Math.pow(1.1, stoneBot)); //works out the cost of this cursor
  if (copper >= stoneBotCost && iron >= stoneBotCost && oil >= stoneBotCost) { //checks that the player can afford the cursor
    stoneBot = stoneBot + 1; //increases number of cursors
    copper = copper - stoneBotCost; //removes the cookies spent
    iron = iron - stoneBotCost;
    oil = oil - stoneBotCost;
    document.getElementById('stoneBot').innerHTML = stoneBot; //updates the number of cursors for the user
    document.getElementById('stone').innerHTML = stone; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, stoneBot)); //works out the cost of the next cursor
  document.getElementById('stoneBotCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('stoneBotCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  stoneClick(stoneBot);

}, 1000);

var wood = 0;

function woodClick(number) {
  wood = wood + number;
  document.getElementById("wood").innerHTML = wood;
  document.getElementById("stoneRibbon").innerHTML = stone;
  document.getElementById("woodRibbon").innerHTML = wood;
  document.getElementById("ironRibbon").innerHTML = iron;
  document.getElementById("copperRibbon").innerHTML = copper;
  document.getElementById("oilRibbon").innerHTML = oil;
};

var woodMine = 0;

function buyWoodMine() {
  var woodMineCost = Math.floor(10 * Math.pow(1.1, woodMine)); //works out the cost of this cursor
  if (stone >= woodMineCost && wood >= woodMineCost) { //checks that the player can afford the cursor
    woodMine = woodMine + 1; //increases number of cursors
    stone = stone - woodMineCost; //removes the cookies spent
    wood = wood - woodMineCost;
    document.getElementById('woodMine').innerHTML = woodMine; //updates the number of cursors for the user
    document.getElementById('wood').innerHTML = wood; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;

  };
  var nextCost = Math.floor(10 * Math.pow(1.1, woodMine)); //works out the cost of the next cursor
  document.getElementById('woodMineCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('woodMineCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  woodClick(woodMine);

}, 1000);

var woodBot = 0;

function buyWoodBot() {
  var woodBotCost = Math.floor(10 * Math.pow(1.1, woodBot)); //works out the cost of this cursor
  if (copper >= woodBotCost && iron >= woodBotCost && oil >= woodBotCost) { //checks that the player can afford the cursor
    woodBot = woodBot + 1; //increases number of cursors
    copper = copper - woodBotCost; //removes the cookies spent
    iron = iron - woodBotCost;
    oil = oil - woodBotCost;
    document.getElementById('woodBot').innerHTML = woodBot; //updates the number of cursors for the user
    document.getElementById('wood').innerHTML = stone; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;


  };
  var nextCost = Math.floor(10 * Math.pow(1.1, woodBot)); //works out the cost of the next cursor
  document.getElementById('woodBotCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('woodBotCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  woodClick(woodBot);

}, 1000);

var iron = 0;

function ironClick(number) {
  iron = iron + number;
  document.getElementById("iron").innerHTML = iron;
  document.getElementById("ironRibbon").innerHTML = iron;
};

var ironMine = 0;

function buyIronMine() {
  var ironMineCost = Math.floor(10 * Math.pow(1.1, ironMine)); //works out the cost of this cursor
  if (stone >= ironMineCost && wood >= ironMineCost) { //checks that the player can afford the cursor
    ironMine = ironMine + 1; //increases number of cursors
    stone = stone - ironMineCost; //removes the cookies spent
    wood = wood - ironMineCost;
    document.getElementById('ironMine').innerHTML = ironMine; //updates the number of cursors for the user
    document.getElementById('wood').innerHTML = wood; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, ironMine)); //works out the cost of the next cursor
  document.getElementById('ironMineCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('ironMineCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  ironClick(ironMine);

}, 1000);

var ironBot = 0;

function buyIronBot() {
  var ironBotCost = Math.floor(10 * Math.pow(1.1, ironBot)); //works out the cost of this cursor
  if (copper >= ironBotCost && iron >= ironBotCost && oil >= ironBotCost) { //checks that the player can afford the cursor
    ironBot = ironBot + 1; //increases number of cursors
    copper = copper - ironBotCost; //removes the cookies spent
    iron = iron - ironBotCost;
    oil = oil - ironBotCost;
    document.getElementById('ironBot').innerHTML = ironBot; //updates the number of cursors for the user
    document.getElementById('iron').innerHTML = stone; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, ironBot)); //works out the cost of the next cursor
  document.getElementById('ironBotCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('ironBotCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  ironClick(ironBot);

}, 1000);

var copper = 0;

function copperClick(number) {
  copper = copper + number;
  document.getElementById("copper").innerHTML = copper;
  document.getElementById("copperRibbon").innerHTML = copper;
};

var copperMine = 0;

function buyCopperMine() {
  var copperMineCost = Math.floor(10 * Math.pow(1.1, copperMine)); //works out the cost of this cursor
  if (stone >= copperMineCost && wood >= copperMineCost) { //checks that the player can afford the cursor
    copperMine = copperMine + 1; //increases number of cursors
    stone = stone - copperMineCost; //removes the cookies spent
    wood = wood - copperMineCost;
    document.getElementById('copperMine').innerHTML = copperMine; //updates the number of cursors for the user
    document.getElementById('wood').innerHTML = wood; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, copperMine)); //works out the cost of the next cursor
  document.getElementById('copperMineCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('copperMineCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  copperClick(copperMine);

}, 1000);

var copperBot = 0;

function buyCopperBot() {
  var copperBotCost = Math.floor(10 * Math.pow(1.1, copperBot)); //works out the cost of this cursor
  if (copper >= copperBotCost && iron >= copperBotCost && oil >= copperBotCost) { //checks that the player can afford the cursor
    copperBot = copperBot + 1; //increases number of cursors
    copper = copper - copperBotCost; //removes the cookies spent
    iron = iron - copperBotCost;
    oil = oil - copperBotCost;
    document.getElementById('copperBot').innerHTML = copperBot; //updates the number of cursors for the user
    document.getElementById('copper').innerHTML = copper; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, copperBot)); //works out the cost of the next cursor
  document.getElementById('copperBotCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('copperBotCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  copperClick(copperBot);

}, 1000);

var oil = 0;

function oilClick(number) {
  oil = oil + number;
  document.getElementById("oil").innerHTML = oil;
  document.getElementById("oilRibbon").innerHTML = oil;
};

var oilMine = 0;

function buyOilMine() {
  var oilMineCost = Math.floor(10 * Math.pow(1.1, oilMine)); //works out the cost of this cursor
  if (stone >= oilMineCost && wood >= oilMineCost) { //checks that the player can afford the cursor
    oilMine = oilMine + 1; //increases number of cursors
    stone = stone - oilMineCost; //removes the cookies spent
    wood = wood - oilMineCost;
    document.getElementById('oilMine').innerHTML = oilMine; //updates the number of cursors for the user
    document.getElementById('wood').innerHTML = wood; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, oilMine)); //works out the cost of the next cursor
  document.getElementById('oilMineCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('oilMineCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  oilClick(oilMine);

}, 1000);

var oilBot = 0;

function buyOilBot() {
  var oilBotCost = Math.floor(10 * Math.pow(1.1, oilBot)); //works out the cost of this cursor
  if (copper >= oilBotCost && iron >= oilBotCost && oil >= oilBotCost) { //checks that the player can afford the cursor
    oilBot = oilBot + 1; //increases number of cursors
    copper = copper - oilBotCost; //removes the cookies spent
    iron = iron - oilBotCost;
    oil = oil - oilBotCost;
    document.getElementById('oilBot').innerHTML = oilBot; //updates the number of cursors for the user
    document.getElementById('oil').innerHTML = oil; //updates the number of cookies for the user
    document.getElementById("stoneRibbon").innerHTML = stone;
    document.getElementById("woodRibbon").innerHTML = wood;
    document.getElementById("ironRibbon").innerHTML = iron;
    document.getElementById("copperRibbon").innerHTML = copper;
    document.getElementById("oilRibbon").innerHTML = oil;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, oilBot)); //works out the cost of the next cursor
  document.getElementById('oilBotCost').innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById('oilBotCost1').innerHTML = nextCost; //updates the cursor cost for the user

};

window.setInterval(function() {

  oilClick(oilBot);

}, 1000);
