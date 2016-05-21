function removeAllVowels() {
  return function (str) {
    return str.replace(/[aeiou]/gi, '');
  };
}

angular
.module('app')
.filter('removeAllVowels', removeAllVowels);
