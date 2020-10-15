let card = document.querySelectorAll('.fed__item-block');
let button = document.getElementsByClassName('button__buy');

function blockOff(params) {
   for (i = 0; i < card.length; i++) {
      card[i].classList.add("no_active");
      card[i].onclick = clickCard;
      card[i].addEventListener('mouseover', function () {
         if (this.classList.contains("active")) {
            this.classList.remove("mouseover");
         }

      });
      card[i].addEventListener('mouseout', function () {
         if (this.classList.contains("no_active")) {
            this.classList.remove("mouseover");
         }
         if (this.classList.contains("active")) {
            this.classList.add("mouseover");
        
         }
      });
   };
   for (i = 0; i < button.length; i++) {
      button[i].onclick = clickButton;
   };

   function clickCard(params) {
      let childParent = this.parentElement;
      let item = this.classList;
      if (!item.contains("lock")) {
         if (!item.contains("no_active")) {
            item.remove("active");
            item.add("no_active");
         } else {
            item.remove("no_active");
            item.add("active");

         }
      } else {
         childParent.children[1].classList.add("shake");
         setTimeout(function () {
            childParent.children[1].classList.remove("shake");
         }, 900);
      }
   };

   function clickButton(events) {
      events.preventDefault();
      let childParent = this.parentElement;
      let parentBlock = childParent.parentElement;
      let item = parentBlock.children[0].classList;
      if (!item.contains("lock")) {
         if (item.contains("no_active")) {
            item.add("active");
            item.remove("no_active");
         } else if (item.contains("active")) {
            item.remove("active");
            item.add("no_active");
         }
      } else {
         console.log(childParent);
      }
   };
};
blockOff();