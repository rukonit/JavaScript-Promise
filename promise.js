let cleanRoom = () => {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = (message) => {
  return new Promise((resolve, reject) => {
    resolve( message + ' won Icecream');
  });
};

cleanRoom().then((result) => {
	return removeGarbage(result);
}).then((result) => {
	return winIcecream(result);
}).then((result) => {
	console.log('finished ' + result);
})
.catch((err) => {
console.log(err)
})


//Second way

function completeTask(message) {
    return new Promise((resolve, reject) => {setTimeout(()=> {resolve(message)}, 2000)})
}

completeTask('Washed')
.then((data)=>{
    console.log(data);
    return completeTask(data + ', Removed Garbase')
}).then((data)=>{
    console.log(data);
    return completeTask(data + ' and Got Reward')
}).then((data)=>{
    console.log(data);
})
