  var converter = new Showdown.converter();

  $(function() {

          $('a').click(function(){
                var href = $(this).attr('href');
                 $.ajax({
                    url: href,
                    dataType: 'text',
                    success: function(data) {   
                        $('body').html(converter.makeHtml(data));
                    }
                });
                
                return false;

           });
});
