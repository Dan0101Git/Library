    //define dom
//flow on form submission
//(button[type="submit"])=>click-> addBookto library(if form validation passes(check from filled),else show formm invalidation insrtcutions)
 //3 actions to achieve, create books, udpate read,unread state and delete books
//buttons decleration
    const submit=document.querySelector("button[type='submit']"); //submit button
   
    const plusButton=document.querySelector(".add-book button"); //BUTTON TO VIEW FORM  
    const removeFormButton=document.querySelector(".remove-sidebar button"); //button to remove form

let crudAction;//to track state of action

    //main (cards and form)

    const mainClassList=document.querySelector("main").classList; 
    const datasetList=[];
    const article=document.querySelector("article");
    //array fro card items to be seen
    const cardDisplayArray=["title","author","pages"];
    //store image url's
    const imgArray=["3idiots","inception","interstellar2","udaan","whiplash"];
    //generate random url
    function generateRandomimgUrl(){
        return `images/movies/${imgArray[rand(imgArray.length)]}.jpg`;
    }
    //random function fro rotate background images
    function rand(num){
    return Math.floor(Math.random()*num);
    }


    //add event listerners to form buttons(add remove form sidebar and form submission)
    //change display to add form section(sidebar)
    plusButton.addEventListener("click",()=>{mainClassList.add("plus")
        mainClassList.remove("minus");
    });
    removeFormButton.addEventListener("click",(e)=>{
        e.preventDefault();
        mainClassList.remove("plus");
        mainClassList.add("minus");
    })

    //add delete functionality

    function detectCard(node){//to detect which card action has been taken(button  lcick or deletion request)
              let index=false;
        const filteredobject=  myLibrary.forEach((book)=>{
        if(book.id===node.getAttribute("data-set"))
            index=myLibrary.indexOf(book);
            return });
            return index;
    }

//action on ui(front end),send action to backend(my library array), library array instrcuts dom to update

//action 1, form submission
    //submit button click
    submit.addEventListener("click",actionFormSubmission)

function actionFormSubmission(e){
        //store input values
        let title=document.querySelector("input#title").value;
        let author=document.querySelector("input#author").value;
        let pages=document.querySelector("input#pages").value;
        let read=document.querySelector("input#read").value;
        e.preventDefault();//browser default server sending data prevention

        let book=makebook(title,author,pages,read);
        if(checkFormFilled(book)){
                //Add unique id to each  book
                addBookToLibrary(book);

                }
        return;
    }

        function checkFormFilled(book){
                        let flag=1;

                    const required=document.querySelectorAll("input[required]");
                    Array.from(required).forEach((node)=>{
                        if(!book[node.getAttribute("id")])//could have used dname attribute in html here 
                        {//if required fields are empty
                            node.classList.add("invalid");//toggle vlasses
                        flag=0;

                        console.log(Array.from(node.classList));
                        }
                            else{
                            //remove invalid property for next iteration

                            if(Array.from(node.classList).indexOf("invalid")+1){
                                console.log("invallid removed");
                                node.classList.remove("invalid");
                            
                            }
                }
                })
                            if(flag)//form submission allowed if required fields are not empty
                        return true;
                            else 
                        return false;
                            console.log(required);
                // bookKeys.forEach((key)=>{console.log(book[key])});
}



        //store book into array
    const myLibrary = [];
    //constructor for each book instance
    function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    }
    //add initial cards
    addBookToLibrary(makebook("The Man  Who Knew Infinity","Danish Nayyar",4234,"on"));
    addBookToLibrary(makebook("Subtle Art of not giving a f***","S.Ramanujan",234,"on"));
    addBookToLibrary(makebook("The Man  Who Knew Infinity","Danish Nayyar",4234,"on"));


    function makebook(title,author,pages,read){
                       return new Book(title,author,pages,read);//define instance and fill object (instance)

    }
//backend action functions
    function addBookToLibrary(book) {
                    //add data to card array
                     book.id=crypto.randomUUID();
                        myLibrary.push(book);//push to library if valid
                       
                  

                    render(book,"create")

    }
    //action 2
          function deleteCard(e){
            console.log("PASSODI")
        myLibrary.splice(detectCard(e.target.parentNode),1);//front end telling backendn to remove it from back end
        render(myLibrary);
       render(e.target.parentNode,"delete");
    } 
    //action 3
function bookRead(e){ //cahneg bok read unread state
let bookRead= myLibrary[detectCard(e.target.parentNode)];
let readButton=e.target;
let toggleRead;
console.log(bookRead);
        if(bookRead.read==="on"){
            bookRead.read="off";
                  toggleRead=0;
            render([readButton,toggleRead],"update");
         
      
            return;

        }
        if(bookRead.read==="off"){
             
            bookRead.read="on";
             toggleRead=1;
            render([readButton,toggleRead],"update");
        

           
        }
    
}
     article.addEventListener("click",(e)=>{
       console.log(e.target)
       if(myLibrary[0]){
       
               if(Array.from(e.target.classList).includes("read-button"));
            bookRead(e);
       }
     
    });
      article.addEventListener("click",(e)=>{
       if(myLibrary[0]){
        console.log( Array.from(e.target.classList));
        if(Array.from(e.target.classList).includes("delete-button"))
            deleteCard(e);
}
      });


     function createBookCard(book){
   const newBookCard=document.createElement("div");//.card div
        newBookCard.className="card";
    newBookCard.setAttribute("data-set",book.id)
datasetList.push(book.id);
    //card-image
    const cardImg=document.createElement("img");
    cardImg.className="card-image";
     cardImg.setAttribute("src",generateRandomimgUrl());

    //card-delete-button
    const deleteButton=document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent="---";
   

    //card-read button
        const readButton=document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent="Read";
   

   


const bookKeys=Object.keys(book);
    
        bookKeys.forEach((key)=>{
           
        if(cardDisplayArray.indexOf(key)===-1){
            console.log(cardDisplayArray.indexOf(key));
             return;
        }
            const cardNode=document.createElement("p");
                    cardNode.textContent=book[key];
                    cardNode.classList.add(`card-${key}`);
                    cardNode.classList.add("card-font");
                    newBookCard.appendChild(cardNode);
       
        });
         newBookCard.appendChild(readButton);
    newBookCard.appendChild(deleteButton);
        newBookCard.appendChild(cardImg);
    article.firstElementChild.insertBefore(newBookCard,article.firstElementChild.children[0]);
    mainClassList.remove("plus");
    mainClassList.add("minus");

    return;
    

    }
  
    function render(book,action){
        if(action==="delete"){
            book.remove();//book is node
        }
        else if(action==="create"){
            createBookCard(book);
        }
        else if(action==="update"){
            if(!book[1]){
                    book[0].classList.add("state-unread");
            book[0].textContent="UnRead"; 
            }
            else{
              book[0].classList.remove("state-unread");
                book[0].textContent="Read";
            }

        }
    }
