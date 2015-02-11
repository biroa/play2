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
		el:el,
		disable: function(){
		    this.el.classList.add("disabled");
		},
		enable: function(){
		    this.el.classList.remove("disabled");
		},
		isDisabled: function(){
			return this.el.classList.contains("disabled");
		},
		activate: function(){
		    if(this.isDisabled()){
			return;
		    }
		    
		    this.el.classList.add("active");
		},
		deactivate: function(){
		    if(this.isDisabled()){
			return;
		    }
		    
		    this.el.classList.remove("active");
		},
		isActive: function(){
		    return this.el.classList.contains("active");
		},
		toggleAvtiveState: function(){
		    
		    if(this.isActive()){
			this.deactivate();
		    }else{
			this.activate();
		    }
		}    
	    };
    	    
	    items.push(item);
	    
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

    var toolbar = oojs.createToolbar("firstToolbar");
    var toolbarItem = toolbar.items[0];

    toolbarItem.getEnabled(true); // or fase
    toolbarItem.getEnabled();

    toolbarItem.enabled = true; // or fasle

    var enabled = toolbarItem.enabled;

*/