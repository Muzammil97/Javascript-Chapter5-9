// // chapter 5

// // q1 take two numbers & add them

// var num1 = 65
// var num2 = 22

// var sum = num1+num2
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;

// // Q2  subtraction, multiplication, division & modulus

// document.write(`Addition of ${num1} and ${num2} is ${sum} <br>`);

// document.write(`Subtraction of ${num1} and ${num2} is ${sub} <br>`);

// document.write(`Multiplication of ${num1} and ${num2} is ${mul} <br>`);

// document.write(`Division of ${num1} and ${num2} is ${div} <br>`);

// document.write(`Modulus of ${num1} and ${num2} is ${mod} <br>`);


// // Q3 Mathematic Expressions

// var first_variable

// document.write("Value after variable declaration is: ",first_variable)

// first_variable = 5;
// document.write("<br>Initial value:",first_variable)
// document.write("<br>Value after increment is:",++first_variable)
// first_variable = first_variable +7
// document.write(" <br>Value after addition is ", first_variable)
// document.write(" <br>Value after decrement is:",--first_variable) 
// document.write(" <br>The remainder is : ",first_variable % 3) 


// // Q4 Movie Ticket

// var ticketPrice = 600;
// var numTicket = 5;
// var totalPrice = ticketPrice* numTicket;
// document.write(" <br> <br>Total Cost to buy " ,numTicket , " tickets to a movie is " , totalPrice+"PKR")


// // Q5 Table of 4
// document.write(" <br> <br><b>Table of 4</b> <br><br>  ")

// var table;
// table = 4;

// var start_num = 1;

// document.write(table+"x"+start_num+"="+table*start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")
// document.write(table+"x"+ ++start_num+"="+table* start_num+"<br>")

// // Q6 Temperature converter

// var celsius = 25;
// var fahrenheit = 70;


// document.write( "<br>Celsius to Fahrenheit Converter "+celsius+"<sup>0</sup>C is "+ Number((celsius*9/5)+32) +"<sup>0</sup>F" +"<br>")
// document.write( "<br>Fahrenheit to Celsius Converter "+fahrenheit+"<sup>0</sup>F is "+ Number((fahrenheit-32) * 5/9) +"<sup>0</sup>C" +"<br>")

// // Q7 Shopping Cart

// var item1 = 650
// var item2 = 100
// var qtyItem1 = 3
// var qtyItem2 =7
// var shp_charges =100
// let totalCost = (item1 * qtyItem1) + (item2* qtyItem2) + shp_charges;

// document.write(`<h1>Shopping Cart Receipt</h1>`);
// document.write(`<br>Price of item 1:  ${item1}<br>`);
// document.write(`<br>Quantity of item 1: ${qtyItem1}<br>`);
// document.write(`<br>Price of item 1: ${item2}<br>`);
// document.write(`<br>Quantity of item 2: ${qtyItem2}<br>`);
// document.write(`<br>Shipping charges:  ${shp_charges}<br>`);
// document.write(`<br><strong>Total cost:  ${totalCost} </strong><br>` );

// // Q8 Mark Sheet
// document.write("<h1>Mark Sheet</h1>");


// var totalMarks = 650;
// var marksObtained = 572;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<br>Total Marks: " + totalMarks + "<br>");
// document.write("<br>Marks Obtained: " + marksObtained + "<br>");
// document.write("<br>Percentage: " + percentage + "%<br>");

// // Q9 Exchange rate

// let usdToPkr = 104.80;
// let riyalToPkr = 28;

// let dollars = 10;
// let riyals = 25;

// let totalInPkr = (dollars * usdToPkr) + (riyals * riyalToPkr);


// document.write("<h1>Currency in PKR</h1>");

// document.write(`<br>Total dollar are ${dollars} and Riyal are ${riyals} so Pakistani Rupees will be ${totalInPkr} : `);


// // Q10 calculations in a single expression

// var numx = 256;

// var reslt = ((numx+5)*10)/2;


// document.write(`<br><br><h1>Calculation in one line Result: ${reslt} </h1>`);


// // Q11 The Age Calculator

// document.write("<br><h1> the Age Calculator</h1>");

// let currentYear = 2024;
// let birthYear = 1997;

// let user_age = currentYear - birthYear;


// document.write(`<br>Current Year ${currentYear}<br>`);
// document.write(`<br>Birth Year ${birthYear}<br>`);

// document.write(`<br>Your Age is about ${user_age} years<br>`);

// // Q12 The Geometrizer

// document.write("<br><h1>Math Geometrizer </h1>");

// var radius = 20;
// document.write("<br>Radius of a circle is  " + radius);

// var pi = 3.142;
// var circumference = 2 * pi * radius;
// document.write("<br>The circumference is " + circumference);


// var area = pi * radius * radius;
// document.write("<br>The area is " + area);


// // Q13 The Lifetime Supply Calculation

// document.write("<br><h1> Lifetime Supply Calculation </h1>");

// let snack = "chocolate Chips";
// let currentAge = 25;
// let maxAge = 80;
// let perDay = 2;

// var totalSnacks = (maxAge - currentAge)  * perDay;

// document.write(`<br><br><br>Faviourite Snack:  ${snack}`)
// document.write(`<br>Current age:  ${currentAge}`)
// document.write(`<br>Esitmated Maximum Age:  ${maxAge}`)
// document.write(`<br>Amount of snack per day:  ${perDay}`)
// document.write(`<br>You will need ${totalSnacks} ${snack} to last you untill the ripe old age of ${maxAge}`)


// // Chapter 6-9

// Q1

// document.write(`<br>Result`)
// var a = 10;

// document.write(`<br>The value of a is ${a}`)
// document.write(`<br>................................<br><br>`)

