module("Ember.View - _parsePropertyPath");

test("it works with a simple property path", function() {
  var parsed = Ember.View._parsePropertyPath("simpleProperty");

  equal(parsed.path, "simpleProperty", "path is parsed correctly");
  equal(parsed.className, undefined, "there is no className");
  equal(parsed.falsyClassName, undefined, "there is no falsyClassName");
});

test("it works with a more complex property path", function() {
  var parsed = Ember.View._parsePropertyPath("content.simpleProperty");

  equal(parsed.path, "content.simpleProperty", "path is parsed correctly");
  equal(parsed.className, undefined, "there is no className");
  equal(parsed.falsyClassName, undefined, "there is no falsyClassName");
});

test("className is extracted", function() {
  var parsed = Ember.View._parsePropertyPath("content.simpleProperty:class");

  equal(parsed.path, "content.simpleProperty", "path is parsed correctly");
  equal(parsed.className, "class", "className is extracted");
  equal(parsed.falsyClassName, undefined, "there is no falsyClassName");
});

test("falsyClassName is extracted", function() {
  var parsed = Ember.View._parsePropertyPath("content.simpleProperty?class:falsyClass");

  equal(parsed.path, "content.simpleProperty", "path is parsed correctly");
  equal(parsed.className, "class", "className is extracted");
  equal(parsed.falsyClassName, "falsyClass", "falsyClassName is extracted");
});
