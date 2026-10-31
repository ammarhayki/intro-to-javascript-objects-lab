// ex 1 

const menuItems = ['Tea', 'Coffe', 'Sandwich', 'Cookie']

// console.log(menuItems[0])
// console.log(menuItems[2])
// console.log(menuItems.length)
// console.log(menuItems[menuItems.length - 1])


// ex 2

const waitingCustomers = ['Aisha', 'Omar', 'Noor'];

waitingCustomers[1] = 'Ali'
waitingCustomers.push('Dana')

const removedCustomers = waitingCustomers.pop()

// console.log(waitingCustomers)
// console.log(waitingCustomers.length)

// console.log(removedCustomers)
// console.log(waitingCustomers)

// ex 3

const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];

// for ( let drink = 0; drink< drinks.length ; drink++){
//     console.log(`${drink + 1}. ${drinks[drink]}`)
// }

// // ex 4
// const prices = [2, 5, 3, 6, 4];

// let toatalPrice = 0
// let expensiveItemCount = 0 

// prices.forEach((price) => {
//     toatalPrice = toatalPrice + price
// })
// console.log(`Total price: ${toatalPrice}`)
// prices.forEach((price) => {
//    if(price >= 4){
//     expensiveItemCount = expensiveItemCount + 1
//    }
// })
// console.log(`Items costing 4 or more:${expensiveItemCount}`)

// ex 5

// const cafe = {
//   name: 'Campus Cafe',
//   location: 'building A',
//   seats: 24,
//   isOpen: true,
// };
// console.log(`${cafe.name} is located in ${cafe.location}.
// Available seats: ${cafe.seats}`)

// ex 6
// const drink = {
//   name: 'Iced Coffee',
//   price: 3,
//   size: 'small',
//   temporaryCode: 'TEMP-01',
// };
// drink.size = 'large'
// drink.price = drink.price + 1
// drink.isAvailable = true
// delete drink.temporaryCode

// console.log(drink)
// ex 7
// const order = {
//   customerName: 'Mariam',
//   itemName: 'Sandwich',
//   price: 4,
//   quantity: 3,
//   isPaid: false,
// };
// order.orderTotal = order.price * order.quantity

// console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.
// Order total: ${order.orderTotal}`)
// order.isPaid = true


// if (order.isPaid == true) {
//   console.log('Ready to prepare')
// }else{
//   console.log('Waiting for payment')
// }

// ex 8
// const studySession = {
//   title: 'JavaScript Practice',
//   room: 'Lab 2',
//   topics: ['Variables', 'Arrays'],

//   addToppic(topic){
//     studySession.topics.push(topic);
//   },

// };
// studySession.addToppic('Objects')
// console.log(studySession.topics.length)
// studySession.topics.forEach(topic => {console.log(topic)})
// studySession.room = 'Lab 3'
// console.log(`${studySession.title} will take place in ${studySession.room}`)
// console.log(studySession.topics)

// ex 9

// const products = [
//   { name: 'Tea', price: 2 },
//   { name: 'Sandwich', price: 4 },
//   { name: 'Cookie', price: 1 },
// ];
// // console.log(products[1]['name'])
// products[1]['price']= 5
// console.log(products)
// products.push({ name: 'Juice', price: 3 }
// )
// console.log(products)
// products.forEach(product => {
//   console.log(`${product['name']} costs ${product['price']} BD`)})


// ex 10

// const studyGroup = {
//   name: 'JavaScript Crew',
//   members: [
//     { name: 'Aisha', completedHomework: true },
//     { name: 'Omar', completedHomework: false },
//     { name: 'Noor', completedHomework: true },
//   ],
// };
// console.log(studyGroup.name)
// console.log(studyGroup.members.length )
// let completedCount = 0 

// for (member of studyGroup.members){ if (member.completedHomework == true) {
//   completedCount = completedCount + 1
// }else{console.log(`${member.name} needs to finish the homework.`)}
// }
// console.log(`Completed homework: ${completedCount}`)
