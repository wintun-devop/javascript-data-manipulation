/* Change to single object from an arry of having many object inside. */
const user = [{name: 'Mr.Smit'}, {email: 'johnsmit@gmail.com'},{password:'ASDFG123456'}];
const singleObject = user.reduce((i,j)=>({...i,...j}),{});
console.log("Single Object Result>>",singleObject)
const singleObjectSimpleMethod = Object.assign({},...user)
console.log("Single Object Result>>",singleObjectSimpleMethod)