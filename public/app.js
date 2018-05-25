import DefineMap from "can-define/map/map";
import route from 'can-route';
import "can-route-pushstate";

const AppViewModel = DefineMap.extend('App', {
  /**
   * @property {String} bitballs/app.page page
   * @parent bitballs/app.properties
   * Current page
   **/
  page: 'string'
});

route.register('{page}',{page: 'tournaments'});

export default AppViewModel;