// document.write(`<br><br>The value of ++a is ${++a}`)
// document.write(`<br>Now the value of a is ${a}`)


// document.write(`<br><br>The value of a++ is ${a++}`)
// document.write(`<br>Now the value of a is ${a}`)

// document.write(`<br><br>The value of --a is ${--a}`)
// document.write(`<br>Now the value of a is ${a}`)


// document.write(`<br><br>The value of a-- is ${a--}`)
// document.write(`<br>Now the value of a is ${a}`)


// Q2


// var x = 2, y = 1;

// document.write(`<br><br>initial value of x is ${x} and value of y is ${y}`)

// document.write(`<br><br>equation is --x - --y + ++y + y-- (so value after each step)`)
// document.write(`<br>value of --x ${--x}`)
// document.write(`<br>value of --y ${--y}`)
// document.write(`<br>value of ++y ${++y}`)
// document.write(`<br>value of --y ${y--}`)
// var z = --x - --y + ++y + y--
// document.write(`<br><br>result of --x - --y + ++y + y-- <br> ${z}`)

// Q3

// var user_name = prompt(`Enter your name`)
// alert(`Welcome ${user_name}`)


// Q5


// var table;

// if(table == 0)
// {
//     table = 5
// }


// var table = prompt("Enter your number")
// if(table == 0)
// {
//     table = 5
// }

// document.write(`<br>Table of ${table} <br><br>`)

// document.write(` ${table} x 1 = ${table*1} <br>`);
// document.write(` ${table} x 2 = ${table* 2} <br>`);
// document.write(` ${table} x 3 = ${table* 3} <br>`);
// document.write(` ${table} x 4 = ${table* 4} <br>`);
// document.write(` ${table} x 5 = ${table* 5} <br>`);
// document.write(` ${table} x 6 = ${table* 6} <br>`);
// document.write(` ${table} x 7 = ${table* 7} <br>`);
// document.write(` ${table} x 8 = ${table* 8} <br>`);
// document.write(` ${table} x 9 = ${table* 9} <br>`);
// document.write(` ${table} x 10 = ${table* 10} <br>`);



// Q6

// var sub1;
// var sub2;
// var sub3;
// var total_marks = 100
// sub1 = prompt(`Enter Name of Subject 1`)
// sub2 = prompt(`Enter Name of Subject 2`)
// sub3 = prompt(`Enter Name of Subject 3`)
// var marks1 = +prompt(`Enter Marks of ${sub1}`)
// var marks2 = +prompt(`Enter Marks of ${sub2}`)
// var marks3 = +prompt(`Enter Marks of ${sub3}`)
// document.write(` <table>
//         <tr>
//             <th>Subject</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//             <th>Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub1}</td>
//             <td>${total_marks}</td>
//             <td>${marks1}</td>
//             <td>${(marks1 / total_marks) * 100}%</td>

//         </tr>
//         <tr>
//             <td>${sub2}</td>
//             <td>${total_marks}</td>
//             <td>${marks2}</td>
//             <td>${(marks2 / total_marks) * 100}%</td>

//         </tr>
//         <tr>
//             <td>${sub3}</td>
//             <td>${total_marks}</td>
//             <td>${marks3}</td>
//             <td>${(marks3 / total_marks) * 100}%</td>

//         </tr>
//         <tr>
//             <th></th>
//             <th>${total_marks * 3}</th>
//             <th>${marks1 + marks2 + marks3}</th>
//             <th>${(((marks1 + marks2 + marks3) / (total_marks * 3)) )*100}%</th>

//         </tr>
//         </table>`)



// Chapter 6 (Math Expression II)

// Q1


// Q2 f x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
// var x = 100
// x = --x
// console.log(x)

// Q3 var x = 50; var y = x++; What is the value of y?

// var x = 50;
//  var y = x++
// console.log(y)


// Q4

// var y = 50; var z = --y; What is the value of z?
// var y = 50;
// var z = --y
// console.log(z)


// Q5

// var newVal = val--


// Q6
// var newVal = val+1

// Q7

// var num = 10;
// num++;
// alert(num);


// Chapter 7 (Math Expression III)

// Q1
// calculatedNum = 2 + (2 * 6); 
// 14


 // Q2

//  var calculatedNum = (2 + 2) * 6; 
// 24

// Q3

// var calculatedNum = (2 + 2) * (4 + 2); 
// 24

// Q4

// var calculatedNum = ((2 + 2) * 4) + 2; 
// 18

// Q5

// (2 + 2) * (4 + 10)
// 56

// Q6

// 2 + (2 * 4) + 10
// 20


// Q7

// (4 / 2) * 4

// not 5 but answer is 8




// Chapter 8 (Concatenating Text Strings)
// Q1

// var num = "2" + "2"
// // 22

// // Q2

// var message = "Hello," + "Dolly";


// alert(message)

// // Q3

// alert("33" + 3);

// // Q4

// alert("Pakistan" + " " + "Zindabad");

// // Q5

// var concat_text = "New " + 555;


// // Q6

// var var_1 = "Pakistan "
// var var_2 = "Zindabad"
// var_3 = var_1 + var_2

// Chapter 9 (Prompts)
// Q1
// var first_name;
// first_name = prompt("Enter first name")
// // Q2
// var country;
// var country = prompt("Country","China")

// // Q3

// var yourName = prompt("Enter Your Name");

// // Q4

// defaul_string = prompt("", "default string")

// // Q5

// var str_one = "Name", str_two = "muzammil" , var_three;
// var_three = prompt(str_one,str_two)
// console.log(var_three)

// // Q6

// var_three = prompt("Name","muzammil")
// console.log(var_three)
