Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/employment', {
  name: 'employment',
  template: 'Employment'
});
Router.route('/housing', {
  name: 'housing',
  template: 'Housing'
});
Router.route('/healthcare', {
  name: 'healthcare',
  template: 'Healthcare'
});
Router.route('/legal', {
  name: 'legal',
  template: 'Legal'
});
Router.route('/recovery', {
  name: 'recovery',
  template: 'Recovery'
});
