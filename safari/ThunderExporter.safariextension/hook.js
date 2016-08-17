function onload(func) {
    if (document.readyState === "complete") {
        func();
    } else {
        window.addEventListener("load", func);
    }
}
function addJS(name){
    var s = document.createElement("script");
    s.src = safari.extension.baseURI + name + '.js';
    (document.body || document.head || document.documentElement).appendChild(s);
}
onload(function() {
    //把函数注入到页面中
    addJS("ThunderLixianExporter.user");
});