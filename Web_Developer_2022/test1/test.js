
const objectA = {
  a: 10,
  b: true
}

function a() {
  console.log('Hey There')
}

a()

const h = () => {
  console.log('Hey there')
}

h()

const myCity = {
  city: 'Wroclaw',
  popular: true,
  country: 'Poland'
}

console.log(myCity)
console.log(myCity.city)
console.log(myCity.country)

delete myCity.popular

console.log(myCity)

myCity.green = 'very'

console.log(myCity)

myCity['popular'] = true  // используется в случае если надо добавить свойство в объект значение уже существующей переменной

console.log(myCity)

const transportWro = 'bus'

console.log(transportWro)

myCity[transportWro] = 'Yes' // добавляем свойство в объект которое является значение переменной transportWro и присваиваем ему значение 'Yes'

console.log(myCity)

myCity.adres = {
  street: 'Pulaskiego',
  flow: 6,
  lokal: 71
}

console.log(myCity)
console.log(myCity.adres.street) 

delete myCity.adres.flow

console.log(myCity)

let stage = 'flow'

myCity.adres[stage] = 6

console.log(myCity)

const name = 'Sergey'
const age = '38'

const userProfile = {
  age,
  name,
  hasSignedAgreement: false
}

console.log(userProfile)

const myCity2 = {
  city: 'Wroclaw',
  cityGreeting: function() {  // можно сразу cityGreetings()
      console.log('Greetings!!!')
  }
}

console.log(myCity2)