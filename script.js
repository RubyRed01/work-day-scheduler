$(".saveentry").on("click",function(event){
event.preventDefault()
var timeBlock = $(this).attr("id").split("-")[0]
var userEntry = $("#"+timeBlock+"-txt").val()
console.log(timeBlock,userEntry)
localStorage.setItem(timeBlock, userEntry)

})
var currentDay = moment().format('ll'); 
$("#currentDay").text(currentDay)
var currentHour = moment().hours()

for(let i=9;i<=17;i++){
    var userPlan = localStorage.getItem(i)
    $("#"+i+"-txt").val(userPlan)
    if(currentHour < i){
        $("#"+i+"-txt").addClass("future")
    }else if(currentHour===i){
        $("#"+i+"-txt").addClass("present")
    }else {
        $("#"+i+"-txt").addClass("past")
    }

}