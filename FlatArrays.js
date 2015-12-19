Array.prototype.flattenArray = function()
{
	var rescultArray=[];
		this.reduce(function(pre, cur,index) 
		{
			rescultArray=index==1?rescultArray.concat(pre,cur):rescultArray.concat(cur);
		 });

	 return rescultArray;
}

var arrays = [[1, 2, 3], [4, 5], [6]];	
console.log(arrays.flattenArray());
