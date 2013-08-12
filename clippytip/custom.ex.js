$([IPython.events]).on('notebook_loaded.Notebook', function(){
    
    
    require(['custom/clippytip/main']);

    IPython.toolbar.add_buttons_group([
        {
             'label'   : 'legacy-mode',
             'icon'    : 'icon-paper-clip', 
             'callback': function(){
                    $('#tooltip').attr('style','');
                    IPython.tooltip = new IPython.ClippyTip()
             }
        },{
             'label'   : 'normal-mode',
             'icon'    : 'icon-list-alt', 
             'callback': function(){
                 $('#tooltip').empty()
                 $('#tooltip').attr('style','');
                 IPython.tooltip = new IPython.Tooltip()
             }
        },
        ]);


});
