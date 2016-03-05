/**
 * 部门模型
 * Created by yinfx on 16年3月5日.
 */

/**
 * 集合声明
 * @type {Meteor.Collection}
 */
Depts = new Meteor.Collection('depts');

/**
 * 集合函数开放
 */
Depts.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

/**
 * 数据结构绑定
 */
Depts.attachSchema(new SimpleSchema({
    code: {
        type: String,
        label: '编码'
    },
    name: {
        type: String,
        label: '名称'
    },
    createdAt: {
        type: Date,
        label: '创建日期',
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
}));

/**
 * 部门视图定义
 * @type {{label: string}}
 */
DeptsView = {
    icon: 'suitcase',
    label: '部门',
    tableColumns: [
        {label: '编码', name: 'code'},
        {label: '名称', name: 'name'}
    ],
    showEditColumn: true, // Set to false to hide the edit button. True by default.
    showDelColumn: true, // Set to false to hide the edit button. True by default.
    showWidget: true
};