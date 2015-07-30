HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
  	Session.set('started', false);
  	Session.set('step', 0);
    this.render('Home');
  }
});
