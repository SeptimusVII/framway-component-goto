module.exports = function(app){
    var Goto = Object.getPrototypeOf(app).Goto = new app.Component("goto");
    //Goto.debug = true;
    Goto.createdAt      = "2.0.0";
    Goto.lastUpdate     = "2.0.0";
    Goto.version        = "1";
    // Goto.factoryExclude = true;
    // Goto.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Goto.requires       = [];

    // Goto.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Goto;
}