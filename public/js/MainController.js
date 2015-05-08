angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.title= "Angular";
	vm.searchInput = '';
	vm.movies = [
			{
				title: 'Game of Thrones',
				year: 2011,
				favourite: true
			},
			{
				title: 'Incredibles',
				year: 2014,
				favourite: false
			},
			{
				title: 'Inception',
				year: 2001,
				favourite: true
			},
			{
				title:'Equilibrium',
				year:2003,
				favourite:false
			},
			{
				title:'Fast Furious',
				year:2005,
				favourite:true
			},
			{
				title:'Avengers',
				year:2013,
				favourite:true
			},
			{
				title:'Mad Max',
				year:2015,
				favourite:true
			},
			{
				title:'Memento',
				year:2000,
				favourite:false
			},
			{
				title:'Dementia',
				year:2016,
				favourite:true
			}
	];
	vm.orders = [
			{
				id: 1,
				title: 'Year Ascending',
				key: 'year',
				reverse: false

			},
			{
				id: 2,
				title: 'Year Descending',
				key: 'year',
				reverse: true

			},
			{
				id: 3,
				title: 'Title Ascending',
				key: 'title',
				reverse: false

			},
			{
				id: 4,
				title: 'Title Descending',
				key: 'title',
				reverse: true

			}

	];

	vm.order = vm.orders[0];
	vm.new = {};
	vm.addShow = function() {
		// body...
		vm.movies.push(vm.new);
		vm.new = {};

	};
	
});