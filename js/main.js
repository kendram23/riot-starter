var itemTemplate = $('#templates .item').html();


// var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', item: 0.15 }););
// $('#store').append(newItemHtml);

var items = [
  { name: 'Gum', price: 0.20 },
  { name: 'Peppermint', price: 0.50 },
  { name: 'Pretzel', price: 0.25 }
]

for (var x = 0; x < items.length; x ++ ) {
      var item =  items[x];
      var newItemTemplate = $.render(itemTemplate, item);
      $('#store').append(newItemTemplate);
    }



