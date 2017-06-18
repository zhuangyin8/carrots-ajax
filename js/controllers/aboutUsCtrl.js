/**
 * Created by dell on 2016/8/17.
 */
app.controller('aboutUsCtrl', ['$scope', '$rootScope', '$state', 'commonUtil',
    function ($scope, $rootScope, $state, commonUtil) {
        var vm = this;
        commonUtil.scrollTo(0, 0);

        vm.toggle = $state.params.status !== "false";

        if ($state.params.status === "false" || undefined) {
            $('.table-phone').tab('show');
        } else {
            $('table-people').tab('show');
        }
    }
]);