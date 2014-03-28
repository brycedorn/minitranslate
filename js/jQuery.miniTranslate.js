// Here
console.log("MT LOADED");

// Sample library
var mt_lib = [
  {w : "Hello", r : "Goodbye"},
  {w : "World", r : "Mars"}
];

// miniTranslate
function mt(mt_lib,div) {
  if(div.length > 0 && mt_lib.length > 0 && div.attr('class') != "mt-ignore") {
    // Save the children!
    if(div.children().length > 0) {

      for(var j=0; j<div.children().length; j++) {

        if(($(div.children()[j]).attr('class') != "mt-ignore")) {

          // If it's an input, get val(), otherwise get text()
          var txt = $(div.children()[j]).text();
          if(txt.length == 0) txt = $(div.children()[j]).val();

          for(var i=0; i<mt_lib.length; i++) {
            // RegExp for word
            var curr = new RegExp('\\b' + mt_lib[i].w + '\\b', 'g');
            // Translate it!
            txt = txt.replace(curr,mt_lib[i].r)
            // console.log("replacing "+curr+" with "+mt_lib[i].r);
            console.log("txt is now: "+txt);
          }
          
        $(div.children()[j]).text(txt);
        
        }
      }
    }
    else { // No kids :(
      // If it's an input, get val(), otherwise get text()
      if($(div).attr('id') == "mt-output") {
        var txt = $(div).val();
      }
      else var txt = $(div).text();

      for(var i=0; i<mt_lib.length; i++) {
        // RegExp for word
        var curr = new RegExp('\\b' + mt_lib[i].w + '\\b', 'g');
        // Translate it!
        txt = txt.replace(curr,mt_lib[i].r)
        // console.log("replacing "+curr+" with "+mt_lib[i].r);
        console.log("txt is now: "+txt);
      }

    if($(div).attr('id') == "mt-output") {
      $(div).val(txt);
    }
    else $(div).text(txt);   
    }
  }
}

function mt_watch(mt_lib,inp,out) {
  $(inp).keyup(function() {
    $(out).val($(this).val());
    mt(library,$(out));
  });
}

// Watch all divs with '.mt-watch' and output to '.mt-'
// var watch = $(".mt-watch");
