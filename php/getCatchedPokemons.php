<?php

    $data = '';
    for($i = 0; $i <=2; $i++ ) {
       $data .= formatCard();
    }
    echo $data;

function formatCard(){
  $html = "
  <div class='user-card'>
      <div class='user-content flex'>
        <div class='user-img'>
          <figure class='flex'>
              <img src='content/img/abra.png'>
          </figure>
          <div class='btn btn-primary'>
            See user
          </div>
        </div>
        <div class='user-card-description'>
          <figure>
              <img src='content/img/abra.png'>
          </figure>
          <figcaption>
            Desc
          </figcaption>
        </div>
      </div>
    </div>";
    return $html;
}
?>
