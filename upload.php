<?php
header("Content-Type: application/json");// contenu de la réponse
  $headers = getallheaders();
  var_dump($headers);

  $source = file_get_contents('php://input');
  // on indique le type acccépté
  $types = Array('image/png', 'image/gif','image/jpeg', 'application/pdf');

  if(!in_array($headers['x-File-type'],$types)){
    $objet_json->error = 'Format non supporté';
  }else{
    // on stoke le fichier
    file_put_contents('img/'.$headers['x-File-name'], $source);
    $objet_json->name = $headers['x-File-name'];
    $objet_json->content = '<img src="img/'.$headers['x-File-name'].'"/>';

}
echo json_encode($objet_json);
 ?>
