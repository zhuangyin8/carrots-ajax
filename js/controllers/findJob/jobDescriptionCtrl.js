'use strict';
app.controller('jobDescriptionCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, commonUtil) {
        var vm = this;
        vm.id = $state.params.id;
        //跳转到本页面保持顶部
        commonUtil.scrollTo(0, 0);
        // 分享功能
        vm.share = function (type) {
            commonUtil.shareFn(type, vm.url, vm.jobDescription.data.companyName, vm.jobDescription.data.name, vm.jobDescription.data.logo)
        };
        //职位详情的职位详情
        vm.jobDescription = jobService.getJobDescription(vm.id).then(function (res) {
            if (res.data.code == 0) {
                vm.jobDescription = res.data;
                vm.companyId = res.data.data.companyId;
	            var host=window.location.host;
	            vm.url =" http://"+host+"/sharing-page/sharing-page.html?id=" + vm.jobDescription.data.id;
                //获取公司中的公司福利信息
                jobService.getCompanyDescription(vm.companyId).then(function (res) {
                    if (res.data.code===0) {
                        vm.jobDescription.data.boon = res.data.data.company.companyWelfare
                    }else {
                        console.warn("获取公司详情失败")
                    }
                })
            }
            else {
                console.warn("职位详情的职位详情读取失败")
            }
        });
    }]);