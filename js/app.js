$(document).ready(function() {
  update_lib(-1);
});

function update_lib(i) {
  $("#library").empty();
  if(i != -1) mt_lib.splice(i,1);
  content = $.map(mt_lib, function(entry,i) {
    return "<tr><td><h4>" + entry.w + "</h4></td><td><span style='padding:8px' class='glyphicon glyphicon-arrow-right'/></td><td><h4>" + entry.r + "</h4></td><td><h4 align='right'><button class='btn btn-warning' onclick=update_lib("+i+")><a>Remove</a></button></h4></td></tr>";
  });
  $("#library").append(content.join(""));
  $("#library").append("<tr><td><input type='text' class='form-control word-input' placeholder='Add a word'></input></td><td><span style='padding:8px' class='glyphicon glyphicon-arrow-right'/></td><td><input type='text' class='form-control replace-input' placeholder='Add its translation'></input></td><td><h4 align='right'><button class='btn btn-large btn-info add' onclick='add_word($(this))'><a>Add</a></button></h4></td></tr>");
}

function add_word(div) {
  // Get params and add
  var word = div.parent().parent().parent().find("input.word-input").val();
  var replace = div.parent().parent().parent().find("input.replace-input").val();
  
  // Check for valid
  if(!word.length < 1 && !replace.length < 1 && word != replace) { // Tooltip?
    mt_lib.push({w:word, r:replace});

    // Clear fields, we don't need them anymore
    div.parent().find("input.word-input").val("");
    div.parent().find("input.replace-input").val("");

    // Update_lib the view
    update_lib(-1);
  }
}