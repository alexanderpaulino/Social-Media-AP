var id;
var interest1;
var interest2;
var interest3;
var interest4;

$.get("/api/user_data").then(function(data) {
  id = data.id;
  interest1 = data.interest1
  interest2 = data.interest2
  interest3 = data.interest3
  interest4 = data.interest4
})

$(".interestEditOne").click(function(){
  var categorySelection = $(this).text();
  console.log(categorySelection);

  if(categorySelection != interest2 && categorySelection != interest3 && categorySelection != interest4){
    $("member-interest1").text(categorySelection);

    $.post("/api/updateInterestsOne", {
      id: id,
      interest1: categorySelection
    }).then(function(data) {
      console.log("success")
    })
  }else{
  console.log("duplicate entry");
}
});


$(".interestEditTwo").click(function(){
  var categorySelection = $(this).text();
  console.log(categorySelection);

if(categorySelection != interest1 && categorySelection != interest3 && categorySelection != interest4){
  $.post("/api/updateInterestsTwo", {
    id: id,
    interest2: categorySelection
  }).then(function(data) {
    console.log("success")
  })
}else{
  console.log("duplicate entry");
}
});

$(".interestEditThree").click(function(){
  var categorySelection = $(this).text();
  console.log(categorySelection);

if(categorySelection != interest2 && categorySelection != interest1 && categorySelection != interest4){
  $.post("/api/updateInterestsThree", {
    id: id,
    interest3: categorySelection
  }).then(function(data) {
    console.log("success")
  })
} else{
  console.log("duplicate entry");
}
});


$(".interestEditFour").click(function(){
  var categorySelection = $(this).text();
  console.log(categorySelection);

if(categorySelection != interest2 && categorySelection != interest3 && categorySelection != interest1){
  $.post("/api/updateInterestsFour", {
    id: id,
    interest4: categorySelection
  }).then(function(data) {
    console.log("success")
  })
} else{
  console.log("duplicate entry");
}
});