function addHandler () {
  console.log('Adding a widget to basket');
  widgetsInBasket += 1;
  updateWidgetBasket();
  tidyView();
}

function removeHandler () {
  if (widgetsInBasket >= 1) {
    console.log('Removing a widget from basket');
    widgetsInBasket -= 1;
    updateWidgetBasket();
  }
  if (widgetsInBasket < 1) {
    console.log('Widget basket is empty');
  }
  tidyView();
}

function emptyWidgetBasket () {
  widgetsInBasket = 0;
  $('#widget_basket').text(widgetsInBasket);
}

function buyHandler () {
  var widgetOrderQuantity;
  if (widgetsInBasket > 0 && widgetsInBasket <= widgetStock) {
    // assume delivery and payment details already registered
    widgetOrderQuantity = widgetsInBasket;
    console.log('Here I should submit an order for ' + widgetOrderQuantity + ' widgets');
    widgetStock -= widgetOrderQuantity;
    updateWidgetStock();
    $('#order_feedback').text('Processing your order for ' + widgetOrderQuantity + ' widgets');
    emptyWidgetBasket();
  }
  else {
    console.log('Unable to order widgets');
    // TODO: identify specific errors to user
    $('#order_feedback').text('Sorry, you cannot order ' + widgetsInBasket + ' widgets at this time');
  }
}

function updateWidgetBasket () {
  $('#widget_basket').text(widgetsInBasket);
}

function updateWidgetStock () {
  $('#widget_stock').text(widgetStock);
}

function tidyView () {
  $('#order_feedback').text('');
}

// main //
var widgetsInBasket = 0;
var widgetStock = 5;
$().ready($('#add_widget').click(addHandler));
$().ready($('#remove_widget').click(removeHandler));
$().ready($('#submit_order').click(buyHandler));
$().ready(updateWidgetStock());
$().ready($('#widget_basket').text(widgetsInBasket));
