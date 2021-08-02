(function($){
    var options = {
        // message : 'Déposez vos fichiers içi',
        script : 'upload.php',
        drag_succes_message : 'Drag and drop reussi'
    }
    $.fn.dropfile = function(ooptions){
          // if(ooptions) $.extend(options,ooptions);

          this.each(function(){
             // $('<span>').addClass('instructions').append(options.message).appendTo(this);

             $(this).bind({
                 dragenter: function(e){
                     e.preventDefault();
                     console.log('entré');
                 },
                 dragover: function(e){
                     e.preventDefault();
                     $(this).addClass('hover')
                     console.log('dragover');
                 },
                 dragleave: function(e){
                     e.preventDefault();
                     console.log('dragleave');
                 },
                 drop : function(e){
                     e.preventDefault(e);
                     var event = e.originalEvent;
                     // var files = e.dataTransfer.files;
                     var data = e.dataTransfer || (e.originalEvent && e.originalEvent.dataTransfer);
                     var files = e.target.files || (data && data.files);
                     if (files) {
                         upload(files, $(this), 0);
                     }
                 }
             });
          });
          function upload(files,area,index){
              var file = files[index];
              var xhr = new XMLHttpRequest();

              var formData = new FormData();

              // on va écouté l'événement d'upload
                xhr.addEventListener('load', function(e){
                  e.preventDefault();
                var json = jQuery.parseJSON(JSON.stringify(e.target.responseText));
                area.removeClass('hover');
                if(json.error){
                      alert(json.error);
                      // alert("format non supporte");
                      // const erreur = "format non supporte";
                      // dropfile.innerHTML = erreur;
                      return false;
                    }
                      area.append(json.content);

            });

              xhr.open('post', options.script, true);
              var boundary = Math.random();
              xhr.setRequestHeader('content-type',  'multipart/form-data; boundary='.boundary);
              // xhr.setRequestHeader("Content-Type", "Application/json");
              xhr.setRequestHeader('x-File-type', file.type);
              xhr.setRequestHeader('x-File-size', file.size);
              xhr.setRequestHeader('x-File-name', file.name);
              xhr.send(formData);

          }
    }
})(jQuery);
