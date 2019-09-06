$(document).ready(function () {
  $("#hover1").hover(function () {
    $("#show1").fadeToggle()
  });
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
  }
});
$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#myCarousel").carousel("next");
  });
});
$('.main').hover(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});

// bs logic
//Business Logic
$("#btnSubmit").click(function(event){
  var userName=$("#name").val();
  var userEmail=$("#email").val();
  var userMessage=$("#message").val();
/** user logic interface */
  if((userName!=="") && (userEmail !== "") && (userMessage !="")){
      alert(userName + " ,We have received your message.Thank you for reaching out to us");
  }
  else 
  {
      alert("Fill the form please");
  }
  event.preventDefault();
});



























