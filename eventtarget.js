var EventTarget = function(){
    Object.definePropertiey(this,"__listeners",{
        value: {}
    });
};

Object.defineProperties(EventTarget.prototype,{
    addListener:{
        value: function(type, listener){
            if(typeof this.__listeners[type] == undefined){
                this.__listeners[type]= [];
            }

            this.__listeners[type].push(listener);
        },
        enumerable:true
    },
    removeListener: {
        value: function(type,listener){
            var listeners = this.__listeners[type];

            if(typeof listeners == undefined){
                return;
            }
        },
        enumerable:true
    }
})

//addListener
//removeListener
//event object