// 1.ctrl+/ to 1 line comment  
/*2.multiple line comment*/
/*string
let badstring="My name is siyam";
var badstring1='My name is siyam';
var badstring2='You\'ve got no right to take my place';
var badstring3="You've got no right to take my place";
console.log(badstring);
console.log(badstring1);
console.log(badstring2);
console.log(badstring3);
//string concatination
let concate=badstring1 +"  "+ badstring2 +" hello ! welcome to apna college " + 55555;//number datatype converted to string 
14+34
48
"23"+"23"
'2323'
"23"+23
'2323'   
let string="123344"
undefined
Number(string)
123344
Number(string).toString()//function call
'123344'

console.log(concate)
template literals
let backticks=badstring+badstring1+badstring2;
console.log(backticks)
let backticks1=`${badstring + badstring2} What the hell are you talking about`;
console.log(backticks1);
// important methods in string
// string as object
// as javascript automatically converts between string primitives and string objects, you can call any of the helper methods of the string object on a string primitive.
.length()
.split()
.concate()
.concate()
.charAt()
console.log(backticks1.length);
console.log(backticks1.toLocaleLowerCase());
console.log(backticks1.toUpperCase());
console.log(backticks1[87]);//backticks1.length-1
console.log(backticks1[20]);
console.log(backticks1[34]);
console.log(backticks1.indexOf("right"));
console.log(backticks1.indexOf("siyam"));
console.log(backticks1.slice(20,35));//starts in 20 no index finish in 34 no
*/
/*
User defined datatypes
*/
//objects ---primitive
// let lecture=10;
// let section=3;
// let title='javascript';
// console.log(lecture);
// const course={
//     lecture:10,
//     section:3,
//     title:"javascript",
//     notes:{
//         introduction:"Welcome to our js course"
//     },
//     enroll(){
//         console.log("You are successfully enroled")
//     }
// }
// course.enroll()
// course.price=3343434;
// console.log(course)
// function enroll(){
//     console.log("You are successfully enroled")
// }

//factory finction
// function creatCourse(){
//     return{
//         lecture:10,
//         section:3,
//         title:"javascript",
//         notes:{
//             introduction:"Welcome to our js course"
//         },
//         enroll(){
//             console.log("You are successfully enroled")
//         }
//     }
//     return course;
// }
// const course=creatCourse();
// course.enroll();
// console.log(course.lecture)
// function creatCourse(title){//camelcase
//     return{
      
//         title:title,
//         enroll(){
//             console.log("You are successfully enroled")
//         }
//     }
//     return course;
// }
// const newCourse=creatCourse('javascript');
// const course=creatCourse("javascript");
// console.log(course)
// //constructor function
// function Course(title){//pascalcase
// this.title=title,
// this.enroll= function(){
//     console.log("You are successfully enrolled");
// }
// }
// const course= new Course('Javascript');
// course.enroll()
// console.log(course)
// course.checkEnrollment=function(){
//     console.log("You are successfully enrolled");
// }
// console.log(course)
// delete course.title//delete keyword
// console.log(course)



//most confusing things in js
// function Course(title){//pascalcase
//     this.title=title,
//     this.enroll= function(){
//         console.log("You are successfully enrolled");
//     }
//     }
//     console.log(Course.constructor)
//     const course= new Course('Javascript');
//     console.log(course.constructor)
//     console.log(newCourse.constructor)
//     const course1='dfdfdfdf';//immutable cant add anything
//    console.log( course1.length)
//    console.log( course1.toLocaleUpperCase())
//    console.log( course1.toLocaleLowerCase())


//    function Course(title){//pascalcase
//     this.title=title,
//     this.enroll= function(){
//         console.log("You are successfully enrolled");
//     }
//     }
    // machine convert it like this
    // const Course_1= new Function('title',`
    // this.title=title,
    // this.enroll=function(){
    //     console.log("You are successfully enrolled");
    // }
    // `
    // )
    //function is also a object

//pass by value,pass by reference
//Primitive datatype
let num=10;
//pass by value
let num2=num;
num=35;
// console.log(num)
// console.log(num2)
//Reference datatype
let obj={
    numm:20
}
//pass by reference
let obj2=obj;
obj.numm=35
// console.log(obj)
// console.log(obj2)


// const course222={
//     title:'js',
//     enroll(){
//         console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
//     },
//     enrollment(){
//         console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
//     }
// }
// const course3333={...course222}
// course222
// course3333.title='c++';
// course3333
// //2nd method
// course3333.enrollee=function(){
//     console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
// }
// const course4=Object.assign({},course3333)
// course4
// for(let key in course222){
//     console.log(key,course222[key])
// }
// for(let key of Object.keys (course222)){
//     console.log(key,course222[key])
// }


// let animal={
//     properties:"values",
//     name:"cow" ,   
//     amount:10


