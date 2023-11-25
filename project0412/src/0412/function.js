
async function getUser(){
    try{
    const result = await fetch("./api/users")
    return result.json();
    }catch{
    }
    }
    

const str="HELLO WORLD"
console.log(foo(str))//HE
console.log(str)//HELLO WORLD

function foo(s ){
return s.SubString(0,2);
}


function bar(a){
a.push("hi");
return a;
}


const array =[];
bar (array);
console.log(bar(array))//["hi"]
console.log(bar(array))//["hi","hi"]

console.log(array)//["hi"]


function foo(s ){
s="America"
return s.SubString(0,2);
}
const str="HELLO WORLD"
console.log(foo(str))//Am
console.log(str)//HELLO WORLD

//null pionter Exception

//str?<-optional::nullがあるかもしりません、値入れなくても大丈夫
//str!<-nullがそもそもない

let greeting="hi"

function setName(){
name="noh"
}

setTimout(()=>{

greeting="hello"
},0);

setName();
console.log(`${greeting},${name}`)


function convertNo(person,name){
    person.name='NosoYeon'//pureではない
    
    return person
}


if ("jeon"==="Nosoyeon"){
    //true
    }
    //同じ住所、メモリだから
 //const jeon="jeon"
　//undefinedが出るかそれとも上書きされて[name:Nosoyeon]が出るか
const jeon = {name:'jeon'};//nameのパラメータがないから
const nosoyeon=convertNo(jeon);

console.log(jeon)//[name:Nosoyeon]
console.log(nosoyeon)//[name:Nosoyeon]



///正しくは
function convertNo(person){
    const newPerson=Object.assign({},person);
    newPerson.name="Nosoyeon"//新たなメモリを作ったから

    return newPerson;

}
 

function convertNo(person){
 return{
     ...person,//assignオリジナルのものは触らないで
     name:'Nosoyeon',
    }

}
if ("jeon"==="Nosoyeon"){
//false
}
//違う住所、メモリだから

const jeon = {name:'jeon'};//nameのパラメータがないから
const nosoyeon=convertNo(jeon);

console.log(jeon)//[name:jeon]
console.log(nosoyeon)//[name:Nosoyeon]