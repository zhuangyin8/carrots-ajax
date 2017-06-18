'use strict';
app.controller('homeCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, commonUtil) {
        var vm = this;
        vm.params = $state.params;

        //读取轮播图数据
        jobService.getArticle(0).then(function (res) {
            if (res.data.code == 0) {
                vm.homeArticle = res.data;
                //轮播图3s
                // carouselConfig(3000);
            }
        });
        //读取最新职位并拆分
        jobService.getSearchJob(vm.params).then(function (res) {
            if (res.data.code == 0) {
                if (res.data.data.length !== 0) {
                    vm.SearchJobList = commonUtil.newJobRule(res.data.data);
                    // 轮播图3s
                    carouselConfig(3000);
                }
            }
        });
    }]);