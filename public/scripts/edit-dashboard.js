$(document).ready(function() {
  $(function() {

//adding a new menu item
    $(() => {
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/dashboard/add",
        data: .serialize()
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });

  //removing a menu item from the menu
  //methodoveride to change to delete
    $(() => {
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/dashboard/delete",
        data: .serialize()
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });


//editing an existing menu item
//change POST to PUT using mehtod override
    $(() => {
      $.ajax({
        method: "POST",
        url: "/restaurant/:id/dashboard/edit",
        data: .serialize()
       // success:
      }).done((users) => {
    //function here
        }
      });;
    });


  })
});