//define dom


const submit=document.querySelector("button[type='submit']");
const plusButton=document.querySelector(".add-book button");
const mainClassList=document.querySelector("main").classList;
const article=document.querySelector("article");


//change display to add form section(sidebar)
plusButton.addEventListener("click",()=>{mainClassList.add("plus")
    mainClassList.remove("minus");
});

//submit button click
submit.addEventListener("click",(e)=>{
    let title=document.querySelector("input#title").value;
    let author=document.querySelector("input#author").value;
    let pages=document.querySelector("input#pages").value;
    let read=document.querySelector("input#read").value;
e.preventDefault();


 
    addBookToLibrary(title,author,pages,read);
})









//store book into array
const myLibrary = [];

function Book(title,author,pages,read) {
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;

}

function addBookToLibrary(title,author,pages,read) {
//add data to card array
    const book=new Book(title,author,pages,read);
    console.dir(book);
  if(checkFormFilled(book)){myLibrary.push(book);
    //Add unique id to each  book
    book.id=crypto.randomUUID();
    console.log(book.id);

createBookCard(book);}
else {
    console.log("form invalid");
    return;
}


}
function createBookCard(book){
   
const newBookCard=document.createElement("div");
newBookCard.className="card";
newBookCard.classList.add(book.id);
//add delete button to card
const deleteButton=document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.textContent="X";
//add event listener to delete
deleteButton.addEventListener("click",deleteCard);
newBookCard.appendChild(deleteButton);

dataDisplay(book,newBookCard);
article.firstElementChild.insertBefore(newBookCard,article.firstElementChild.children[0]);
   mainClassList.remove("plus");
   mainClassList.add("minus");

return;

}
function dataDisplay(book,newBookCard){
    const bookKeys=Object.keys(book);
    let bookEntryCount=0;
    let flag=0;
     bookKeys.forEach((key)=>{
          bookEntryCount++;
      if(flag===1){
        return;
      }
          const cardNode=document.createElement("p");
                  cardNode.textContent=book[key];
        newBookCard.appendChild(cardNode);
      cardNode.classList.add("card-font");
              if(bookEntryCount<=2){
if(bookEntryCount===1){
    cardNode.classList.add("card-title");
}
else(cardNode.classList.add("card-author"));
          }
          else {
            flag=1;
            cardNode.textContent=`This book contains ${book["pages"]} pages and is ${book["read"]?"already read":"not read yet"}`;
          }

     });

}

//add delete functionality
function deleteCard(e){
   if(confirm("Delete this Book")){
    console.log(myLibrary);
    let index;
    const filteredobject=  myLibrary.filter((book)=>{
       if(book.id===e.target.parentNode.classList.value.slice(5,))
        index=myLibrary.indexOf(book);
        return book.id===e.target.parentNode.classList.value.slice(5,)});
    myLibrary.splice(index,1);
    e.target.parentNode.remove();
   console.log(myLibrary);


   }
} 

function checkFormFilled(book){
    let flag=1;
// const bookKeys=Object.keys(book);
const required=document.querySelectorAll("input[required]");
Array.from(required).forEach((node)=>{
    if(!book[node.getAttribute("id")])
    {
        node.classList.add("invalid");
       flag=0;

       console.log(Array.from(node.classList));
    }
    else{
          //remove invalid property
        if(Array.from(node.classList).indexOf("invalid")+1){
              console.log("invallid removed");
            node.classList.remove("invalid");
        
        }
    }
})
if(flag)
return true;
else 
return false;
console.log(required);
// bookKeys.forEach((key)=>{console.log(book[key])});
}