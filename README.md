#Custom Select
A jQuery plugin to allow custom select boxes easy to implement.

###Objective
Currently, browser support is limited on `appearance: none;` and creates select boxes that are simply inconsistent. This plugin aims to make styling a custom select box a little easier by simply creating a containing element and calling the `selectBox()` method on it.

###Example

HTML

  <div id="mySelectBox"></div>

JavaScript

  $( '#mySelectBox' ).selectBox( {
    options: [
      'Red',
      'Green',
      'Light Blue',
      'Black',
      'White'
    ]
  } );

Output

  <div id="mySelectBox" data-selected>
    <div class="selected-option">Select One</div>
    <ul>
      <li class="option" data-value="red">Red</li>
      <li class="option" data-value="green">Green</li>
      <li class="option" data-value="lightblue">Light Blue</li>
      <li class="option" data-value="black">Black</li>
      <li class="option" data-value="white">White</li>
    </ul>
  </div>

When retrieving the selected option, we use the data attribute for holding the selection. When an option is selected, we use the `data-value` attribute to update the `data-selected` attribute of the main element. You can retrieve the data like so:

  $('#mySelectBox').data( 'selected' );

Or

  $('#mySelectBox').attr( 'data-selected' );
