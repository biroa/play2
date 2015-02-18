var tobject = (function (tobject) {

    //Constructor function
    var ToolbarItem = function (itemElement) {
        Object.defineProperty(this, "__el", {
            value: itemElement
        });
    };

    Object.defineProperties(ToolbarItem.prototype, {
        toggleActiveState: {
            value : function () {
                this.activated = !this.activated;
            },
            enumerable : true
        },
        enabled: {
            get: function () {
                return !this.__el.classList.contains("disabled");
            },
            set: function (value) {
                if (value) {
                    this.__el.classList.remove("disabled");
                } else {
                    this.__el.classList.add("disabled");
                }
            }
        },
        activated: {
            get: function () {
                return this.__el.classList.contains("active");
            },
            set: function (value) {
                if (value) {
                    this.__el.classList.add("active");
                } else {
                    this.__el.classList.remove("active");
                }
            }
        }

    });

    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {
            var item = new ToolbarItem(el);

            items.push(item);
        });

        return items;
    };

    var Toolbar = function (toolbarElement) {
        var items = toolbarElement.querySelectorAll(".toolbar-item");

        Object.defineProperties(this, {
            __el: {
                value: toolbarElement
            },
            items: {
                value: createToolbarItems(items),
                enumerable: true
            }
        });
    };

    Object.defineProperties(Toolbar.prototype, {
        add: {
            value: function (options) {
                var span = document.createElement("SPAN");
                span.className = "toolbar-item";

                this.__el.appendChild(span);

                var item = new ToolbarItem(span);

                this.items.push(item);
            },
            enumerable : true
        },
        remove: {
            value: function (index) {
                var len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("Index is out of range");
                }

                var item = this.items[index];
                this.items.splice(index, 1);

                this.__el.removeChild(item.__el);

                item = null;
            },
            enumerable : true
        },
        appendTo: {
            value: function (parentElement) {
                parentElement.appendChild(this.__el);
            },
            enumerable: true
        }
    });

    tobject.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);

        if (!element) {
            element = document.createElement("DIV");
            element.id = elementId;
            element.className = "toolbar";
        }

        return new Toolbar(element);
    };


    return tobject;
}(tobject || {}));

//we add tobject to the func
//if tobject not exist we add an empty obj


/******************
 Access of toolbar
 ***************************************************
 var toolbar = tobject.createToolbar("myToolbar");
 toolbar.items[0].enabled = false;
 toolbar.items[0].enabled = true;
 toolbar.items[0].activated = true;
 toolbar.items[0].activated = false;
 toolbar.items[0].toggleActiveState();
 ***************************************************
 * Add a new toolbar and add remove elements from there
 * *************************************************
 *  var anotherToolbar = tobject.createToolbar("toolbarName");
 *  anotherToolbar.appendTo(document.getElementById("myToolbar2"));
 *  anotherToolbar.add();
 *  anotherToolbar.remove(0);
 *  anotherToolbar.items[0].enabled = false;
 */