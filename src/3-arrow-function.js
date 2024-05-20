// const square = function(x) {
//     return x * x
// }

// const square = (value) => {
//     return value * value
// }

// const square = (value) => value * value

// console.log(square(3))

const party = {
    name: 'Birthday Party',
    guests: ['Mohsin', 'Ali', 'Hassan'],
    printGuests() {
        console.log('Printing guests list for:', this.name)
        this.guests.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

console.log(party.printGuests())