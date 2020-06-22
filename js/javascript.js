$(function(){
    $("#add").click(function(){
     var valueOfInput=$(".inputContainer>input").val();
     if( valueOfInput !==""){
   //making a new list element
   var task= $("<li></li>").text(valueOfInput);
   //adding the X to remove the task to the new element
   task.append("<button class='rem'><i class='fas fa-minus-circle'></i></button>")
   //adding the element to the list
   $("#tasks").append(task);
   //empty the input
   $(".inputContainer>input").val("");   
   $(".rem").click(function(){
    $(this).parent().remove();
   }) 
}
})
  


})