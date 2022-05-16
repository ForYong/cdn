let a = '123456'

window.myData = a

let html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <!-- <link rel="icon" href="./favicon.ico" /> -->
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,viewport-fit=cover">
  <title>123</title>
</head>

<body>
  <div id="app"></div>
</body>
<script type="module" src="./src/main.js" async></script>
</html>
`
document.write(html)
