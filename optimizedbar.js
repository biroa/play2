//Immediately invoked function
//
var tobject = (function (tobject) {

    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {

            var item = {
                toggleActiveState: function () {
                    this.activated = !this.activated;
                }
            };

            Object.defineProperties(item, {
                el: {
                    value: el
                },
                enabled: {
                    get: function () {
                        return !this.el.classList.contains("disabled");
                    },
                    set: function (value) {
                        if (value) {
                            this.el.classList.remove("disabled");
                        } else {
                            this.el.classList.add("disabled");
                        }
                    }
                },
                activated: {
                    get: function () {
                        return this.el.classList.contains("active");
                    },
                    set: function (value) {
                        if (value) {
                            this.el.classList.add("active");
                        } else {
                            this.el.classList.remove("active");
                        }
                    }
                }

            });

            items.push(item);

        });


        return items;
    };

    tobject.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);
        var items = element.querySelectorAll(".toolbar-item");

        return {
            items: createToolbarItems(items)
        };

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
 */