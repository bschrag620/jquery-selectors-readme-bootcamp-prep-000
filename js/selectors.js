// declare your functions here...
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('div.pics')
}

function firstListItem() {
  console.log($('div.pics ul#pic-list:first-child'))
  return $('ul#pic-list:first-child')
}