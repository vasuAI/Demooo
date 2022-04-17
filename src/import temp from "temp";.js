import temp from "temp";
import { number } from "yargs";

//If three sides f trianggles is known
function area(s1, s2, s3) {
  const S = s1 + s2 + s3;
  area = Math.sqrt(S * (S - s1) * (S - s2) * (S - s3));
  return area;
}

console.log(area(4, 5, 7));

//largest of three number
function largest(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}
console.log(largest(11, 7, 5));

// check nature of number

function check(number){
    if(number<0)
        return ('negative')
    else if(number>0)
        return ('postive numer')
    else
        return('zero')
}
console.log(check(9));

function fabonacci(number){
    var n1=0,n2=1
    var temp
    for( let i=0;i<number;i++){
        temp=n1+n2
        console.log(n1);
        n1=n2
        n2=temp
    }
}
fabonacci(2)

//Alphabetical order

const string = 'hello one a'

function wordSort(string){
    
}
const words = string.split(' ');

words.sort();

for (const element of words) {
  console.log(element);
}


let str="abcd"
let ab=""
j=str.length
for(var j=str.length-1;j>=0;j--){
    words=str[j]
    console.log(str[j]);
for (const element of words) {
        console.log(element);
}

