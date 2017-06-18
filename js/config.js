if (typeof $ === 'undefined') {
    throw new Error('请先加载jQuery');
}
var app = angular.module('carrots', [
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'ui.router'
    //'ui.bootstrap',
    // 'ngMessages'
    //'ui.utils'
]);

app.config(httpConfig)
    .config(lazyLoadConfig)
    .config(loadingBar)
    .config(registerComponents)
    .run(['$rootScope', '$state', '$stateParams', '$window', '$cookies',
        function ($rootScope, $state, $stateParams, $window, $cookies) {

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //默认分页参数
                if (toParams.page != undefined) {
                    toParams.page = toParams.page || 1;
                }
                if (toParams.size != undefined) {
                    toParams.size = toParams.size || 10;
                }
            });
            $rootScope.$on('$viewContentLoading', function (event) {

            });
        }])
;

// Set lazy load module
function lazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/fsp-uploadThumb/fsp-uploadThumb-0.0.1.js'
                ]
            }, {
                name: 'datepicker',
                files: [
                    'js/directives/datepicker/datepicker.css',
                    'js/directives/datepicker/datepicker.js'
                ]
            }, {
                name: 'dndLists',
                files: [
                    'vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js'
                ]
            },
            {
                name: 'promiseButton',
                files: [
                    '/vendor/promise-button/directive.css',
                    '/vendor/promise-button/directive.js'
                ]
            },
            {
                name: 'numbericInput',
                files: [
                    '/vendor/numberic-input/directive.js'
                ]
            },
            {
                name: 'rzModule',
                files: [
                    '/vendor/angularjs-slider/rzslider.min.js',
                    '/vendor/angularjs-slider/rzslider.min.css'
                ]
            },
            {
                name: 'jqcarouse',
                files: [
                    'js/directives/jqbootstrap-carouse/jqbootstrap-carouse.css',
                    'js/directives/jqbootstrap-carouse/jqbootstrap-carouse.js'
                ]
            },
            {
                name: 'notFind',
                files: [
                    'js/directives/notFind/notFind.css',
                    'js/directives/notFind/notFind.js'
                ]
            },
            {
                name:'charjs',
                files: [
                    'js/directives/chartjs/chartjs.js',
                    'vendor/chartjs/echarts.min.js'
                ]
            },
            {
                name:'kityminder',
                files:[
                    '/js/directives/kityminder/kityminder.html',
                    '/vendor/kityminder-core/kity.js',
                    '/vendor/kityminder-core/kityminder.core.js',
                    '/vendor/kityminder-core/kityminder.core.css',
                    '/js/directives/kityminder/kityminder.js',

                ]
            }
        ]
    });
}

// Loader
function loadingBar(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 300;
}


function httpConfig($httpProvider) {
    // Set x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


    // Set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };


}

function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';
    // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}

//轮播图时间控制
function carouselConfig(time) {
    $('.carousel').carousel({
        interval: time // in milliseconds
    });
}