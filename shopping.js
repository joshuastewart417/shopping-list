const list = [
{
    foodType:"milk",
    price:2,
    id:1,
},
{
    foodType:"eggs",
    price:3,
    id:2,
},
{
    foodType:"pizza rolls",
    price:6,
    id:3,
},
{
    foodType:"chicken",
    price:8,
    id:4,
},
{
    foodType:"pineapple",
    price:3,
    id:5,
},
{
    foodType:"Sandwich buns",
    price:2.50,
    id:6,
},
{
    foodType:"mustard",
    price:3.50,
    id:7,
}

]

const addToShoppingList = (listObject) => {
    const lastIndex = list.length - 1
    const currentLastItem = list[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    listObject.id = idForNewItem
    list.push(listObject) 
}

const garlicSalt = {
    foodType:"garlicsalt",
    price:4,
    dateCreated:"02-6-2021"
}

const pizza = {
    foodType:"digiornospizza",
    price:9,
    dateCreated:"02-6-2021"
}

const lemonade = {
    foodType:"lemonade",
    price:6,
    dateCreated:"02-6-2021"
}

const spinach = {
    foodType:"spinach",
    price:4.50,
    dateCreated:"02-6-2021"
}

const cookies = {
    foodType:"biscoffcookies",
    price:5.50,
    dateCreated:"02-6-2021"
}


addToShoppingList(garlicSalt)
addToShoppingList(pizza)
addToShoppingList(lemonade)
addToShoppingList(spinach)
addToShoppingList(cookies)

for(const priceyList of list) {
    if(priceyList.price >= 8) {
        console.log(priceyList)
    }
}