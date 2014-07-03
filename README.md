#Custom Select
A jQuery plugin to allow custom select boxes easy to implement.

###Objective
Currently, browser support is limited on `appearance: none;` and creates select boxes that are simply inconsistent. This plugin aims to make styling a custom select box a little easier by simply creating a containing element and calling the `selectBox()` method on it.

###Example

HTML

    <div id="mySelectBox"></div>

JavaScript

    $( '#mySelectBox' ).selectBox( {
      options : [
        'Red',
        'Green',
        'Light Blue',
        'Black',
        'White'
      ],

    defaultText : 'Select One',
    reset : true
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

###Arguments

`options` - Array

All possible selections. The items placed into this array, will be converted to selectable options. This argument is **required**.

`defaultText` - String

The default select option text (i.e., "Please Select One"). Defaults to "Select One".

`reset` - Boolean

This resets the default styles of list. Defaults to true, but may turned off if using a CSS reset, by passing `true`.


###Styling

When you begin styling, be aware that the plugin creates the elements necessary to support this list. Here the different elements that you may need to style. The plugin itself will not create the styles for you and, instead, just creates a base element for you to work with.

#### *.selected-option*

    <div class="selected-option"></div>

This is the base format of your select box. The "inactive" state when it is not being interacted with. The user will **always** see this element.

#### *ul*

    <ul></ul>

This is the parent of each of your list elements. This plugin does not force a styles reset.

#### *.option*

    <li class="option" data-value="somevalue">Some Value</li>

This is the base format of your select options.






















































.
