'use strict';
app.controller('talentDetailCtrl', ['$scope', '$state', 'commonUtil', 'jobService',
    function ($scope, $state, commonUtil, jobService) {
        var vm = this;
        //加载动画
        vm.loader = true;
        vm.talentId = +$state.params.id;
        //保持在顶部
        commonUtil.scrollTo(0,0)
        //chart常量
        vm.indicatro1 = [{text: '知识广度', max: 100}, {text: '知识深度', max: 100}, {text: '学习能力', max: 100}, {
            text: '理论基础',
            max: 100
        }];
        vm.indicatro2 = [{text: '抗压能力', max: 100}, {text: '自我管理', max: 100}, {text: '沟通能力', max: 100}, {
            text: '领导能力',
            max: 100
        }];
        // vm.indicatro3 = [{text: '业务知识', max: 100}, {text: '开发效率', max: 100}, {text: '流程规范', max: 100}, {
        //     text: '团队协作',
        //     max: 100
        // }];
        vm.size = [400, 300];
        vm.center = ['53%', '48%'];
        //从服务器获取数据
        jobService.getTalentReport(vm.talentId).then(function (res) {
            if (res.data.code === 0) {
                vm.data = commonUtil.changeTONumber2(res.data.data.appraisal);
                //转换chart数据
                vm.indicatro3 = commonUtil.changeReportPro2(vm.data.profession);
                //技能树渲染
                vm.data.skillExplain = JSON.parse(vm.data.skillExplain);
                var skillList = commonUtil.changeSkillTree(res.data.data.skillList, vm.data.skillExplain);
                vm.skillData = commonUtil.skillToJson(skillList);
                //转换数组
                vm.data.knowledge = JSON.parse(vm.data.knowledge);
                vm.data.professionQuality = JSON.parse(vm.data.professionQuality);
                vm.data.project = JSON.parse(vm.data.project);
                //url
                vm.url = 'http://www.luoboduo.com/talentDetail?id=' + vm.talentId;
                //加载完后不显示
                vm.loader = false;
            }
        });
        jobService.getTalentAv(vm.talentId).then(function (res) {
            vm.av = res.data.data.avatar||'';
            //console.log(vm.av)
        })
        vm.share = function (type) {
            commonUtil.shareFn2(type, vm.url, vm.data.name, vm.av)
        };
    }]);