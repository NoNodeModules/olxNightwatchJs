var expect = require('chai').expect;

module.exports = {

  'tags': ['homepage'],
  'Open homepage' : function (browser) {
    var homepage = browser.page.homepage();
    homepage
     .navigate()
     .verify.urlEquals('http://www.olx.in/');
    browser.pause(5000);
    browser.end();
  },

  'Verify the correct category is pre-selected on categories page' : function (browser) {
    var homepage = browser.page.homepage();
    var mobCategory = browser.page.mobiles_tablets();

    homepage
     .navigate()
     .setCityGurgaon()
     .section.mainCategoryGrid.click('@mobiles');
     browser.elements(mobCategory.elements.mainCategories.locateStrategy, mobCategory.elements.mainCategories.selector, function (res) {
       console.log(res);
       browser.elementIdAttribute(res.value[0].ELEMENT, 'class', function(elementClass) {
         expect(elementClass.value).to.equal('block rel parent selected ');
       });
     });
    browser.end();
  },

  'chai expect' : function (browser) {
    expect('this').to.equal('this');
  }

};
