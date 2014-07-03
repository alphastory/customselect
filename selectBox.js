/*===========================================================================================================
DOCUMENTATION
------------------------------------------------------------------------------------------------------
Arguments
- - - - - - - - - - - - - - - - - - - - -
options - Array: ['Option 1', 'Option 2', 'Option 3']

============================================================================================================*/
jQuery.fn.selectBox = function( obj ) {
  if(obj){
    if( obj.options !== undefined ){
      buildOptions( this )
    } else {
      sendError( 'MissingParameterError', "Required parameter 'options' of type 'array' missing.");
    }
  } else {
      sendError( 'MissingParameterError', "Required parameter 'options' of type 'array' missing.");
  }
  // bindOptions();
  // testSubmit();

  function buildOptions( el ){
    el.append('<div class="selected-option">Select One</div><ul></ul>').attr('data-selected', '');
    for( var i = 0; i <obj. options.length; i++ ){
      var item = '<li class="option" data-value="' + obj.options[ i ].toLowerCase().replace( ' ', '' ) + '">' + obj.options[ i ] + '</li>';
      el.find('ul').append(item);
    }
    toggleOptions( el, el.find( 'ul' ) );
    bindOptions( el, el.find( '.option' ) );
  }

  // Toggle the options on or off
  function toggleOptions( el, ul ){
    // Find the options
    el.on( 'click', '.selected-option', function(){
      if( ul.hasClass( 'open' ) ){
        // Close
        ul.toggleClass( 'open' );
        ul.css( 'display', 'none' );
      } else {
        // Open
        ul.toggleClass( 'open' );
        ul.css( 'display', 'block' );
      }
    } );

    // Event for hiding the element when clicked outside of.
    $( 'body' ).on( 'click', function( e ){
      var target = $( e.target );
      if( !target.is( el.find( '.selected-option' ) ) && !target.is( el.find( '.option ' ) ) ){
        if( ul.hasClass( 'open' ) ){
          // Close
          ul.toggleClass( 'open' );
          ul.css( 'display', 'none' );
        }
      }
    } );
  }

  // Make the options selectable
  function bindOptions( el, option ){
    option.off().on( 'click', function(){
      // Get the option information
      var v = $( this ).data();
      var t = $( this ).text();
      // Set the text
      if( v.value !== undefined ){
        el.attr( 'data-selected', v.value ).find( '.selected-option' ).text( t );
      }

      if( el.find('ul').hasClass( 'open' ) ){
        // Close
        el.find('ul').toggleClass( 'open' );
        el.find('ul').css( 'display', 'none' );
      }
    } );
  }

  function sendError( type, msg ){
    throw type + ': ' + msg;
  }
}
