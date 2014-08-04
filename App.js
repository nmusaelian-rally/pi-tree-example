Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        var treeview = Ext.create('Ext.Container', {
            items: [{
                xtype: 'rallyportfoliotree',
                topLevelModel: 'portfolioitem/theme',
                topLevelStoreConfig: {
                    fetch: true,
                    context: {
                        workspace: "/workspace/12352608129", // NMDS
                        project : "/project/12352608219", // Company X
                        projectScopeDown: true
                    }
                }
            }]
        });
        this.add(treeview);
    }
});
