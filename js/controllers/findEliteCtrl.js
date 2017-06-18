'use strict';
app.controller('findEliteCtrl', ['$scope', '$rootScope', '$state', 'jobService','searchUtil',
    function ($scope, $rootScope, $state, jobService,searchUtil) {
        var vm = this;
        vm.params = $state.params;
        vm.params.size = 8;

        //logo 读取
        // jobService.getCompanyList(vm.params, 0).then(function (res) {
        //     if (res.data.code == 0) {
        //         vm.findElite = res.data;
        //
        //     }
        // });
        //banner读取
        jobService.getArticle(2).then(function (res) {
            if (res.data.code == 0) {
                vm.findEliteArticle = res.data;
                // //轮播图开始3s
                // carouselConfig(3000);
            }
        });
        //我们的人才读取
        var getOurElite = function (talentLevel) {
            jobService.getOurElite(talentLevel).then(function (res) {
                if (res.data.code===0) {
                    var eliteOld = searchUtil.changeToNumber(res.data.data);
                    vm.elite = searchUtil.changeToArry(eliteOld,'resultScore');
                }
            })
        };
        //初始人才
        vm.talentLevel = 0;
        //载入时先执行
        getOurElite(vm.talentLevel)
        vm.chooseTalentLevel = function (num) {
            vm.talentLevel = num;
            getOurElite(vm.talentLevel)
        };
        //echart配置参数
        vm.indicatro = [{text:'职业素养',max:100},{text:'技能评测',max:100},{text:'项目经验',max:100}];
        vm.start = -30;
        vm.size = [260,150]
    }]);