const names = ['Mohsin', 'Ali', 'Zain']
const shortNames = names.filter((name) => name.length <= 4)

console.log(shortNames)

const geocode = (address, callback) => {
    const coordinates = {
        latitude: 12.36,
        longitude: 14.259873
    }
    callback(coordinates)
}

geocode('Karachi', (coordinates) => {
    console.log(coordinates.latitude, coordinates.longitude)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        console.log('Two seconds up!')
        callback(a + b)
    }, 2000);
}

add(2, 3, (sum) => {
    console.log('Sum:', sum)
})