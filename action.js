// combining and extracting array:

const shoppingCart=["maggi","beans","masala"]
const additionalCart=["matchbox","salt"]

// combine:
let recipe=shoppingCart.concat(additionalCart)

console.log( "combine:",recipe);

// extract:

let extractInfo=recipe.slice(1,3)

console.log("extract:",extractInfo);


// spread operator:

let spread=[...shoppingCart,...additionalCart]

console.log("spread operator:",spread);