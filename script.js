var app = angular.module("diySupplies", ['firebase']);

app.controller('diySuppliesController', ['$scope', 'angularFireCollection',

	function ($scope, angularFireCollection) {

		//define data store
		var ref = new Firebase('https://diy-supplies.firebaseio.com/items');

		$scope.items = angularFireCollection(ref);

		$scope.addItem = function () {
			$scope.items.add({name: $scope.item.name, desc: $scope.item.desc});
		};
		
	}
]);