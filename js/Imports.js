module.exports = { 
    Discord: require("discord.js"),
    tmi: require("tmi.js"),
    request: require("request"),
    Canvas: require("canvas"),
    Store: require("data-store"),
    fs: require("fs"),
    Async: require("async"),
    Prototypes: require("./Prototypes.js"),
    GFun: require("./GlobalFunctions.js"),
    init: init()
}

function init() {
    "[Server]: Modules Imported".sendLog();
    return new Date();
}