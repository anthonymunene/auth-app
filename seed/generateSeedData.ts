import * as faker from 'faker'
import Post from "../src/posts/posts.interface";

const fs = require('fs')
const numPosts = 100

let posts: Post[] = []

let randomName
let randomTitle
let randomContent

for(let i = 0; i < numPosts; i++) {
    randomName = faker.name.findName()
    randomTitle = faker.commerce.product()
    randomContent = faker.lorem.paragraph()

    posts.push({
        author: randomName,
        content: randomContent,
        title: randomTitle
    })
}


fs.writeFileSync('data/seedData.json', JSON.stringify(posts), err => {
    if(err) throw err

    console.log('file has been saved')
})