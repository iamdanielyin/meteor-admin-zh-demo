/**
 * 部门模型
 * Created by yinfx on 16年3月5日.
 */

/**
 * 集合声明
 * @type {Meteor.Collection}
 */
Posts = new Meteor.Collection('posts');

/**
 * 集合函数开放
 */
Posts.allow({
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
Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: '标题',
        max: 60
    },
    content: {
        type: String,
        label: '内容',
        autoform: {
            rows: 5
        }
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
 * 帖子视图定义
 * @type {{icon: string, label: string, tableColumns: *[], showEditColumn: boolean, showDelColumn: boolean, showWidget: boolean}}
 */
PostsView = {
    icon: 'comment',
    label: '帖子',
    tableColumns: [
        {label: '标题', name: 'title'},
        {label: '内容', name: 'content'}
    ],
    showEditColumn: true, // Set to false to hide the edit button. True by default.
    showDelColumn: true, // Set to false to hide the edit button. True by default.
    showWidget: true
};

