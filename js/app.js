// Setup app
var todoApp = angular.module('todoApp', []);

// *
// * Show console message
// *
var devMsg = function(msg) {
	console.log(msg);
}

// *
// * Mass task options controller
// *
todoApp.controller('listOptionsCtrl', ['$scope', function($scope) {

	// *
	// * Get rid of finished tasks
	// *
	$scope.clearFinished = function() {
		$scope.callFoo = function(message) {
			myService.devMsg('Clearing finished tasks...');
		}
		
		// Loop through the task list and check to see if any of the tasks are marked as completed.
		for(var index = 0; index < $scope.taskList.length; index++) {

			// If task is marked as completed, remove the item from the task list array
			// and move the loop index back by 1 to compensate for the removed item
			if($scope.taskList[index].done == true) {
				devMsg('Removing task: ' + $scope.taskList[index].name);

				$scope.taskList.splice(index, 1);
				index--;
			}
		}
	}

	// *
	// * Removes the checked task items
	// *
	$scope.removeChecked = function() {
		devMsg('Removing checked tasks...');

    for(var index = 0; index < $scope.taskList.length; index++) {
    	if($scope.taskList[index].selected) {
    		devMsg('Removing ' + $scope.taskList[index].name);

    		$scope.taskList.splice(index, 1);
    		index--;
    	}
    }
  }
}]);




// *
// * To-Do list controller
// *
todoApp.controller('listCtrl', ['$scope', function($scope) {
	
	// bullshit test data
	var testList=	[{
						'name': 'Rake leaves',
						'done': false
					},{
						'name': 'Take out the trash',
						'done': false
					},{
						'name': 'Wash car',
						'done': false
					},{
						'name': 'Make dinner',
						'done': false
					}]

	// vars
	$scope.taskList = [];

	// *
	// * get tasks for the list
	// *
	function getList() {
		devMsg('Loading task list...');

		for(var index = 0; index < testList.length; index++) {
			$scope.taskList.push(testList[index]);
		}

		devMsg('...Success!');
	}

	getList();
	
	// *
	// * Removes a task from the task list
	// *
	$scope.removeTask = function(task) {
		devMsg('Removing task: ' + task.name);

		$scope.taskList.splice($scope.taskList.indexOf(task), 1);
	}
	
	// *
	// * Adds a task to the task list
	// *
	$scope.addTask = function(task) {
		devMsg('Adding task: ' + task);

		$scope.taskList.push({
													'name': task,
													'done': false		
												});
							
		// Reset the text of the add task text input
		$scope.newTask = '';
	}
	
	// *
	// * Toggles a task as completed or not
	// *
	$scope.toggleTask = function(task) {
		devMsg('Toggling task: ' + task.name);

		task.done = !(task.done);
	}

  // *
  // * Change task status to finished
  // *
  $scope.complete = function(task) {
		devMsg(task.name + ' is completed.');

  	task.done = true;
  }

  // *
  // * Change task status to unfinished
  // *
  $scope.uncomplete = function(task) {
		devMsg(task.name + ' is uncompleted.');

  	task.done = false;
  }

  // *
  // * Unselects the task
  // *
  $scope.unselect = function(task) {
  	task.selected = false;
  }

  // *
  // * Selects the task
  // *
  $scope.select = function(task) {
  	task.selected = true;
  }

}]);













