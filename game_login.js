
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

     localStorage.setYtem()
    
  //Establece "player1_name" usando la función localStorage.setItem()

  localtorage.setItem(player1_name,player1_name_input)



	  //Establece "player2_name" usando la función localStorage.setItem(



    localtorage.setItem(player2_name,player1_name_input)





    window.location = "game_page.html";
}

