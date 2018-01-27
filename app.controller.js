/** global angular **/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.singleTextRandom = [
      'Hello Angular',
      'Hello World!',
      'Watch Out!',
      'Hello Angular'
    ]
    // fucntion
    todoList.showText = function () {
      todoList.text = todoList.singleTextRandom[Math.floor((Math.random() * 3) + 0)]
    }
  })
