<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Drag and Drop</title>
        <script src="jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="content" >
            <div class="dropfile">
              <p>Déposez vos fichiers içi</p>
                  <?php foreach(glob('img/*') as $file): ?>
                  <div>
                      <img src="<?php echo $file; ?>"/>
                  </div>
                  <?php endforeach; ?>
            </div>
    </div>
    <script type="text/javascript" src="dropfile.js"></script>
    <script type="text/javascript">
      jQuery(function($){
        $('.dropfile').dropfile();
      });
    </script>
  </body>
</html>
