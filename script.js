function hello(){
    console.log("Im Function", this)
}
const person = {
    name:  'Yuna',
    age: 27,
    sayHello: hello,
    userInfo: function(job, phone){
        console.group(`${this.name} Info`)
        console.log(`${this.name}`)
        console.log(`${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
};
const Alexey = {
    name: "Alexey",
    age: 33,
}
//person.userInfo.bind(Alexey)() //забандили, привязали функцию к новому обьекту
//передача параметров в байданутую функцию
let parametrAlexey = person.userInfo.bind(Alexey, 'front-end', '38067117757')()//методом присваивания новой переменной байдаанутой функции  
person.userInfo.call(Alexey, 'front-end', '38067117757')//call делает тоже самое, только вызывает функцию сразу
person.userInfo.apply(Alexey, ['front-end', '38067117757'])//aplly от call отличается только методом передачи параметров

const array = [1, 2, 3, 4]
Array.prototype.mulBy = function(n){
    return this.map(function(i){
        return i * n
    })
}
console.log(array.mulBy(2))//на самом деле справа от точки это this
//эту функцию можно  применять к новым массвам 
///все будет наследоваться 
const yuna = new Object({
    name: "Yuna",
    age: 28,
    greet: function(){
        console.log('Ex.Ptototype')
    }
});
Object.prototype.sayMyName = function(){
    console.log('Yunona')
};
const nikolay = Object.create(yuna)
nikolay.name = 'Sweet Bb'
console.log(nikolay);
