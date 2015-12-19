// 1 : Write a function that determines if a word is a palindrome

var isPalindrome=function isPalindrome (text)
{
	var status=true;
	text=text.toUpperCase();

	for (var startIndex = 0, endIndex=text.length-1; startIndex < text.length, endIndex>0, startIndex<endIndex; startIndex++,endIndex--)
	 {
	 	
		if(text[startIndex]!=text[endIndex])
		{
			status=false;
			break;
		}
	}
	return status;
}

console.log('\nQuestion 1 :\n');
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('cook'));




// 2.  Write a function that takes a string and replace repeated characters

 var replaceLetters= function (text)
 {
 	text=text.toUpperCase();
 	var temp=text.slice(0 , text.length);
 	for (var i = 0; i < text.length; i++) 
	{
		if(text[i]===text[i+1] && i < text.length)
		{
			temp= temp.substr(0, i) + '*' + temp.substr(i + 1);
		}
		else if(text[i]===text[i-1] && i-1>=0 )
		{
		 temp= temp.substr(0, i) + '*' + temp.substr(i + 1);
		}
 	}
	 return temp;
 }

console.log('\nQuestion 2 :\n');
console.log(replaceLetters("parallel"));
console.log(replaceLetters("muhaaa"));



// 3. Write a function that finds the letter which occurs the most
 

 var repeatingLetters= function(array)
 {
 	
 	var charCount={ ch: [], count : [] };
 	var flag=true;

 	for (var i = 0; i < array.length; i++) 
 	{
			if (charCount.ch.length===0) 
				{
					
					charCount.ch.push(array[i]);
 					charCount.count.push('1');
 					flag=false;
 					
				}	
				else
				{
					for (var j = 0; j < charCount.ch.length; j++)
					 {
						 if(charCount.ch[j].toString()==array[i].toString())
						 {
							charCount.count[j]=Number(charCount.count[j]) + 1;
							flag =false;
						}
					};
				}	
				if(flag)
				{

					charCount.ch.push(array[i]);
 					charCount.count.push('1');
				}
 			
 			flag=true;
 	};
var str='{ ';
for (var k = 0; k < charCount.ch.length; k++) {
	if(k<charCount.ch.length-1)
str+= charCount.ch[k] +' : '+  charCount.count[k] +', ';
else
str+= charCount.ch[k] +' : '+  charCount.count[k] +'';
};
str+=' }';
	// console.log(charCount.ch[k] +" ----> "+charCount.count[k]); 	
	console.log(str);
}

console.log('\nQuestion 3 :\n');
 repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 

// 4.  Write a function that shuffles an array.  The results should be random. HINT: Use Math Object - Math.floor(), Math.Random()

 var shuffleArray= function (array)
 {

 	var temp=0, random1=0, random2=0;
  	for (var i = 0; i < array.length * 2; i++) {
 		
 			random1=Math.floor(Math.random()*101) % array.length;
 			random2=Math.floor(Math.random()*113) % array.length;
	 		temp=array[random1];
 			array[random1]=array[random2];
 			array[random2]=temp;
 	};
	
	return array.reverse();
 }

console.log('\nQuestion 4 :\n');
 console.log(shuffleArray([1, 2, 3, 4, 5]));

// 5. Write a function that takes two numbers and a math operator (+, -, *, /) and performs the calculation.

var calculate= function (oprand1, oprand2, oprator)
{
 var temp=0;
switch(oprator)
{
	case '+':
			temp=oprand1 + oprand2;
			break;
	case '-':
			temp=oprand1 - oprand2;
			break;
	case '*':
			temp=oprand1 * oprand2;
			break;
	case '/':
			temp=oprand1 / oprand2;
		break;
}


console.log(oprand1 +' ' + oprator + ' ' + oprand2 +' = '+ temp);


};

console.log('\nQuestion 5 :\n');
 calculate(2, 8, '-'); 
 calculate(2, 8, '+'); 
 calculate(2, 8, '*'); 
 calculate(2, 8, '/');

// 6. Write a function that sums all the numbers (string value numbers too) in an array with mixed types

var sumArray = function(array)
{
var sum = 0 ;
for (var i=0; i<array.length ;i++)
{

	if(typeof array[i] === 'number' || !isNaN(array[i]))
	{
		if(sum==array[i])
		{
			sum=sum*2;
		}
		else
		{
			sum = sum +array[i];
		}
	}
}
 return sum;
}

console.log('\nQuestion 6: :\n');
console.log('Sum of numbers in array : ' +sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]));



//7. Write a function that takes a grocery array and tax amount as a percent. This function should calculate the total paid by applying the tax to each grocery item. HINT: use .toFixed() to force decimals to 2 places

var totalPaid= function(groceries, taxAmount)
{
	var ct=0; 
	var groceryBill={ total : 0.00 , productName: [], paid : [] };
	taxAmount=Number(1+ Number(taxAmount/100));

	groceries.forEach(function(item)
	{
		groceryBill.productName[ct]=item.name;
		groceryBill.paid[ct]=Number(Number(taxAmount)*item.price).toFixed(2);
		groceryBill.total= Number(Number(groceryBill.total) + Number(groceryBill.paid[ct])).toFixed(2);
		ct++;

	});

	var printGrocery=function(groceryBill)
	{
		var count=1;
		console.log('{ total :'+ groceryBill.total +',');
		console.log('groceries: [ ');
		for (var i = 0; i < groceryBill.productName.length; i++,count++) {
			if(count===groceryBill.productName.length)
				console.log( '{ name: '+ groceryBill.productName[i]+', paid: '+ groceryBill.paid[i] +' }');
			else
				console.log( '{ name: '+ groceryBill.productName[i]+', paid: '+ groceryBill.paid[i] +' },');
		};
		
		console.log(']}');
		
	
	};

 printGrocery(groceryBill);
}


console.log('\nQuestion 7 :\n');
var groceries = [
      { name: 'Orange Juice', price: 2.00 },
      { name: 'Milk', price: 3.50 },
      { name: 'Cereal', price: 2.00 },
      { name: 'Sugar', price: 1.75 }
    ];
    totalPaid(groceries, 9.5);
