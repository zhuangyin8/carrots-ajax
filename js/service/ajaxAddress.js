'use strict';
app.factory('path', function ($http,$state) {
    return {
        //轮播article
        article_url: function (type) {
            return "/a/article/search?type="+type
        },
        //找职位分类
        jobList_url: function () {
            return "../service/jobList.json"
        },
        //公司列表
        companyList_url: function (type) {
            return "/a/company/search?returnPage="+type
        },
        //搜索职位
        searchJob_url: function (type) {
            return " /a/profession/search?recommend="+type
        },
        //职位详情
        jobDescription_url: function (id) {
            return "/a/profession/"+id
        },
        //公司详情
        companyDescription_url:function (id) {
            return "/a/company/"+id
        },
        //找精英我们的人才
        ourElite_url:function (talentLevel) {
            return "/a/talent/search?talentLevel="+talentLevel
        },
        //人才报告
        talentReport_url:function (talentId) {
            return "/a/appraisal/"+talentId
        },
        //人才头像获取
        talentAv_url:function (talentId) {
            return "/a/talent/"+talentId
        }
    }
});













