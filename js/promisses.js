console.log("Arquivo de Promisses!");

const myPromisse = new Promise((resolve,reject) => {
    const name = "Jonatas";

    if(name === "Jonatas"){
        resolve("Esse é o meu nome!");
    }else{
        reject("esse não é meu nome.")
    }
});

myPromisse.then((data) =>{
    console.log("data!",data);
})

const myPromisse2 = new Promise((resolve, reject) => {
    const name = "Jotas";

    if(name === "Jonatas"){
        resolve("Esse É o Meu nome!");
    }else{
        reject("esse não é meu nome.")
    }
});

myPromisse2.then(data => {
    console.log("DATA INICIAL AQUI:",data);
    return data.toLowerCase()
}).then(dataModified => {
    console.log("dataModified:",dataModified);
}).catch((err) => {
    console.log("err!!",err);
});

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promisse p1 resolved!")
    },200)
});

const p2 = new Promise((resolve,reject)=>{
    resolve("promisse p2 resolved!");
});

const p3 = new Promise((resolve,reject)=>{
    resolve("promisse p3 resolved!");
});

const allPromisses = Promise.all([p1,p2,p3]).then(data => {
    console.log("data",data)
});

console.log("TESTE DE TIMING");