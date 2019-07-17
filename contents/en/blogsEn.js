/* 

const fs = require('fs')
const path = require('path')

const allPosts = fs.readdirSync(__dirname +'/blog' , (err, files) => files)

const getArrayPosts = (posts) => {
  return posts.map(post => post.replace(/\.md/i,''));
}

export default getArrayPosts(allPosts)
*/
export default [
  'using-flux-git-flow'
]