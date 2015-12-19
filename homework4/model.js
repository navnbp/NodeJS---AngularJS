angular.module('homeworkModel', [])
.controller('homeWorkCtrl', function($scope) {

 $scope.groups= [];

	$scope.addGroup=function()
	{
		// var isPresent=0;
		// angular.forEach($scope.groups, function(grp)
		// {
		// 	if($scope.moduleName===grp.moduleName)
		// 	{
		// 		isPresent=1;
		// 		alert('Group with the same already exists...!!');
		// 	}

		// });
			
		// if(isPresent===0)
		// {
			$scope.groups.push({moduleName: $scope.moduleName, description: $scope.desc, students: [], tasks : []});
		// }
		
		$scope.moduleName="";
		$scope.desc="";
		$scope.studentName="";
		$scope.taskName="";
		delete $scope.grpStudLst;
		delete $scope.grpTaskLst;
	};

	$scope.getGroupCount=function()
	{
		var count = 0;
      	angular.forEach($scope.groups, function(grp) {
        count ++;
      });
      return count;
	};

$scope.remainingTasks=function(moduleName)
{

	var count = 0;
	angular.forEach($scope.groups, function(grp,index)
		{
		
 			if(grp.moduleName===moduleName)
       		{
       			
       			angular.forEach(grp.tasks,function(tsk,indx)
       			{
       				if(tsk.isDone===true)
       				{
       					count++;
       				}
       			});
       			
       		}
		});
   

      return count;

}


$scope.assignTask=function(moduleName,taskName,studentName)
{

		angular.forEach($scope.groups, function(grp,index)
		{
			if(grp.moduleName===moduleName)
       		{
       			angular.forEach(grp.tasks,function(tsk,indx)
				{

					if($scope.groups[index].tasks[indx].task===taskName)
					{
				//  $scope.groups[index].tasks[indx].isDone=!tsk.isDone;
					$scope.groups[index].tasks[indx].assignedTo=studentName;	
					}
				});
       			
       		}
		});
}

$scope.saveTask=function(moduleName,taskName,studentName)
{
	
		angular.forEach($scope.groups, function(grp,index)
		{
			if(grp.moduleName===moduleName)
       		{
       			angular.forEach(grp.tasks,function(tsk,indx)
				{
					if($scope.groups[index].tasks[indx].task===taskName)
					{
						$scope.groups[index].tasks[indx].assignedTo=studentName;	
					}
				});
       			
       		}
		});

};


	$scope.addStudents=function()
	{

		angular.forEach($scope.groups, function(grp,index)
		{
 			if(grp.moduleName===$scope.grpStudLst)
       		{
       			$scope.groups[index].students.push({name:$scope.studentName});
       		}
		});

		$scope.moduleName="";
		$scope.desc="";
		$scope.studentName="";
		$scope.taskName="";
 		delete $scope.grpStudLst;
 		delete $scope.grpTaskLst;

	};

	$scope.addTask=function()
	{
		
		angular.forEach($scope.groups, function(tsk,index)
		{
			if(tsk.moduleName===$scope.grpTaskLst)
       		{
       			
       			$scope.groups[index].tasks.push({task:$scope.taskName,isDone : false,assignedTo:'' });
       		}
		});


		$scope.moduleName="";
		$scope.desc="";
		$scope.studentName="";
		$scope.taskName="";
 		delete $scope.grpStudLst;
 		delete $scope.grpTaskLst;

	};


	$scope.deleteGroup=function(moduleName)
	{
		angular.forEach($scope.groups, function(grp,index)
		{
 			if(grp.moduleName===moduleName)
       		{
       			$scope.groups.splice(index,1);
       		}
		});
		
  };


$scope.deleteTask=function(moduleName,taskName)
{

		angular.forEach($scope.groups, function(grp,index)
		{
		
 			if(grp.moduleName===moduleName)
       		{
       			
       			angular.forEach(grp.tasks,function(tsk,indx)
       			{
       				
       				if(grp.tasks[indx].task===taskName)
       				{
       					$scope.groups[index].tasks.splice(indx,1);
       				}
       			});
       		}
		});
}



	$scope.deleteStudent=function(moduleName,studentName)
	{
		angular.forEach($scope.groups, function(grp,index)
		{
		
 			if(grp.moduleName===moduleName)
       		{
       			
       			angular.forEach(grp.students,function(stu,indx)
       			{
       				
       				if(grp.students[indx].name===studentName)
       				{
       				
       					$scope.groups[index].students.splice(indx,1);
       				}
       			});
       			
       		}
		});
		
  };




	
});



