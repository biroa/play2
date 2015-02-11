//Immediately invoked function
//
var tobject = (function(tobject){

    var createToolbarItems = function(itemElements){
	var items = [];
	//we use itemElements as context becaue itemElements is a node list not 
	//an array so we would not get forEach for the node list. But if we give
	//the contest we can cheat it
	[].forEach.call(itemElements, function(el, index, array){
	    var item = {
		el:el
	    };

	})
	
	return items;

    }



    tobject.createToolbar = function (elementId){
	var element = document.getElementById(elementId);
	var items = element.querySelector(".toolbar-item");
	
	return{
	    items: createToolbarItems(items)
	}
	
	
    }


    return tobject;
})(tobject || {});

//we add tobject to the func
//if tobject not exist we add an empty obj


/*
    Access of toolbar

    var toolbar = oojs.createToolbar("firstToolbar");
    var toolbarItem = toolbar.items[0];

    toolbarItem.getEnabled(true); // or fase
    toolbarItem.getEnabled();

    toolbarItem.enabled = true; // or fasle

    var enabled = toolbarItem.enabled;

*/