//ace.require("ace/lib/net").get(document.baseURI, function(t){
//    editor.setValue(t, 1);
//})


    ace.require("ace/lib/net").get("editor.html", function(t){
        editor.setValue(t, 1);
    });