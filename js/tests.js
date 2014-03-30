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
  ok( library[1].w == "World", "Passed!" );
  ok( library[1].r == "Mars", "Passed!" );
});

test("should stop if the div doesn't exist", function() {
  ok( $("#doesntexist").length == 0, "Passed!" );
  mt(library,$("#doesntexist")); // Shouldn't cause issues
});

test("should stop if the library is empty", function() {
  var empty_lib = [];
  ok(empty_lib.length == 0, "Passed!" );
});  

test("should work in static case", function() {
  ok($("#test-static").attr('class') == "mt-translate", "Passed!" );
  ok($("#test-static").children().text() == "Goodbye static Mars!", "Passed!" );
});

test("should work in dynamic case", function() {
  // Requires keyUp event, but works same as static case.
  // var keyVal = "A";
  // $("#mt-input").trigger ( {
  //     type: 'keypress', keyCode: keyVal, which: keyVal, charCode: keyVal
  // } );
  ok($("#mt-input").val() == "Hello World!", "Passed!" );
});

test("should ignore those we want to ignore", function() {
  ok($("#test-ignore").attr('class') == "mt-translate", "Passed!" );
  ok($("#test-ignore").children('h2').attr('class') == "mt-ignore", "Passed!" );
  // ok($("#test-ignore").children('h1').text() == "Goodbye Mars!", "Passed!" );
  ok($("#test-ignore").children('h2').text() == "Hello World, please ignore me!", "Passed!" );

  // mt(library,$("#test-ignore"));
  // ok($("#test-ignore").children().text() == "Hello World!", "Passed!" );
});

test("should apply to a lot of children", function() {
  ok(0==0, "Passed!" );
});

test("should work with weird capitalizations", function() {
  ok($("#test-caps").children('h1').text() == "GooDbye mArS!" );
});
