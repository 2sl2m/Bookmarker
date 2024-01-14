

 var bookmarkName = document.getElementById('bookmarkName')
 var bookmarkURL = document.getElementById('bookmarkURL')

var bookmarklist=[]
if (localStorage.getItem('bookmark')!=null){
    bookmarklist=JSON.parse(localStorage.getItem('bookmark'))
displaybookmark()
}



function getinputDatd(){
  var  bookmark ={
    Name :bookmarkName.value,
    URl : bookmarkURL.value
  }

  bookmarklist.push(bookmark)
  localStorage.setItem('bookmark',JSON.stringify( bookmarklist))
  displaybookmark()
  clear()
} 

 function displaybookmark(){
    var mark=``
  for (i=0 ; i < bookmarklist.length;i++){
    mark +=` 
    <tr>
    <td>${i}</td>
    <td>${bookmarklist[i].Name}</td>
    <td>${bookmarklist[i].URl}</td>
    
    <td>    <button class="btn btn-delete pe-2 bg-danger"   onclick="Delate(${i})" data-index="">
     <i class="fa-solid fa-trash-can"></i>  Delete </button>
 </td>


 </tr>
`    
  }

   document.getElementById('body').innerHTML= mark  
 }

function clear(){

    bookmarkName.value= ""
    bookmarkURL.value = ""
 }


 function Delate(index){

    bookmarklist.splice(index,1) 
  localStorage.setItem('bookmark',JSON.stringify( bookmarklist))

    displaybookmark()
  
 }



