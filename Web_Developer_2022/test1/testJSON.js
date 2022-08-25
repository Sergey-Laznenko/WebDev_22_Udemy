const post = {
  title: 'My post',
  likesQty: 5
}

console.log(post)

const postStringified = JSON.stringify(post) //преобразование в JSON

console.log(postStringified)

const postParsed = JSON.parse(postStringified) //преодразование в объект

console.log(postParsed)

