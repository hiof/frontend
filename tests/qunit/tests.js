// ----------------------------------------------------------------------------------------------------
// Hiof frontend tests

$q(function() {

  QUnit.test("Check if the page is loaded", function() {
    ok($q('#qunit').is(':visible'));
  });


  QUnit.module("Add cover content to page");

  //QUnit.test("Check if cover-photo is added to the page", function(assert) {
  //  ok();
  //});



  QUnit.module("Tests for the study catalog");
  if ($q('#test-study-catalog').length) {
    $q('#test-study-catalog').load(function() {
      // Get the jQuery Object from the original code
      $ = window.frames[0].jQuery;
      test('Check if footable is loaded', function(assert) {
        // On start this is visible
        assert.ok($('#content table').length);
      });

      test('Check if the first study-program detail panel is open', function(assert){
        var done = assert.async();
        setTimeout(function() {
          //console.log($('tr.footable-detail-show'));
          assert.ok($('tr.footable-detail-show').length);
          done();
        }, 100);

      });


      test('Filter by bachelorprograms', function(assert){
        var done = assert.async();
        // Click on the bachelor-selector
        $('input[value="sttype_bachelor"]').trigger('click');
        setTimeout(function() {
          assert.ok($('table tr:visible').length === 36);
          $('input[value="sttype_bachelor"]').trigger('click');
          done();
        }, 100);
        //$("iframe").contents().find("a:first")
      });

      test('Filter by masterprograms', function(assert){
        var done = assert.async();
        // Click on the bachelor-selector
        $('input[value="sttype_master"]').trigger('click');
        setTimeout(function() {
          assert.ok($('table tr:visible').length === 11);
          $('input[value="sttype_master"]').trigger('click');
          done();
        }, 100);
        //$("iframe").contents().find("a:first")
      });



    });
  }
});
