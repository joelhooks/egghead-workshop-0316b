angular.module('example', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  })


  .component('tabs', {
    transclude: true,
    controller: function() {
      var ctrl = this;

      ctrl.selectedTab = null;
      ctrl.registeredTabs = [];
      
      ctrl.selectTab = function(tab) {
        ctrl.selectedTab.selected = false;
        ctrl.selectedTab = tab;
        tab.selected = true;
      };

      ctrl.registerTab = function(tab) {
        if(!ctrl.selectedTab) {
          ctrl.selectedTab = tab;
          tab.selected = true;
        }
        ctrl.registeredTabs.push(tab);
      }
    },
    templateUrl: 'tabs.tpl.html'
  })

  .component('tab', {
    transclude: true,
    controller: function() {
      var ctrl = this;
      this.$onInit = function() {
        ctrl.tabsCtrl.registerTab(ctrl);
      }
    },
    require: {
      tabsCtrl: '^tabs'
    },
    bindings: {
      label: '@'
    },
    template: '<div ng-if="$ctrl.selected" ng-transclude></div>'
  })


  .component('simple', {
    template: '<h1>{{$ctrl.message}}</h1>',
    controller: function() {
      this.message = 'hello from controller'
    }
  })
;