// }
//exercise using objects
//itemName
//price
//discount
//itemCode
// const product={
//     itemName:"Shirt",
//     price:300,
//     discount:30,
//     itemCode:'S23',
// }
// //factory function
// function createProduct(name,price,discount,itemCode){
//     return{
//       itemName: name,
//     price : price,
//     discount:discount,
//     itemCode:itemCode,

//     }
    
// }
// const dress1=createProduct('panjabi',666,10,'F45')
// dress1
// //contruction funtion
// function Product1(name,price,discount,itemCode,){
//     this.itemName=name;
//     this.price=price;
//     this.discount=discount;
//     this.itemCode=itemCode;
//     this.discountedPrice=function(){
//        return price* discount / 100
//     }
// }
// const mobile=new Product1('Oneplus Nord',30000,40,'F78',); 
// mobile
// console.log(mobile)
// console.log(mobile.discountedPrice())


// console.log(animal) 
// console.log(animal.name)
// console.log(animal["amount"])
// let legsprop="amount";
// console.log(animal[legsprop]);
// //arrays
// let selectBooks=["The Rudest book ever","Poor dad rich dad","Dopamin detox"]
// console.log(selectBooks);
// console.log(selectBooks[0]);
// console.log(selectBooks.length);
// //function
// function namasteWorld(name,astname){
//     console.log("Namaste world "+ name+". "+ astname)
// }
// namasteWorld("siyam","Wellcome to our website");
// function add(a,b){
//     return a+b;
// }
// console.log(add(6777,33454554) ) 
// jshero.net
// edabit.com
// w3resource
// dreamincode
// asmarterwaytolearn
// exercism.io
// maxpau.fr
// teaching-materials.org
// sitepoint.com
// jschallenger.com

//class 22 apna college
//class---special functions
// class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
// }
// let pencil=new Product('pencil',20,3,'P10')
// console.log(pencil)
// //class expressions
// const Product1=class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     //setter or getter value
//     get getDiscountValue(){
//         return this.discount;
//     };
//       set setDiscountValue(value){
//         this.discount=value;
//     }
//     discountValue(){
//         return this.discount*this.price/100;
//         // return this.discount();
//     }
// }
  

// // let chair=new Product1('chair',499,35,'C10')

// console.log(chair.getDiscountValue)
// console.log(chair.setDiscountValue=10)
// console.log(chair.getDiscountValue)
// console.log(chair.discountValue())
//extendin classes=not use in 
// let chair=new Furniture("chair",488,20,'v10')
class Product{
    constructor(itemName){
        this.itemName=itemName;}
       getItemName(){
        return this.itemName+ ' is a product';}
         }
class Furniture extends Product{
constructor(itemName){
    super(itemName);//parent class er contrcter ke call kore  
}
getItemname()
{
    return this.itemName+'  is furniture';
}
}
let pensil1=new Product('Pensil',20,2,'P10')
let chair=new Furniture('chair',20,2,'P10')
console.log(pensil1.getItemName())
console.log(chair.getItemName())


// ways to print in javascript
// console.log("Hello World");
// alert("hacked");
// document.write("This is document write");


// var a=22;
// var b=5000;
// document.write(a==b);
// document.write(a>b);
// document.write(a<b);
// document.write(a<=b);
// document.write(a>=b);


// logical and,or and not
// or
// all true hole true
// document.write(true && true);
// document.write(true && false);
// document.write(false && true);
// document.write(false && false);



//and 1 true hole true 
// document.write(false || true);
// document.write(true || false);
// document.write(false || false);
// document.write(false || false);


//not 
// document.write(! true);
// document.write(! false);
  



// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr[6])
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]//index no starts with 0,1,2,3,4............length: 9
// for(
//     let i=4;i<arr.length;i++
// )
// {
//     document.write(  "<br>"+ arr[i])
// };
//56789


//functions
// function clicked(){
//     document.write('click hua');
// };
// function clicked1(){
//     document.write(77, ' the button was clicked');
// };

                                          //Events in js
// window.onload= function(){
// document.write('THe document was loaded')
// };
                      
// f.addEventListener('click', function(){
//     console.log('Clicked on container');
// });
// f.addEventListener('mouseover', function(){
//     console.log('Mouse on container');
// });
// f.addEventListener('mouseout', function(){
//     console.log('Mouse out of container');
// });


// let num=2.2344445;
// document.write(num.toFixed());//2
// document.write(num.toPrecision(4));//2.234

// to know the length of word
// let a="jgfgfjhfhjhfhjhfhjfjhfffjhfghirtyriuyhihkfkghkljffg";
// let len=a.length;
// document.write( "<br>"+ len);
 
// settimeout and set interval
// repeatKaro=()=>{
//     document.querySelectorAll('.container')[0].innerHTML="ami aber ashci";
//     console.log('ami aber ashbo')
// };
// repeatKaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="ami aber ashci1";
//     console.log('ami aber ashbo1');
// };
// setTimeout(repeatKaro,5000);
// setInterval(repeatkaro,2000);

