  function create(){    
// BELOW CODE IS JUST FOR RANDOMIZATION DO NOT EDIT OFTEN ^^^*********************************************************
     while(topnum > 0){ //loops over all 8 elements
        rando = Math.floor((Math.random() * topnum) + 0);
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
// ABOVE CODE IS JUST FOR RANDOMIZATION DO NOT EDIT OFTEN ^^^ *******************************************************

  
//Below code will add images to array *******************************************************************************
        for(var i = 0; i < 8;i++){ //prints elements
           var imgElement = "<img src='" + myArray[i] + "' alt='test' width='200px' height='275px'/>";
           myCard[i].innerHTML = imgElement;
        }; //end of for loop
//Below code will add images to array *******************************************************************************

/* ****************   Below code will hide images after 3 seconds ***************************************************/
        setTimeout(function(){ 
           var holder = imgElement;
            for(var i = 0; i<8;i++){
           document.getElementsByTagName('img')[i].src = cardBack ; //src must 
            }//end of for loop
        }, 3000);
/* ****************   Above code will hide images after 3 seconds ***************************************************/
 var myArrayOfIndexes = [];
// The Below code stores array indexes in html data attribute, used to later display images again ******************/

        for (var a = 0; a<myArray.length;a++){ 
          document.getElementsByTagName('img')[a].alt = a;      //will set alt equal to a num, and we use that num to get the src as an index of myArray
          myArrayOfIndexes[a] = a;
         // console.log(document.getElementsByTagName('img')[a].alt);
        }
// The Above code stores array indexes in html data attribute, used to later display images again ******************/
        
     
        //array.from is converting dom elements to an array
       Array.from(document.getElementsByTagName('img')).forEach(function(val){
     //     console.log(val);
          val.title = 0;  //set initially to false, onclick will make it true, this is later used to check if we have matches




           val.onclick = function(){
           this.src =  myArray[val.alt]; //sets src = myArray[index of value stored in 'data' attribute]
               this.title += 1; //note this adds it as a string because it is an html value, but it still works fine
                if(this.src === 'file:///Users/minimoe/Desktop/CardGame/Images/aceheart.png'){aceCheck(this.title,this);};
                if(this.src === 'file:///Users/minimoe/Desktop/CardGame/Images/kingheart.png'){kingCheck(this.title,this);};
                if(this.src === 'file:///Users/minimoe/Desktop/CardGame/Images/queenheart.png'){queenCheck(this.title,this);};
                if(this.src === 'file:///Users/minimoe/Desktop/CardGame/Images/tenheart.png'){tenCheck(this.title,this);};
             
             }; //closes onclick function
              

        }); //closes for each

}; // end of create the elements dynamically on body load