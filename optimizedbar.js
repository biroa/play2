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
	    toggleActiveState: function(){
		this.activated = !this.activated;
	    }
	};
	
	Object.defineProperties(item,{
	    el:{
		value:el
	    },
	    enabled:{
		get: function(){
		    return !this.el.classList.contains("disabled");
		},
		set: function(value){
		    if(value){
			this.el.classList.remove("disabled");
		    }else{
			this.el.classList.add("disabled");
		    }
		} 
	    },
	    activated:{
		get: function(){
		    return this.el.classList.contains("active");
		},
		set: function(value){
		    if(value){
			this.el.classList.add("active");
		    }else{
			this.el.classList.remove("active");
		    }
		}
	    }
	});
	
	return items;

};



    tobject.createToolbar = function (elementId){
	var element = document.getElementById(elementId);
	var items = element.querySelectorAll(".toolbar-item");
	
	return{
	    items: createToolbarItems(items)
	}
	
    }


    return tobject;
}( tobject || {} ));

//we add tobject to the func
//if tobject not exist we add an empty obj


/*
    Access of toolbar

    var toolbar = tobject.createToolbar("myToolbar");
    toolbar.items[0].disable();
    toolbar.items[0].isDisabled();
    toolbar.items[0].enable();
    toolbar.items[0].activate();
    toolbar.items[0].deactivate();
    toolbar.items[0].toggleActiveState();
    
    var toolbarItem = toolbar.items[0];

    toolbarItem.getEnabled(true); // or fase
    toolbarItem.getEnabled();

    toolbarItem.enabled = true; // or fasle

    var enabled = toolbarItem.enabled;

*/