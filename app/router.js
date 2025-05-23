import EmberRouter from '@ember/routing/router';
import config from 'ember-notes/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route(
    'index',
    {
      path: '/',
    },
    function () {
      this.route('note', {
        path: '/note/:note_id',
      });
    },
  );
});
