module.exports = {
  //url: 'http://olx.in/mobiles-tablets/categories/'
  url: function() {
    return(this.api.launchUrl + '/mobiles-tablets/categories/');
  },

  elements: {
    mainCategories: '#leftMenu>li>a'
  }
};
