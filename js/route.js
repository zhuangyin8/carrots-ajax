'use strict';
app.config(projectRouteConfig);
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

    //更改url格式配置为html5，去掉#号
    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl',
            controllerAs: 'vm',
            abstract: true,
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/mainCtrl.js',
                    'css/main.css',
                    'js/directives/promise-button/promise.js',
                    'js/directives/promise-button/promise.css',
                    'js/constant/constant.js'

                ])
            }
        })
        //首页
        .state('app.home', {
            url: '/home',
            title: '首页',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/homeCtrl.js',
                    'css/home.css',
                    'jqcarouse'
                ])
            }
        })
        //关于我们
        .state('app.aboutUs', {
            url: '/aboutUs?status',
            title: '首页',
            templateUrl: 'views/aboutUs.html',
            controller: 'aboutUsCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/aboutUsCtrl.js',
                    'css/aboutUs.css'
                ])
            }
        })
        //找职位
        .state('app.findJob', {
            url: '/findJob?id',
            title: '找职位',
            templateUrl: 'views/findJob/findJob.html',
            controller: 'findJobCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/findJobCtrl.js',
                    'css/findJob/findJob.css',
                    'js/directives/upDownCarousel/upDownCarousel.css',
                    'js/directives/upDownCarousel/upDownCarousel.js'
                ])
            }
        })
        //找精英
        .state('app.findElite', {
            url: '/findElite',
            title: '找精英',
            templateUrl: 'views/findElite.html',
            controller: 'findEliteCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findEliteCtrl.js',
                    'charjs',
                    'jqcarouse',
                    'css/findElite.css'
                ])
            }
        })
        //人才详情
        .state('app.talentDetail', {
            url: '/talentDetail?id',
            title: '精英详情',
            templateUrl: 'views/talentDetail.html',
            controller: 'talentDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/talentDetail.css',
                    'js/controllers/talentDetailCtrl.js',
                    'charjs',
                    'kityminder'
                ])
            }
        })
        //推荐职位,最新职位搜索
        .state('app.jobList', {
            url: '/jobList?n&page&size&name',
            title: '职业推荐',
            templateUrl: 'views/jobList.html',
            controller: 'jobListCtrl',
            controllerAs: 'vm',
            cache: false,
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/jobListCtrl.js',
                    'css/jobList.css',
                    'notFind'
                ])
            }
        })
        //搜索(顶部边栏页面)
        .state('app.searchMain', {
            url: '/searchMain?id',
            title: '搜索侧边栏',
            templateUrl: 'views/findJob/searchMain.html',
            //controller: 'searchMainCtrl',
            //controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    //'js/controllers/findJob/searchMainCtrl.js',
                    'css/findJob/searchMain.css'
                ])
            }
        })

        //搜索职位
        .state('app.searchMain.searchJob', {
            url: '/searchJob?page&size&type&subType&name',
            title: '搜索职位',
            templateUrl: 'views/findJob/searchJob.html',
            controller: 'searchJobCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/searchJobCtrl.js',
                    'notFind'
                ])
            }
        })
        //搜索公司
        .state('app.searchMain.searchCompany', {
            url: 'searchCompany?page&size&name',
            title: '搜索公司',
            templateUrl: 'views/findJob/searchCompany.html',
            controller: 'searchCompanyCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/searchCompanyCtrl.js',
                    'notFind'
                ])
            }
        })

        //在招职位(切换公共部分)
        .state('app.companyMain', {
            url: '/companyMain?page&size&id&companyId',
            title: '在招职位',
            templateUrl: 'views/findJob/companyDetails/companyMain.html',
            controller: 'companyHomeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/companyDetails/companyHomeCtrl.js',
                    'css/findJob/companyDetails/companyMain.css'
                ])
            }
        })

        //公司页面主页
        .state('app.companyMain.companyHome', {
            url: '/companyHome',
            title: '公司主页',
            templateUrl: 'views/findJob/companyDetails/companyHome.html?page&size',
            controller: 'companyHomeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/companyDetails/companyHomeCtrl.js',
                    'css/findJob/companyDetails/companyHome.css'
                ])
            }
        })
        //公司页面职业页面
        .state('app.companyMain.hiringJobs', {
            url: '/hiringJobs',
            title: '在招职位',
            templateUrl: 'views/findJob/companyDetails/hiringJobs.html?page&size',
            controller: 'hiringJobsCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/companyDetails/hiringJobsCtrl.js',
                    'css/findJob/companyDetails/hiringJobs.css',
                    'css/findJob/companyDetails/companyHome.css',
                    'notFind'
                ])
            }
        })
        //职位介绍
        .state('app.jobDescription', {
            url: '/jobDescription?page&size&id',
            title: '职位详情',
            templateUrl: 'views/findJob/jobDescription.html',
            controller: 'jobDescriptionCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/jobDescriptionCtrl.js',
                    'css/findJob/jobDescription.css'
                ])
            }
        })
        //公司列表页
        .state('app.companyList', {
            url: '/companyList?page&size',
            title: '公司列表页',
            templateUrl: 'views/findJob/companyList.html',
            controller: 'companyListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJob/companyListCtrl.js',
                    'notFind'
                ])
            }
        })


}



