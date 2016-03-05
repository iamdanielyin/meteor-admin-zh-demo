/**
 * 客户端默认配置文件
 * Created by yinfx on 16年3月4日.
 */
accountsUIBootstrap3.setLanguage('zh-CN'); // for Chinese (China)

/**
 * tabular中文配置
 */
$.extend(true, $.fn.dataTable.defaults, {
    language: {
        "lengthMenu": '显示 _MENU_ 项结果',
        "zeroRecords": '没有匹配结果',
        "info": '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
        "infoEmpty": '显示第 0 至 0 项结果，共 0 项',
        "infoFiltered": '(由 _MAX_ 项结果过滤)',
        "processing":'处理中...',
        "emptyTable":'表中数据为空',
        "search": '搜索',
        "paginate":{
            "first": "首页",
            "previous": "上页",
            "next": "下页",
            "last": "末页"
        }
    }
});