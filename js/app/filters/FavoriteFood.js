function FavoriteFood() {
  return function (items, food) {
    return items.filter(function (item) {
      return item.favoriteFood === food;
    });
  };
}

angular
.module('app')
.filter('favoriteFood', FavoriteFood);
