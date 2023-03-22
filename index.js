let arr=[1,2,3]
// arr.push(4)
let arr2= [...arr, 4]
console.log(arr2)
let catObj={
    name:'rose'
}
let catObj2={...catObj,age:9, name:"ted"}
// catObj2.age=9
console.log(catObj2)
console.log(catObj)

let{name,age}=catObj2
console.log(name)
console.log(age)


let[num1, num2, num3]= ['red','orange','yellow']
console.log(num1)
console.log(num2)
console.log(num3)
