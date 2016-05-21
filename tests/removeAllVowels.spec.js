describe('removeAllVowels Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
    removeAllVowels = $filter('removeAllVowels');
  }));

  it('should remove all vowels', function(){
    expect(removeAllVowels('supercalifragilisticexialidocious')).toEqual('sprclfrglstcxldcs');
  });

});
