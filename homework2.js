var arrays = [[1, 2, 3], [4, 5], [6]];

Array.prototype.flattenArray = function() 
{
	
	// arrays.reduce(function(i,j)	{return i.concat(j);} ,[]);
arrays.reduce(function(previousValue, currentValue, index, array) 
	{
  console.log(previousValue+"---"+currentValue);
  return previousValue.concat(previousValue);
});

	}


console.log(arrays.flattenArray);
