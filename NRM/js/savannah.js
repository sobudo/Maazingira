// function allowDrop(ev) {
// ev.preventDefault();
// }

// function drag(ev) {
// ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
// ev.preventDefault();
// var data = ev.dataTransfer.getData("text");
// ev.target.appendChild(document.getElementById(data));
// }

var f = function() {

  function Draggable(element, dragStart, dragDrop) {
    this.element = element;
    this.dragStart = dragStart;
    this.dragDrop = dragDrop;

    this.element.classList.add('draggable');
    var self = this;

    var move = function(event) {
      if (self.dragStart !== undefined) {
        self.dragStart();
      }
      //don't bubble this event - mousedown
      event.stopPropagation();
      //prevent any default action
      event.preventDefault();

      var originalLeft = parseInt(window.getComputedStyle(this).left);
      var originalTop = parseInt(window.getComputedStyle(this).top);

      var mouseDownX = event.clientX;
      var mouseDownY = event.clientY;

      function dragMe(event) {
        self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
        self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
        event.stopPropagation();
      }

      function dropMe(event) {
        document.removeEventListener('mousemove', dragMe, true);
        document.removeEventListener('mouseup', dropMe, true);
        if (self.dragDrop !== undefined) {
          self.dragDrop();
        }
        event.stopPropagation();
      }

      document.addEventListener('mouseup', dropMe, true);
      document.addEventListener('mousemove', dragMe, true);

    };

    this.element.addEventListener('mousedown', move, false);

  }

  var dragStart = function() {
    this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * 1.3 + "px";
  }
  var dragDrop = function() {
    this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * (100 / 130) + "px";
  }




  var imageElement1 = document.getElementsByTagName('img')[0];
  var imageElement2 = document.getElementsByTagName('img')[1];
  var imageElement3 = document.getElementsByTagName('img')[2];
  var imageElement4 = document.getElementsByTagName('img')[3];
  var imageElement5 = document.getElementsByTagName('img')[4];
  var imageElement6 = document.getElementsByTagName('img')[5];
  var imageElement7 = document.getElementsByTagName('img')[6];
  var imageElement8 = document.getElementsByTagName('img')[7];
  var imageElement9 = document.getElementsByTagName('img')[8];

  var dragObject1 = new Draggable(imageElement1, dragStart, dragDrop);
  var dragObject2 = new Draggable(imageElement2, dragStart, dragDrop);
  var dragObject3 = new Draggable(imageElement3);
  var dragObject4 = new Draggable(imageElement4);
  var dragObject5 = new Draggable(imageElement5);
  var dragObject6 = new Draggable(imageElement6);
  var dragObject7 = new Draggable(imageElement7);
  var dragObject8 = new Draggable(imageElement8);
  var dragObject9 = new Draggable(imageElement9);



};

window.addEventListener('load', f, false);
