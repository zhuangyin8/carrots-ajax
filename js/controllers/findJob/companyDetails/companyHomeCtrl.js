'use strict';
app.controller('companyHomeCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, commonUtil) {
        var vm = this;
        vm.id = $state.params.id;
        //跳转到本页面保持顶部
        commonUtil.scrollTo(0, 0);
        //公司详情
        jobService.getCompanyDescription(vm.id).then(function (res) {
            if (res.data.code == 0) {
                vm.data = res.data.data;
                vm.data.company.companyLable = JSON.parse(vm.data.company.companyLable);
            }
            else {
                console.warn("公司详情的 公司信息读取失败")
            }
        });
    }]);