const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
  "Goat Butter",
  "Fresh Milk",
  "Cane Sugar",
  "Raw Bird Thigh",
]
const meals = []

// What should the parameter(s) for the cook function be to account for any number of ingredients?
// How do we pass in the specific ingredients to the function?
// How can we check for the specific ingredients?

// const cook = (ingredients[0], ingredients[1]) => {
const cook = (ingredientsArray) => {
  if (
    ingredientsArray.includes("Hylian Rice") &&
    ingredientsArray.includes("Big Hearty Truffle")
  ) {
    meals.push("Mushroom Rice Balls")
  }
  if (
    ingredientsArray.includes("Hateno Cheese") &&
    ingredientsArray.includes("Bird Egg")
  ) {
    meals.push("Cheesy Omlette")
  }
  if (
    ingredientsArray.includes("Tabantha Wheat") &&
    ingredientsArray.includes("Hateno Cheese")
  ) {
    meals.push("Cheesy Hylian Pizza")
  }
  if (
    ingredientsArray.includes("Raw Prime Meat") &&
    ingredientsArray.includes("Hylian Rice")
  ) {
    meals.push("Prime Meat and Rice Bowl")
  }
  if (
    ingredientsArray.includes("Fresh Milk") &&
    ingredientsArray.includes("Cane Sugar") &&
    ingredientsArray.includes("Bird Egg")
  ) {
    meals.push("Egg Pudding")
  }
}

cook([materials[1], materials[0]])
cook([materials[5], materials[4]])
cook([materials[2], materials[4]])
cook([materials[3], materials[0]])
cook([materials[7], materials[8], materials[5]])

console.log("MEALS:")
console.log("---------------")
for (const meal of meals) {
  console.log(meal)
}
