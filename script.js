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

createBookCard(book);}
else {
    console.log("form invalid");
    return;
}


}
function createBookCard(book){
   
const newBookCard=document.createElement("div");
newBookCard.className="card";
dataDisplay(book,newBookCard);
article.firstElementChild.insertBefore(newBookCard,article.firstElementChild.children[0]);
   mainClassList.remove("plus");
   mainClassList.add("minus");

}
function dataDisplay(book){

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