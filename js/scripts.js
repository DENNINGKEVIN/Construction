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

var finishedProducts = {
  tile: 600,
  sink: 8000,
  ceiling: 2000,
  paint: 4500

};

var equipment = {
  concrete: 120000,
  vibrator: 80000,
  spirit: 8000,
  shovels: 490

}

var buildingProducts = {
  sand: 38000,
  blocks: 38,
  slabs: 150,
  bars: 3800
}

var fittings = {
  pipe: 15,
  door: 250,
  window: 680
}

var electricAppliances = {
  electricPipe: 120,
  cable: 9000,
  sockets: 300,
  fuse: 450

}

var drainage = {
  drainagePipe: 1500,
  septic: 46000
}

var pricing = [];

function grandTotal() {
  var total = 0;
  var i = 0;

  for (i = 0; i < pricing.length; i++) {
    total += pricing[i];
  }
  return total;
}




$(document).ready(function () {

  $("button#btnSubmit").click(function (event) {
    event.preventDefault();
    var user = document.getElementById('btnSubmit').value;
    alert(user + "Hi! we've received your message, thank you for getting in touch with us");
    const Mailchimp = require('bae0665d0a18da9ad14765f40659c61c-us4');

    const mailchimp = new Mailchimp(myMailchimpAPI);

    mailchimp.post(`/lists/${myListId}/members`, {
      email_address: 'melissakobia1997@gmail.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Melissa',
        EMAIL: 'melissakobia1997@gmail.com',
        COMPANY: 'Construction'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    alert("you have completed");
  });


  $("button#tileBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityTile").val());
    var tilePrice = finishedProducts.tile;
    var total = tilePrice * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders'>"
      + "<td><span> Desert Floor Tile</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete").click(function () {
      $(".myOrders").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Tiles");
      $("#productOrdered").text("Desert Floor Tiles");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#tileForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });


  $("button#sinkBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity2").val());
    var sinkPrice = finishedProducts.sink;
    var total = sinkPrice * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders2'>"
      + "<td><span> Kitchen Sink</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete2' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    $("button#delete2").click(function () {
      $(".myOrders2").remove();
      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    pricing.push(total);

    $(".myOrders2").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Tiles");
      $("#productOrdered").text("Stainless steel kitchen sink");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#sinkForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#ceilingBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity3").val());
    var price = finishedProducts.ceiling;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders3'>"
      + "<td><span> Gypsum Ceiling</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete3' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete3").click(function () {
      $(".myOrders3").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders3").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Ceiling");
      $("#productOrdered").text("Nova Gypsum Ceiling");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#ceilingForm')[0].reset();


  });

  $("button#paintBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantity4").val());
    var price = finishedProducts.paint;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders4'>"
      + "<td><span> Vinyl Paint</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete4' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete4").click(function () {
      $(".myOrders4").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders4").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Paint");
      $("#productOrdered").text("Vinyl Paint");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#paintForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#concreteBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip1").val());
    var price = equipment.concrete;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders5'>"
      + "<td><span> Concrete Mixer</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete5' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete5").click(function () {
      $(".myOrders5").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders5").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Mixer");
      $("#productOrdered").text("Concrete Mixer");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#concreteForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#vibratorBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip2").val());
    var price = equipment.vibrator;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders6'>"
      + "<td><span> Vibrator</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete6' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete6").click(function () {
      $(".myOrders6").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders6").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Vibrator");
      $("#productOrdered").text("Vibrator");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#vibratorForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#spiritBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip3").val());
    var price = equipment.spirit;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders7'>"
      + "<td><span> Spirit-level</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete7' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete7").click(function () {
      $(".myOrders7").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders7").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Spirit-level");
      $("#productOrdered").text("Magnetic Spirit-level");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#spiritForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#shovelBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityEquip4").val());
    var price = equipment.shovels;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders8'>"
      + "<td><span> Shovels</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete8' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete8").click(function () {
      $(".myOrders8").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders8").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Shovels");
      $("#productOrdered").text("Shovels");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#shovelForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#sandBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild1").val());
    var price = buildingProducts.sand;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders9'>"
      + "<td><span> Sand</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete9' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete9").click(function () {
      $(".myOrders9").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders9").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Sand");
      $("#productOrdered").text("Sand");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#sandForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });


  $("button#blocksBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild2").val());
    var price = buildingProducts.blocks;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders10'>"
      + "<td><span> Blocks</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete10' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete10").click(function () {
      $(".myOrders10").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders10").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Blocks");
      $("#productOrdered").text("Blocks");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#blocksForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });


  $("button#slabsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild3").val());
    var price = buildingProducts.slabs;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders11'>"
      + "<td><span> Slabs</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete11' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete11").click(function () {
      $(".myOrders11").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders11").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Slab");
      $("#productOrdered").text("Slab");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#slabsForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });


  $("button#barsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityBuild4").val());
    var price = buildingProducts.bars;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders12'>"
      + "<td><span> Bars</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete12' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete12").click(function () {
      $(".myOrders12").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders12").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Bars");
      $("#productOrdered").text("Steel Twisted Bars");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#barsForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#pipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityFit2").val());
    var price = fittings.pipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders13'>"
      + "<td><span> Pipe supporters</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete13' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete13").click(function () {
      $(".myOrders13").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders13").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Pipe Supporters");
      $("#productOrdered").text("Pipe Supporters");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#pipeForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#doorBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityfit3").val());
    var price = fittings.door;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders14'>"
      + "<td><span> Door Fittings</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete14' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete14").click(function () {
      $(".myOrders14").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + newTotal);

    });

    $(".myOrders14").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Door Fittings");
      $("#productOrdered").text("Door Fittings");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#doorForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#windowBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityfit4").val());
    var price = fittings.window;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders15'>"
      + "<td><span> Window Fittings</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete15' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete15").click(function () {
      $(".myOrders15").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders15").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Window Fittings");
      $("#productOrdered").text("Window Fittings");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#windowForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#ePipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric1").val());
    var price = electricAppliances.electricPipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders16'>"
      + "<td><span> Electric Pipe</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete16' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete16").click(function () {
      $(".myOrders16").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders16").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Electric Pipe");
      $("#productOrdered").text("Electric Pipe");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#ePipeForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#cableBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric2").val());
    var price = electricAppliances.cable;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders17'>"
      + "<td><span> Cables</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete17' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete17").click(function () {
      $(".myOrders17").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders17").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Cable");
      $("#productOrdered").text("Cable");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#cableForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#socketsBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric3").val());
    var price = electricAppliances.sockets;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders18'>"
      + "<td><span> Sockets</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete18' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete18").click(function () {
      $(".myOrders18").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders18").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Sockets");
      $("#productOrdered").text("Sockets");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#socketsForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#fuseBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityElectric4").val());
    var price = electricAppliances.fuse;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders19'>"
      + "<td><span> Fuse</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete19' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete19").click(function () {
      $(".myOrders19").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders19").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Fuse");
      $("#productOrdered").text("Fuse");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#fuseForm')[0].reset();
    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#dpipeBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityDrain1").val());
    var price = drainage.drainagePipe;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders20'>"
      + "<td><span> Drainage Pipe</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete20' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete20").click(function () {
      $(".myOrders20").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders20").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Drainage Pipe");
      $("#productOrdered").text("Drainage Pipe");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#dpipeForm')[0].reset();

    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#septicBtn").click(function (event) {
    event.preventDefault();

    var inputQuantity = parseInt($("input#quantityDrain4").val());
    var price = drainage.septic;
    var total = price * inputQuantity;
    //alert(total);

    $("#newOrderList tbody").append("<tr class='myOrders21'>"
      + "<td><span> Septic Tank</span></td>"
      + "<td><span>" + total + "Kshs " + "</span></td>" + "<td> <button type='submit' id='delete21' class='btn btn-danger btn-sm'>" +
      "<span class='glyphicon glyphicon-remove'></span> Remove </button>" + "</td>"
      + "</tr>");

    pricing.push(total);

    $("button#delete21").click(function () {
      $(".myOrders21").remove();

      newTotal = grandTotal() - total
      pricing.pop(total)
      $("#totalPay").text("Kshs " + grandTotal());

    });

    $(".myOrders21").last().click(function () {
      $("#showOrders").show();

      $("#showOrders h2").text("Septic Tank");
      $("#productOrdered").text("Septic Tank");
      $("#quantityOrdered").text(inputQuantity);
      $("#totalPrice").text("Kshs  " + total);
    });

    $('#septicForm')[0].reset();

    $("#totalPay").text("Kshs " + grandTotal());


  });

  $("button#checkoutBtn").click(function (event) {
    event.preventDefault();

    alert("Thankyou, Your order had been recieved. Total amount to be paid is  Kshs " + grandTotal());

  });


























});
