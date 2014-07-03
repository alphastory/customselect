jQuery.fn.selectBox = function( obj ) {

  // Determine default settings
  var defaults = {
    defaultText : 'Select One',
    reset: ( obj.reset !== undefined ) ? obj.reset : true
  }

  // If the objects or options are missing, throw an error, otherwise build the field.
  if(obj){
    if( obj.options !== undefined ){
      buildOptions( this )
    } else {
      // Object exists, but options does not
      sendError( 'MissingParameterError', "Required parameter 'options' of type 'array' missing." );
    }
  } else {
      // Object does not exist
      sendError( 'MissingObjectError', "Required object with key 'options' of type 'array' missing." );
  }

  function buildOptions( el ){
    // Determine the default text
    var d = ( obj.defaultText !== undefined ) ? obj.defaultText : defaults.defaultText;

    // Determine the reset
    var r = ( defaults.reset == false ) ? '' : 'list-style-type: none; padding: 0; margin: 0;';

    // Setup the body
    $( 'body, html' ).css( { 'width' : '100%', 'height' : '100%' } );

    // Setup the necessary items
    el.css( 'position', 'relative' ).append( '<div class="selected-option">' + d + '</div><ul style="' + r + ' position: absolute; z-index: 1; display: none;"></ul>' ).attr( 'data-selected', '' );

    // Build out the options, based on the number of options passed in.
    for( var i = 0; i < obj.options.length; i++ ){
      var item = '<li class="option" data-value="' + obj.options[ i ].toLowerCase().replace( ' ', '' ) + '">' + obj.options[ i ] + '</li>';
      el.find( 'ul' ).append(item);
    }

    // Set the bindings
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

      if( el.find( 'ul' ).hasClass( 'open' ) ){
        // Close
        el.find( 'ul' ).toggleClass( 'open' );
        el.find( 'ul' ).css( 'display', 'none' );
      }
    } );
  }

  function sendError( type, msg ){
    throw type + ': ' + msg;
  }
}
