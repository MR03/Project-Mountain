require(['jquery', 'avalon', 'core', 'bootstrap', 'gritter'],function($, avalon, core, bootstrap, gritter){
    var thisModel = {
        all: function(callback) {
            var par = {
                op: 'all'
            };
            core.json('admin/advs', par, callback);
        },
        AdvsCreate: function(par ,callback) {
            var par = par;
            par.op = 'create';
            core.json('admin/advs', par, callback);
        }
    }

    var thisController = (function(){

        // 建立VM
        var VM = avalon.define({
            $id: 'Banner',
            list: []
        });
        var AdvsEditVM = avalon.define({
            $id: 'AdvsEdit',
            advsParam: {
                name: '',
                url: ''
            },
            FormSend: function(){
                thisModel.AdvsCreate(AdvsEditVM.advsParam, function(data){
                    if(data) {
                        jQuery.gritter.add({
                            title: '操作提示',
                            text: '您新建了广告：' + AdvsEditVM.advsParam.name,
                            sticky: false,
                            class_name: 'growl-primary'
                        });
                        render(VM);
                    }
                })
            }
        });
        avalon.scan();

        function render(vm) {
            thisModel.all(function(data){
                // 获得数据
                vm.list = data.banner;
            });
        };
        render(VM);

    }())

});