  function create(){    
// BELOW CODE IS JUST FOR RANDOMIZATION DO NOT EDIT OFTEN ^^^
     while(topnum > 0){ //loops over all 8 elements
        rando = Math.floor((Math.random() * topnum) + 0);
        //will swap elements as long as the random index we got is not the same as the current index  
        if(myArray[rando] !== myArray[topnum]){ 

          temporary = myArray[topnum];
          myArray[topnum] = myArray[rando]; //randomizes topindex value
          myArray[rando] = temporary;
        topnum--;
        } // end of if   
         else{
             topnum--;
         }
      };  //end of while    
// ABOVE CODE IS JUST FOR RANDOMIZATION DO NOT EDIT OFTEN ^^^

  
 //Below code will add images to array
        for(var i = 0; i < 8;i++){ //prints elements
           var imgElement = "<img src='" + myArray[i] + "' alt='test' width='200px' height='275px'/>";
           myCard[i].innerHTML = imgElement;

        }; //end of for loop
/* ****************   Below code will hide images after 3 seconds **********/
        setTimeout(function(){ 
           var holder = imgElement;
            for(var i = 0; i<8;i++){
           document.getElementsByTagName('img')[i].src = cardBack ;
            }//end of for loop
        }, 3000);
/* ***************    Above code will hide images after 3 seconds **********/

 //BELOW CODE IS WHERE THE PROBLEM IS: IMG SRC IS RETURNING NULL     
/*
        for(var i = 0; i < 8; i++){ //prints elements
              document.getElementsByTagName('img')[i].addEventListener("click", function(){
                console.log(myArray);
                this.src = myArray[i];
                console.log(this)  //source is null for some reason
              });

        }; //end of for loop which prints arrays  

        document.getElementsByTagName('img').forEach(addEventListener())
*/

        for (var a = 0; a<myArray.length;a++){
          document.getElementsByTagName('img')[a].title = a;
          console.log(document.getElementsByTagName('img')[a].title);
        }

/* NOTE: THE NEXT PIECE OF CODE CANNOT WORK IN A LOOP BECAUSE IT IS A USER
INPUT AND THUS OCCURS AFTER ALL ELEMENTS ARE LOADED AND RENDERED. FOR 
THE LOVE OF GOD DO NOT TAKE THIS OUT @ ALL FUTURE */


    document.getElementsByTagName('img')[0].onclick = function(){
    document.getElementsByTagName('img')[0].src = myArray[document.getElementsByTagName('img')[0].title];
        }

       document.getElementsByTagName('img')[1].onclick = function(){
    document.getElementsByTagName('img')[1].src = myArray[document.getElementsByTagName('img')[1].title];
        }

            document.getElementsByTagName('img')[2].onclick = function(){
    document.getElementsByTagName('img')[2].src = myArray[document.getElementsByTagName('img')[2].title];
        }

            document.getElementsByTagName('img')[3].onclick = function(){
    document.getElementsByTagName('img')[3].src = myArray[document.getElementsByTagName('img')[3].title];
        }

            document.getElementsByTagName('img')[4].onclick = function(){
    document.getElementsByTagName('img')[4].src = myArray[document.getElementsByTagName('img')[4].title];
        }

            document.getElementsByTagName('img')[5].onclick = function(){
    document.getElementsByTagName('img')[5].src = myArray[document.getElementsByTagName('img')[5].title];
        }
            document.getElementsByTagName('img')[6].onclick = function(){
    document.getElementsByTagName('img')[6].src = myArray[document.getElementsByTagName('img')[6].title];
        }
            document.getElementsByTagName('img')[7].onclick = function(){
    document.getElementsByTagName('img')[7].src = myArray[document.getElementsByTagName('img')[7].title];
        }


}; // end of create the elements dynamically on body load