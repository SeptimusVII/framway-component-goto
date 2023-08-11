module.exports = function(app){
    var Goto = Object.getPrototypeOf(app).Goto = new app.Component("goto");
    //Goto.debug = true;
    Goto.createdAt      = "2.0.0";
    Goto.lastUpdate     = "2.4.1";
    Goto.version        = "1.1";
    // Goto.factoryExclude = true;
    // Goto.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Goto.requires       = [];

    Goto.prototype.onCreate = function(){
        var goto = this;
        goto.$el.on('click',function(e){
            e.preventDefault();
            var target = goto.getData('goto','').split(',');
            if (target.length == 1) target = target[0];else {
                for(var item of target){
                    if (document.getElementById(item)) {
                        target = item; break;
                    }
                }
            }
            if (document.getElementById(target)) 
                document.getElementById(target).scrollIntoView({behavior: "smooth",block:"center",inline:"nearest"}); 
        });
    }
    return Goto;
}