// let q=prompt("enter your age");//promt always a string
// q=Number.parseInt( q);//string to number
// document.write(typeof q);
// if(q>0){
// document.write( "</br>" +"this is an valid age");
// }
// else{
//     document.write("this is an invalid age");
// }

// if(q<0){
// document.write("This is an invalid age");
// }
// else if(q>0 && q<18){
// document.write("You are a kid and you thing of driving after 18");
// }
// else if(q<18){
// document.write("You are a kid and you can not even think of driving");
// }
// else{
//     document.write("You are eligible for driving");
// }

// document.write("Done");
// document.write("You can ", q<18? "not drive": "drive");

// dangerous code be carefull
//  let i=0;
// while(true){
//     console.log(i);
//     i=i+1;
    
// }

// let fr="siyam"+"runa"+"jaima";
// document.write("\n",fr[i]);
// for (let i = 0; i< fr.length; i++) {
//  document.write("\n"+ fr[i] );  }
//   


/*

let num=[33,34,565,66,777,777,354,55456,56565465,65,654,654,65,65,654,654,645,5654,65,65,654,56,54654,654,65,46,546,5654,6,56,5,54646455646,1,1,1,,232,3,23434,34,344,3,43,434,34443,4,4,4,343342,34,,424,4,34,3,43,4,4,4,,4,4,34,3,43,4,34,3,43,43,4,34,3,43,4,4,4,,34,34,3,4,4,,,4,,4,4,34,,4,34,4345345,3,55,5,53,5,5,,6,456,565,46,,66,6,,566,,6,6,6,456,6,,65,6,6,6,,6,6,,6,6,46,];
// let per=num.toString(num);
let per=parseInt(num);
document.write(typeof per);
let c=num.join(' and ')
document.write(c + " \n " )
// document.write(num.pop());
// for(let i=0;i<num.length;i++){
//     document.write("\n"+ num[i]);
// }

// document.write(num[100]);

*/











// class20.

//map,filter and reduce
/*
//array map methodl
let arr=[23,24,25,26,27,5,3,7,8,2,10];
let p=arr.map((value,index,Array)=>{
document.write(  value,index,Array+" \n ");
return value+1
})
document.write(p) 

//array filter method
// let  arr=[1,5,7,9,3,6,7]
// let y=arr.filter((a)=>{
//     return a<5
// })
//  console.log(y,arr[1]<5,arr)


//  array reduce method 
 let arr3=[1,2233,3334,34,44,4,45,4,5,54,5,54,5,,4,56,54,5,4,5,4,5,44,3,34,545,4,56,4,4,4,5,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
// let u=arr3.reduce((h1,h2)=>{
//     return h1+h2 
// })
// console.log(u,arr3)


// function can be make as variable
const reduce_func=(h1,h2)=>{
    return h1+h2
}
let arr4=arr3.reduce(reduce_func)
console.log(arr4)

*/

//class 21
//practice set on arrays
//practice problem  1
/*
let arr=[1,2,35,66,777,666,5,6,5,6,555,667,5,66,6]
let a=prompt("enter a number")
a=Number.parseInt(a);
arr.push(a)
console.log(arr,a)
*/
//practice problem  2
// let arr=[1,2,35,66,777,666,5,6,5,6,555,667,5,66,6]
// let a;
// while(a!=0){
//     a=prompt("enter a number")
// a=Number.parseInt(a);
// arr.push(a)

// }console.log(arr,a)
//practice problem  3
// let arr3=[23,40,50,45,34,60,70,40,25];
// const filter_func=(x)=>{
// return x%10 ==0;
// };
// let u=arr3.filter(filter_func)
// console.log(u)
//practice problem  4
//create an array of square of given numbers
// let arr3=[23,40,50,45,34,60,70,40,25];
// const filter_func=(x)=>{
// return x*x;
// };
// let u=arr3.map(filter_func)
// console.log(u)
//practice problem  5
// let arr3=[23,40,50,45,34,60,70,40,25];
// const filter_func=(x1,x2)=>{
// return x1+x2;
// };
// let u=arr3.reduce(filter_func)
// console.log(u)


//class 22
//exercise 1_guess the number
// let guessNumber=parseInt(prompt("ENTER A NUMBER BETWEEN 1 TO 20"));
// let randomnum=Math.floor(Math.random()*20);
// if(guessNumber==randomnum){
//     document.write("YOUR NUMBER IS:"+guessNumber+" RANDOM NUMBER IS :"+randomnum+"you have won")
// }
// else if(guessNumber<randomnum){
//     document.write("YOUR NUMBER IS:"+guessNumber+"your number is too low")
// }
// else if( guessNumber>randomnum){
//     document.write("YOUR NUMBER IS:"+guessNumber+"your number is too high")
// }
// else{
//     document.write("YOUR NUMBER IS:"+guessNumber+" RANDOM NUMBER IS :"+randomnum)
// }

