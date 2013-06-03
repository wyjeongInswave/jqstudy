 $().ready(function() {
  $("xmp.run").each(function(idx, el) {
    var button = $("<input class='run' type='button' value='실행하기' />").click(function() {
      $.globalEval($(el).html());
    });
    $(el).wrap("<div class='source' />").after(button);
  });
});