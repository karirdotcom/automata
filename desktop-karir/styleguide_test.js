var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/node_modules/phantomcss/phantomcss.js' );
var phantomcss = require( path );

var phantomcssConfig = {
  casper: casper,
  rebase: casper.cli.get( "rebase" ),
  libraryRoot: fs.absolute( fs.workingDirectory + '/node_modules/phantomcss/' ),
  screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots'),
  failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/failures'),
  addLabelToFailedImage: false,
  mismatchTolerance: 0.05
};

phantomcss.init(phantomcssConfig);

function checkScreenshots() {
  phantomcss.compareAll();
}

var host = 'http://www.staging.karir.com';

casper.test.begin('Styleguide Base', function(test) {
  var path = '/styleguide/base'
  casper.start(host + path, function() { this.scrollTo(0, 0); });
  casper.viewport( 1024, 768 );

  casper.then(function() { phantomcss.screenshot('#tad-button', 'blue-buttons' ); });
  casper.then(function() { phantomcss.screenshot('#tad-button-gray', 'gray-buttons' ); });
  casper.then(function() { phantomcss.screenshot('#tad-button-white', 'white-buttons' ); });
  casper.then(function() { phantomcss.screenshot('#tad-button-half', 'half-buttons' ); });
  casper.then(function() { phantomcss.screenshot('#tad-pagination', 'pagination-links' ); });
  casper.then(function() { phantomcss.screenshot('#tad-forms', 'form-fields' ); });
  casper.then(function() { phantomcss.screenshot('#tad-headers', 'headers' ); });
  casper.then(function() { phantomcss.screenshot('#tad-matte-content', 'matte-section-with-content' ); });
  casper.then(function() { phantomcss.screenshot('#tad-matte-yield', 'matte-section-with-yield' ); });
  casper.then(checkScreenshots);

  casper.run(function() {
    casper.test.done();
  });
});


casper.test.begin('Styleguide Global', function(test) {
  var path = '/styleguide/global'
  casper.start(host + path, function() { this.scrollTo(0, 0); });
  casper.viewport( 1024, 768 );

  casper.then(function() { phantomcss.screenshot('#tad-navigation', 'navigation' ); });
  casper.then(function() { phantomcss.screenshot('#tad-inline-login', 'inline-login' ); });
  casper.then(function() { phantomcss.screenshot('#tad-sign-in', 'sign-in' ); });
  casper.then(function() { phantomcss.screenshot('#tad-footer', 'footer' ); });
  casper.then(function() { phantomcss.screenshot('#tad-404', '404' ); });
  casper.then(function() { phantomcss.screenshot('#tad-500', '500' ); });
  casper.then(checkScreenshots);

  casper.run(function() {
    casper.test.done();
  });
});


casper.test.begin('Styleguide Page Specific', function(test) {
  var path = '/styleguide/page-specific'
  casper.start(host + path, function() { this.scrollTo(0, 0); });
  casper.viewport( 1024, 768 );

  casper.then(function() { phantomcss.screenshot('#tad-registration', 'registration' ); });
  casper.then(function() { phantomcss.screenshot('#tad-search', 'search' ); });
  casper.then(function() { phantomcss.screenshot('#tad-header', 'header' ); });
  casper.then(function() { phantomcss.screenshot('#tad-company-card', 'company-card' ); });
  casper.then(function() { phantomcss.screenshot('#tad-benefit-card', 'benefit-card' ); });
  casper.then(function() { phantomcss.screenshot('#tad-discover-card-mixed', 'discover-card-mixed' ); });
  casper.then(function() { phantomcss.screenshot('#tad-discover-card-half', 'discover-card-half' ); });
  casper.then(function() { phantomcss.screenshot('#tad-opportunity', 'opportunity' ); });
  casper.then(function() { phantomcss.screenshot('#tad-opportunity-from-employer', 'opportunity-from-employer' ); });
  casper.then(function() { phantomcss.screenshot('#tad-profile-card', 'profile-card' ); });
  casper.then(function() { phantomcss.screenshot('#tad-profile-card-company', 'profile-card-company' ); });
  casper.then(checkScreenshots);

  casper.run(function() {
    casper.test.done();
  });
});


casper.test.begin('Styleguide Mobile Specific', function(test) {
  var path = '/styleguide/mobile-specific'
  casper.start(host + path, function() { this.scrollTo(0, 0); });
  casper.viewport( 1024, 768 );

  casper.then(function() { phantomcss.screenshot('#tad-navigation', 'navigation' ); });
  casper.then(function() { phantomcss.screenshot('#tad-welcome-banner', 'welcome-banner' ); });
  casper.then(function() { phantomcss.screenshot('#tad-mobile-search', 'mobile-search' ); });
  casper.then(function() { phantomcss.screenshot('#tad-mobile-sign-in', 'mobile-sign-in' ); });
  casper.then(checkScreenshots);

  casper.run(function() {
    casper.test.done();
  });
});

