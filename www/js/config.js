var TEMPLATES_PATH = '../templates/';

app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('tabs',{
            url:'/tabs',
            abstract: true,
            templateUrl : TEMPLATES_PATH + 'tabs.html'
        })
        .state('tabs.home',{
            url: '/home',
            views: {
                'home-tab': {
                    templateUrl: TEMPLATES_PATH + 'home.html',
                }
            }
        })
        .state('tabs.connections',{
            url: '/connections',
            views: {
                'connections-tab': {
                    templateUrl: TEMPLATES_PATH + 'connections.html',
                }
            }
        })
        .state('tabs.about', {
            url: '/about',
            views: {
                'about-tab': {
                    templateUrl: TEMPLATES_PATH + 'about.html',
                }
            }
        })
        ;
    $urlRouterProvider.otherwise('/tabs/home');
})

;