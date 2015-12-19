String.prototype.removeSubstring = function(char,occurance) 
{


	var temp='';
	if(occurance==undefined)
	{
		for (var i = 0; i < this.length; i++) 
		{
			if(char!==this[i])
			{
				temp+=this[i];
			}
		}	
	
	}
	else
	{
		var flag = true;
		var ct=parseInt("0");

		for (var i = 0; i < this.length ; i++) 
		{
			if(char===this[i])
			{
				ct++;
				flag=(ct===parseInt(occurance))?false:true;
			}
			else
			{
				temp+=this[i];
			}

			if(!flag)
			{
				temp+=this.substr(i+1,this.length);
				return temp;
			}
		}

	}

	return temp;
};

var str1 = 'aaa';
console.log(str1.removeSubstring('a', 2)); 

var str2 = 'aaabbbb'; 
console.log(str2.removeSubstring('a')); 
