myApp.controller('mainCtrl', function($scope, $location, $timeout, httpClient, headerItemsJson, menuItemsJson) {
    var vm = this;
    vm.user = {login: atob($.cookie('device_token').replace("==","")).split(":")[1]};
    vm.headerItems = headerItemsJson;
    vm.menuItems = menuItemsJson;
})

myApp.controller('translationCtrl', function($scope, $location, $timeout, httpClient, headerItemsJson, menuItemsJson) {
    var vm = this;
    
    vm.onTranslationFilterData = function(data){
        var obj = {
           page: "All",
        };
        data = data.documents;
        data.push(obj);
        return data
    }
    
    vm.onTranslationfilterSet = function(obj, scope){
        vm.gridParams = {};
        if(obj.originalObject.page != "All"){
            vm.gridParams["queryFilter"] = obj.originalObject.page
        }else{
             vm.gridParams["queryFilter"] = null;
        }
        $scope.$broadcast('updateGridData', {params: vm.gridParams});
    }

    vm.listCols = [
        {headerName: "Page", field: "page"},
        {headerName: "Type", field: "type"},
        {headerName: "English", field: "en"},
        {headerName: "Italian", field: "it"},
        {headerName: "Arabic", field: "ar"},
        {headerName: "Russian", field: "ru"},
        {headerName: "Spanish", field: "es"},
        {headerName: "Chinese", field: "ch"},
        {headerName: "Polish", field: "pl"},
        {headerName: "French", field: "fr"},
        {headerName: "Czech", field: "cs"},
        {headerName: "Swedish", field: "sv"},
        {headerName: "Farsi", field: "fa"},
        {headerName: "German", field: "gr"}
    ]

    vm.defaultCellRenderer = function(params){
       if(params.value){
            return '<span class="ag-cell-inner" tooltip-placement="auto" uib-tooltip="'+ params.value +'">'+params.value+'</span>'
        }else{
            return ''
        }
    }

});