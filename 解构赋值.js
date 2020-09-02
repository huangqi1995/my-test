let name = '张三';
let age = 18;
let sex = '男';
let dog = '旺财';
let obj = {
    name,age,sex,
    eat(){console.log('eat');} ,
    love:dog
}

console.log(obj);


let obj = {
    name:'张三',
    age:18,
};

let {name,age:num,sex = '女'} = obj;
console.log();

let num1 = 999;