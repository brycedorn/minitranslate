// QUnit Testing suite
// 
// Sample library
var library = [
  {w : "Hello", r : "Goodbye"},
  {w : "World", r : "Mars"}
];

test("should initialize library correctly", function() {
  ok( library.length == 2, "Passed!" );
  ok( library[0].w == "Hello", "Passed!" );
  ok( library[0].r == "Goodbye", "Passed!" );
});

test("should stop if the div doesn't exist", function() {
  ok( $("#doesntexist").length == 0, "Passed!" );
  // ok( $("#test-static").length > 0, "Passed!" );
  mt(library,$("#doesntexist")); // Shouldn't cause issues
});

test("should stop if the library is empty", function() {
  var empty_lib = [];
  ok(empty_lib.length == 0, "Passed!" );
  mt(empty_lib,$("#test-static"));
});  

test("should work in static case", function() {
  ok($("#test-static").attr('class') == ".mt-translate", "Passed!" );
  ok($("#test-static").children().text() == "Hello World!", "Passed!" );
  mt(library,$("#test-static"));
  ok($("#test-static").children().text() == "/\bGoodbye\b/g World!", "Passed!" );
});

test("should work in dynamic case", function() {
  ok($("#test-watch").attr('class') == ".mt-watch", "Passed!" );
  ok($("#test-watch").children().text() == "Hello World!", "Passed!" );
  // mt(library,$("#test-watch"));
  // ok($("#test-watch").children().text() == "/\bGoodbye\b/g World!", "Passed!" );
});

test("should ignore those we want to ignore", function() {
  ok($("#test-ignore").attr('class') == ".mt-watch", "Passed!" );
  ok($("#test-ignore").children('h2').attr('class') == ".mt-ignore", "Passed!" );
  
  mt(library,$("#test-ignore"));

  // ok($("#test-ignore").children('h1').text() == "Goodbye Mars!", "Passed!" );
  ok($("#test-ignore").children('h2').text() == "Hello World, please ignore me!", "Passed!" );

  // mt(library,$("#test-ignore"));
  // ok($("#test-ignore").children().text() == "Hello World!", "Passed!" );
});

test("should apply to a lot of children", function() {
  ok(0==0, "Passed!" );
});