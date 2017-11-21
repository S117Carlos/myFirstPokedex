<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tags always come first -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Pokedex</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <link rel="stylesheet" href="content/css/general.css">
  <link rel="stylesheet" href="content/css/index.css">
</head>
<body>
  <?php include('components/menu.php'); ?>
  <!-- Recent Pokemon catches by user -->
  <section class="container flex flex-wrap space-around">
    <?php
      // TODO: Get the first five users from database
      include 'php/getCatchedPokemons.php';
      ?>
  </section>
</body>
</html>
