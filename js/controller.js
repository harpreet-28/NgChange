var myController = function myController() {
    var self = this;
    self.textBoxChange = function() {
        console.log('text value changed!!');
    }
}
angular
    .module('myApp')
    .controller('myController', myController);
