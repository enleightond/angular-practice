<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Raw JS</title>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('[name=auto]').addEventListener('input', function (e) {
          document.querySelector('h1').innerHTML = e.target.value
        });
      });
    </script>
  </head>
  <body>
    <input type="text" name="auto" value="">
    <h1></h1>
  </body>
</html>