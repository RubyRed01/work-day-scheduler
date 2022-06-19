$(".saveentry").on("click",function(event){
event.preventDefault()
var timeBlock = $(this).attr("id").split("-")[0]
var userEntry = $("#"+timeBlock+"-txt").val()
console.log(timeBlock,userEntry)
})