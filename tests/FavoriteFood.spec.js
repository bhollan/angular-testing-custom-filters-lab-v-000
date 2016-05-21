describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
    favoriteFood = $filter('favoriteFood');

    fakePeople = [
    {name: 'Steve',
      favoriteFood: 'apples'},
    {name: 'John',
      favoriteFood: 'bagels'},
    {name: 'Tim',
      favoriteFood: 'french fries'}
    ];

  }));

  it('should filter for favoriteFood = "bagels"', function(){
    var results = favoriteFood(fakePeople, 'bagels');

    expect(results).toEqual([{name:'John', favoriteFood:'bagels'}]);
  });

});
