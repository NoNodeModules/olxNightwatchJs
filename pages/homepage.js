var homepageCommands = {
  setCityGurgaon: function () {
    var homepagePopularCitiesSection = this.section.regionsLayer.section.popularCities;
    this.click('@cityField');
    homepagePopularCitiesSection.click('@gurgaon');
    this.expect.element('@cityField').to.have.value.that.equals('Gurgaon');
    return this;
  }
};

//***************************************************
// Elements
//***************************************************

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  commands: [homepageCommands],

  elements: { cityField: '#cityField' },

  sections: {
    regionsLayer: {
      selector: '#regions-layer',

      sections: {
        searchBox: {
          selector: '#regionSearchBox',
          elements: { searchField: '#filterCities' }
        },
        popularCities: {
          selector: '#regions-layer>div[class="popular-cities clr"]',
          elements: { gurgaon: 'div[class="popular-cities clr"] a[data-name="Gurgaon"]' }
        }
      }
    },

    mainCategoryGrid: {
      selector: '#maincat-grid',
        elements: { mobiles: '#cat-1411' }
    }

  }

};

