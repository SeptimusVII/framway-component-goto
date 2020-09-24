module.exports = function(app){
    var Goto = Object.getPrototypeOf(app).Goto = new app.Component("goto");
    //Goto.debug = true;
    Goto.createdAt      = "2.0.0";
    Goto.lastUpdate     = "2.0.0";
    Goto.version        = "1";
    // Goto.factoryExclude = true;
    // Goto.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Goto.requires       = [];

    Goto.prototype.onCreate = function(){
        var goto = this;
        goto.$el.on('click',function(e){
            e.preventDefault();
            var target = $(this).data('goto').split(',');
            if (target.length == 1) target = target[0];else {
                $.each(target, function (index, item) {
                    if ($('#' + item).length) {
                        target = item;
                        return false;
                    }
                });
            }
            if ($('#' + target).length) {
                var scrollValue = $('#' + target).offset().top - ($('#header').outerHeight() || 0);
                $('body,html').animate({
                    scrollTop: scrollValue
                }, 600).promise().then(function(){
                // window.location.hash = '#' + target;
                // window.location.replace(window.location);
                });
            }
        });
    }
    return Goto;
}