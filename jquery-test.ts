const $p = $("p");

$("p").removeClass("myClass no Class").addClass("yourClass");
$("p").removeClass(["myClass", "no class"]);
$(["p", "t"]).text("hello");
$({ "hello": "woorld" });
$(["p", "3"])
$("").html(function(i: number) {
  console.log(this);
  return $(this).data('name') + 'is';
});