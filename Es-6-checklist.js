/* problem - 1
কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/
const myName = 'sejan';
let age = '25';
/* problem - 2
টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/
const education={examName1:'ssc',GPA1:'4.75',examName2:'diploma',GPA2:'3.68'};
                
const aboutMe = `My name is ${myName},I am ${age} years old.
My Education- ${education.examName1} Gpa- ${education.GPA1} and ${education.examName2} Gpa- ${education.GPA2}.`;

console.log(aboutMe);

/*৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */

const numDivision = num => num/5;

console.log(numDivision(50));

/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const numSum = (num1,num2) => (num1 +2) * (num2 + 2)

/* {
    const num3 = num1 + 2;
    const num4 = num2 + 2;
    return num3 * num4;
} */

console.log(numSum(3,8));

/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const numMultiply = (num1,num2,num3) => num1 * num2 *num3;
console.log(numMultiply(5,5,5));
/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const sumMultiLline = (num1,num2) =>{
    const num3 = num1+ 2;
    const num4 = num2+ 2;
    return num3 * num4;
}
console.log(sumMultiLline(5,5));

/* ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?  */



/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const array =[5,6,1,4,8,5,55,8,5,9,4,4444];

const multiplyArray = array.map(x => x*5);
console.log(multiplyArray);

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const number = [1,5,4,8,6,1,6,6,1,6546,4,511,4,8,56,4615,1,5165,16,5654,6456,]
const oddnumber = number.filter(x => x % 2);
console.log(oddnumber);
/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */ 
const products = [
    {name:'phone',price:4000},
    {name:'tv',price:14000},
    {name:'smart-watch',price:5000},
    {name:'laptopp',price:400000},
]

const product = products.find(product=> product.price ==5000);
console.log(product);
/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

/* 
map----every element k dore kisu akta kaj kore abr array hishebe return kore
forEach----return kore na
filter----je element gulu condition ar sathe mile jai segulu array akare return kore
find---first je element ar sathe condition mile jai seitai return kore dei 
 */


/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const products1 = 
    {name1:'phone',price1:4000,
    name2:'tv',price2:14000,
    name3:'smart-watch',
    price3:5000,
}

const {name1} = products1;
console.log(name1);


/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */


const [num1,num2,num3,num4] = [10,20,30,40,50,60];
const three = num3;
console.log(three);


/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */

function defultValue(num1,num2,num3 = 7){
    return num1 + num2+ num3;
}
console.log(defultValue(50,50));


/* [অপশনাল] */

/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const products2 = 
    {name1:'phone',price1:4000,
    name2:'tv',price2:14000,
    name3:'smart-watch',
    price3:5000,
    name4:{
        name:'realmi',price:5000,
            ram:{ram8: '8GB',
                ram6:'6GB',
        }
    }
}
const ram = products2.name4.ram.ram6;

const {ram8} = products2.name4.ram;
console.log(ram);

console.log(ram8);
/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */
const ramChain = products2?.name4?.ram?.ram;
console.log(ramChain);




