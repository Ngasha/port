$(document).ready(function(){
 $ (".downloading, .hire-me").hide().show("slow");
});

$(document).ready(function(){
  $("#flip").click(function(){
      $("#panel").slideToggle("slow");
  });
});
//hide span
$(document).ready(function(){
  $(".hire-me span").hide();
});
//add button
$(document).ready(function(){
  $(".hire-me").append("<button>Hire me</button>");
});
//when user press button
$(document).ready(function(){
  $(".hire-me button").click(function(){
    $(".hire-me span").show().css("background-color", "#cb821a");
    //get rid of the button
    $(this).remove();
  });
});
//add overlay to about-me image



//buton read more

// hide the text inks and swap them with the appropriate nav

//create a select and append menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //create option
  var $option = $("<option></option>");
  //option value is the href
  $option.val($anchor.attr("href"));
  //option's text is text in the link
  var anchorText = $anchor.text();
  $option.text(anchorText);
  //append option to the select
  $select.append($option);
});

//create button
/*var $button = $("<button>Go</button>");
$("#menu").append($button);*/
//bind click to the button
/*$button.click(function(){
  //got to the select
window.location = $select.val();
});*/
$select.change(function(){
  window.location = $select.val();
});
//go to the selects's location
//modify css to hide links on small resolution and show button and select
//hide  select and button on larger screens and shows links



// deal with seleted options.














