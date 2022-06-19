$(".saveentry").on("click",function(event){
event.preventDefault()
var timeBlock = $(this).attr("id").split("-")[0]
var userEntry = $("#"+timeBlock+"-txt").val()
console.log(timeBlock,userEntry)
localStorage.setItem(timeBlock, userEntry)

})

for(let i=9;i<=17;i++){
    var userPlan = localStorage.getItem(i)
    $("#"+i+"-txt").val(userPlan)
}