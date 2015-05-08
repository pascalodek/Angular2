angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.title= "Angular";
	//vm.searchInput = " ";
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
	
});