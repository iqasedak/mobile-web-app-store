APPStore = function(){

};

APPStore.APPSTORE_DOMAIN='http://10.0.2.2:8080/appstore';
APPStore.APPSTORE_LIST_URL=APPStore.APPSTORE_DOMAIN+'/webapp/list.json';

APPStore.prototype.load = function(callback){
    $.getJSON(APPStore.APPSTORE_LIST_URL, function(data){
        if(data.apps)
            callback(data.apps);
    });

};