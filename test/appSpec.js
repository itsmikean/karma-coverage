define(['app', 'jquery', 'underscore'], function(App, $, _) {

module( "group a" );
test( "a basic test example", function() {
  ok( true, "this test is fine" );
});
test( "a basic test example 2", function() {
  ok( true, "this test is fine" );
});
 
module( "group b" );
test( "a basic test example 3", function() {
  ok( true, "this test is fine" );
});
test( "a basic test example 4", function() {
  ok( true, "this test is fine" );
});
    module('just checking', {
		setup:function(){
			this.x = 1;
		}
    });
/*	test('works for app', function() {
			var el = $('<div></div>');

			var app = new App(el);
			app.render();

		expect(el.text()).toEqual('require.js up and running');
	});
*/
	test('works for underscore', function() {
		// just checking that _ works
		equal(_.size([1,2,3]), 3, "equals" );
//		expect(_.size([1,2,3])).toEqual(3);
	});
});
