// Object shorthand property

const name = 'Mohsin'
const userAge = 24

const user = {
    name,
    age: userAge,
    location: 'Karachi'
}

console.log(user)

// Object destructing

const product = {
    label: 'Coca-cola',
    price: 50,
    stock: 200
}

const {label:productLabel, price, rating = 3} = product
// console.log(productLabel, price, rating)

const transaction = (type, {label = 'N/A', stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)
transaction('order')