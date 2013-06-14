
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.jqstudy = function(req, res){
  res.render(req.params.id, { title: 'jqstudy' });
};

exports.ajax_get_text = function(req, res){
  res.send("your name is " + req.query.name + ".\nthis is text data.");
}

exports.ajax_get_json = function(req, res){
  res.send({
    your_name: req.query.name
  });
}

exports.ajax_post_json = function(req, res){
  res.send({
    your_name: req.body.name
  });
}
