/*============== JQuery ==============*/

$(document).ready(function(){
    
    
    // ex1
    $('#btnh').on('click', function(){
       $('#lorem1').hide();
    });

    $('#btns').on('click', function(){
       $('#lorem1').show();
    });

    // ex2
    $('#btn1').on('click', function(){
      alert("hellow");
    });

    // ex3
    $('#btnt').on('click', function(){
      $('#lorem2').toggle();
    });

    // ex4
    $('p').on('click', function(){
      $(this).hide();
    });

    // ex5
    $('#btnfo').on('click', function(){
      $('#lorem5').fadeOut();
    });
    $('#btnfi').on('click', function(){
      $('#lorem5').fadeIn();
    });

    // ex6
    $('#btnft').on('click', function(){
      $('#lorem6').fadeToggle();
    });

    // ex7
    $('#btn7').on('click', function(){
       $('.p7').show("slow");
    });

    // ex8
    $('#btn8').on('click', function(){
       $('.p8').show("fast");
    });

    // ex9
    $('#btn9').on('click', function(){
       $('.p9').show(1000);
    });

    // ex10
    $('#btn10').on('click', function(){
       $('.p10').show("2000");
    });

    // ex11
    $('#btn11').on('click', function(){
       $('.p11').show("3000");
    });

    // ex12
    $('#btn12').on('click', function(){
       $('.p12').show("4000");
    });

    // ex13
    $( "#showr" ).on( "click", function() {
      $( ".div" ).first().show( "fast", function showNext() {
        $( this ).next( ".div" ).show( "fast", showNext );
      });
    });
    $( "#hidr" ).on( "click", function() {
      $( ".div" ).hide( 1000 );
    });

    // ex14
    function doIt() {
     $( "span,.div14" ).show( "slow" );
    }
    // Can pass in function name
    $( "#btn14" ).on( "click", doIt );

    $( "form" ).on( "submit", function( event ) {
      if ( $( "input" ).val() === "yes" ) {
        $( ".p14" ).show( 4000, function() {
          $( this ).text( "Ok, DONE! (now showing)" );
        } );
      }
      $( "span,div14" ).hide( "fast" );
     
      // Prevent form submission
      event.preventDefault();
    } );

    // ex15
    $('#btn15').on('click', function(){
       $('.p15').hide("slow");
    }); 

    // ex16
    $('#btn16').on('click', function(){
       $('.p16').hide("fast");
    });

    // ex17
    $('#btn17').on('click', function(){
       $('.p17').hide(1000);
    });

    // ex18
    $('#btn18').on('click', function(){
       $('.p18').hide("2000");
    });

    // ex19
    $('#btn19').on('click', function(){
       $('.p19').hide("3000");
    });

    // ex20
    $('#btn20').on('click', function(){
       $('.p20').hide("4000");
    });

    // ex21
    $( "#showr" ).on( "click", function() {
      $( ".div21" ).first().hide( "fast", function showNext() {
        $( this ).next( ".div21" ).hide( "fast", showNext );
      });
    });
    $( "#hidr" ).on( "click", function() {
      $( ".div21" ).hide( 1000 );
    });

    // ex22
    $( "#btn22" ).on( "click", function(){
      $( ".p22" ).hide(2000);
    });

    // ex23
    $('#btn23').on('click', function(){
       $('.p23').hide("slow");
    });

    // ex24
    $( "#hider" ).on( "click", function() {
      $( "span:last-child" ).hide( "fast", function() {
        // Use arguments.callee so we don't need a named function
        $( this ).prev().hide( "fast", arguments.callee );
      });
    });
    $( "#shower" ).on( "click", function() {
      $( "span" ).show( 2000 );
    });

    // ex25
    for (var i = 0; i < 5; i++) {
      $("<div>").appendTo(document.body);
    }
    $(".div25").on( "click", function() {
      $( this ).hide( 2000, function() {
        $( this ).remove();
      });
    });

    // ex26
    $( document.body ).on( "click", function () {
      if ( $( ".div26" ).first().is( ":hidden" ) ) {
        $( ".div26" ).slideDown( "slow" );
      } else {
        $( ".div26" ).hide();
      }
    });

    // ex27
    $( "#go" ).on( "click", function() {
      $( "#block" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
    });

    // ex28
    $( "#right" ).on( "click", function() {
      $( ".block" ).animate({ "left": "+=50px" }, "slow" );
    });
     
    $( "#left" ).on( "click", function(){
      $( ".block" ).animate({ "left": "-=50px" }, "slow" );
    });

    // ex29
    $( "#go1" ).on( "click", function() {
      $( "#block1" )
        .animate({
          width: "90%"
        }, {
          queue: false,
          duration: 3000
        })
        .animate({ fontSize: "24px" }, 1500 )
        .animate({ borderRightWidth: "15px" }, 1500 );
    });
     
    $( "#go2" ).on( "click", function() {
      $( "#block2" )
        .animate({ width: "90%" }, 1000 )
        .animate({ fontSize: "24px" }, 1000 )
        .animate({ borderLeftWidth: "15px" }, 1000 );
    });
     
    $( "#go3" ).on( "click", function() {
      $( "#go1" ).add( "#go2" ).trigger( "click" );
    });
     
    $( "#go4" ).on( "click", function() {
      $( "div" ).css({
        width: "",
        fontSize: "",
        borderWidth: ""
      });
    });

    // ex30
    $( "#go6" ).on( "click", function() {
      $( ".block_s" ).first().animate({
        left: 100
      }, {
        duration: 1000,
        step: function( now, fx ){
          $( ".block_s" ).slice( 1 ).css( "left", now );
        }
      });
    });

    // ex31
    $('#btnh1').on('click', function(){
       $('#lorem11').hide();
    });
    $('#btns1').on('click', function(){
       $('#lorem11').show();
    });

    // ex32
    $( "#go32" ).on( "click", function() {
      $( "#block32" ).animate({
        width: "40%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
    });
    
    // ex33
    $('#btnh2').on('click', function(){
       $('#lorem22').hide();
    });
    $('#btns2').on('click', function(){
       $('#lorem22').show();
    });

    // ex34
    $('#btn34').on('click', function(){
      alert("hellow , welcome");
    });

    // ex35
    $('#btn35').on('click', function(){
      $('#lorem35').toggle();
    });

    // ex36
    $('p').on('click', function(){
      $(this).hide();
    });

    // ex37
    $('#btnfo37').on('click', function(){
      $('#lorem37').fadeOut();
    });
    $('#btnfi37').on('click', function(){
      $('#lorem37').fadeIn();
    });

    // ex38
    $('#btnft38').on('click', function(){
      $('#lorem38').fadeToggle();
    });

    // ex39
    $('#btn39').on('click', function(){
       $('.p39').hide("4000");
    });
    // ex40
    $( "#showr40" ).on( "click", function() {
      $( ".div40" ).first().hide( "fast", function showNext() {
        $( this ).next( ".div40" ).hide( "fast", showNext );
      });
    });
    $( "#hidr40" ).on( "click", function() {
      $( ".div40" ).hide( 3000 );
    });

    // ex41
    $( "#btn41" ).on( "click", function(){
      $( ".p22" ).hide(2000);
    });

    // ex42
    $('#btn42').on('click', function(){
       $('.p23').hide("fast");
    });

    // ex43
    $('#btn43').on('click', function(){
       $('.p15').hide("slow");
    });

    // ex44
    $('#btn44').on('click', function(){
       $('.p16').hide(2000);
    });

    // ex45
    $('#btn45').on('click', function(){
       $('.p17').hide(1000);
    });

    // ex46
    $('#btn46').on('click', function(){
       $('.p8').hide("2000");
    });

    // ex47
    $('#btn47').on('click', function(){
       $('.p47').hide("3000");
    });

    // ex48
    $( "#showr48" ).on( "click", function() {
      $( ".div48" ).first().show( "fast", function showNext() {
        $( this ).next( ".div48" ).show( "fast", showNext );
      });
    });
    $( "#hidr48" ).on( "click", function() {
      $( ".div48" ).hide( 1000 );
    });

    // ex49
    function doIt() {
     $( "span,.div49" ).show( "slow" );
    }
    // Can pass in function name
    $( "#btn49" ).on( "click", doIt );

    $( "form" ).on( "submit", function( event ) {
      if ( $( "input" ).val() === "yes" ) {
        $( ".p14" ).show( 4000, function() {
          $( this ).text( "Ok, DONE! (now showing)" );
        } );
      }
      $( "span,div49" ).hide( "fast" );
     
      // Prevent form submission
      event.preventDefault();
    } );

    // ex50
    $('#btn50').on('click', function(){
       $('.p15').hide("slow");
    }); 

});
