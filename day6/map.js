const numbers =[1,2,3,4,5];
const double = numbers.map((num)=> num*2);
console.log(doubled);
 
const fruits=["apple","banana","orange"];
const upperFruits= fruits.map((fruits)=> fruits,ToUpperCase());
console.log(upperFruits);

 const prices=[10,20,30];
 const priceTags=prices.map((prices)=>"$"+price);
 console.log(priceTags);

 const products=[100,50,200];
 const WithTax=product.map((price)=>price*1.08);
 console.log(WithTax);

 const users =[
    {name:"Alice",age:25},
    {name:"Bob",age:30},
    {name:"Charle",age:35},
 ];
 const names = users.map((user)=>user.name);
 console.log(names);

 const rectangle =[
    {width:10,height:5},
    {width:8,height:3},
    {width:15,height:10},
 ];
 const areas=rectangl.map((rect)=>rect.width*rect.height);
 console.log(areas);