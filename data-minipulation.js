/* Change to single object from an arry of having many object inside. */
const user = [{name: 'Mr.Smit'}, {email: 'johnsmit@gmail.com'},{password:'ASDFG123456'}];
const singleObject = user.reduce((i,j)=>({...i,...j}),{});
console.log("Single Object Result>>",singleObject)
const singleObjectSimpleMethod = Object.assign({},...user)
console.log("Single Object Result>>",singleObjectSimpleMethod)


/* Change to single object from an arry of having many object inside with key value parirs. */

const keyValueUser=[
{key: 'name', value: 'Win Tun'},
{key: 'email', value: 'wintun1234@gmail.com'},
{key: 'password', value: '234567usfakf'}
]
const result = keyValueUser.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{});
console.log("Single Object Result>>",result)