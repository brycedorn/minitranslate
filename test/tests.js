// QUnit Testing suite
var library = [{
  w: "Hello",
  r: "Goodbye"
}, {
  w: "World",
  r: "Mars"
}];

test("Initialize library correctly", function() {
  ok(library.length === 2, "Passed!");
  ok(library[0].w === "Hello", "Passed!");
  ok(library[0].r === "Goodbye", "Passed!");
  ok(library[1].w === "World", "Passed!");
  ok(library[1].r === "Mars", "Passed!");
});

test("Stop if the library is empty", function() {
  var empty_lib = [];
  ok(empty_lib.length === 0, "Passed!");
});

test("Work in static case", function() {
  ok($("#test-static").attr('class') === "mt-translate", "Passed!");
  ok($("#test-static").children().text() === "Goodbye Mars!", "Passed!");
});

test("Ignore those we want to ignore", function() {
  ok($("#test-ignore").attr('class') === "mt-translate", "Passed!");
  ok($("#test-ignore").children('h2').attr('class') === "mt-ignore", "Passed!");
  ok($("#test-ignore").children('h1').text() === "Goodbye Mars!", "Passed!");
  ok($("#test-ignore").children('h2').text() === "Hello World, please ignore me!", "Passed!");
});

test("Translate a div even if it's in an ignored div", function() {
  ok($("#test-dontignore").attr('class') === "mt-ignore", "Passed!");
  ok($("#test-dontignore").children('h1').text() === "Hello, don't translate me!", "Passed!");
  ok($("#test-dontignore").children('h2').text() === "Goodbye Mars, please translate me!", "Passed!");
});

test("Apply to a 2nd gen of children", function() {
  ok($("#test-family").attr('class') === "mt-translate", "Passed!");
  ok($("#test-family").children('h1').text() === "Goodbye Mars!", "Passed!");
  ok($("#foo").text().trim() === "Goodbye parent", "Passed!");
  ok($("#bar").text().trim() === "Third world", "Passed!");
  ok($("#test-family").children('h2').text() === "Goodbye Mars!", "Passed!");
});

test("Apply with weird capitalizations", function() {
  ok($("#test-caps").children('h1').text() === "GooDbye mArS!");
  ok($("#test-caps").children('h2').text() === "MARS!");
});

// Can't test dynamic case automatically - requires keyup event which jQuery can't simulate to my knowledge.
// Uses the same functions as button's case, so those test cases still apply.
test("Wait to apply if mt-patient on input div", function() {
  ok($("#test-patient").children('#mt-input').val() === "Hello World!");

  // Click button
  $("#mt-button").click();

  ok($("#test-patient").children('#mt-input').val() === "Hello World!");
  ok($("#test-patient").children('#mt-output').val() === "Goodbye Mars!");
});