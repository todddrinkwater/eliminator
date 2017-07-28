//Display Foods

//Create and object listing food types as the key, and array of those foods as the value
//Order each array into a food catergory in an object
//Map through foods creating seperate component card for each food

function food(name, type, containsGluten){
  this.name = name;
  this.type = type;
  this.containsGluten = containsGluten;
}

var foods = { }
Object.assign(foods, new food('apple', 'fruit', false))
Object.assign(foods, new food('banana', 'fruit', false))



foods = {
  fruit: ['apples', 'bananas', 'carrots'],
  vegetables: ['brocolli', 'cauliflower'],
  cereals: ['cornflakes', 'rice bubbles']
}

function displayFoods(foods){
  for(foodType in foods){
    foodType.map( (food) => {
      console.log(food);
    })
  }
}

displayFoods(foods)

//
