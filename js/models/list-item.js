(function () {

  var ListItem = function () {
    // The "private" data
    var items = [];

    // Add the .on and .trigger methods to the new object being created
    $.observable(this);

    this.create = function (listItem) {
      items.push(listItem);
      this.trigger('create', listItem)
    };

    this.destroy = function (index) {
      items.splice(index);
      this.trigger('destroy', index);
    };

    this.update = function (index, name, category) {
      items[index].name = name;
      items[index].category = category;
      this.trigger('update', items[index], index);
    };

  };

  // Create a global modal instance. Later we'll learn a better place to put this
  window.listItems = new ListItem();

})();
