 $().ready(function() {
  $("pre.run code").each(function(idx, el) {
    var button = $("<input class='run' type='button' value='실행하기' />").click(function() {
      $.globalEval($(el).text());
    });
    $(el).after(button);
  });
});