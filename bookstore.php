<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="./css/bookstore.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div id="main-landingpage">
        <div id="box-3">
            <div id="landingpage__container">
                <div id="landingpage-logo">
                    <img src="./assets/logo.png" alt="">
                </div>
                <div id="landingpage-menu">
                    <ul>
                        <li><a href="index.php" style="text-decoration: none;color: black;">Cửa hàng</a></li>
                        <li><a href="./display/wheels.php" style="text-decoration: none;color: black;">Vòng Quay</a></li>
                        <!-- <li><a href="./display/product.php" style="text-decoration: none;color: black;">Sách</a></li> -->
                    </ul>
                </div>
            </div>
        </div>
        <div id="box-1"></div>
        <div id="box-2">
            <div id="landingpage__title">
                <span>BOOK</span>
                <span>STORES</span>
            </div>
        </div>
        <!-- <div id="box-3">
            <div id="landingpage__container">
                <div id="landingpage-logo">
                    <img src="" alt="">
                </div>
                <div id="landingpage-menu">
                    <ul>
                        <li>HOME</li>
                        <li>GAMES</li>
                        <li>STORE</li>
                    </ul>
                </div>
            </div>
        </div> -->
        <div id="box-4">
            <div id="landingpage__share-button">
                <div id="plus-btn">&#43;</div>
                <div id="msg">FOLLOW US</div>
                <div id="facebook"><a href="https://www.facebook.com/T.8.1.13.8.99/"><i class="fa fa-facebook"></i></a></div>
                <div id="instagram"><a href="https://www.instagram.com/t.8.1.13.8.99/"><i class="fa fa-instagram"></a></i></div>
                <div id="twitter"><i class="fa fa-twitter"></i></div>
            </div>
        </div>
    </div>
</body>
<script>
    $flag = 0;
    $('#plus-btn').click(function() {
        if ($flag == 0) {
            $('#plus-btn').css({
                'transform': 'rotate(45deg'
            });
            $('#msg').css({
                'top': '-50px'
            });
            $('#instagram').css({
                'top': '0px'
            });
            $('#facebook').css({
                'top': '0px'
            });
            $('#twitter').css({
                'top': '0px'
            });
            $flag = 1;
        } else {
            $('#plus-btn').css({
                'transform': 'rotate(0deg'
            });
            $('#msg').css({
                'top': '-3px'
            });
            $('#instagram').css({
                'top': '50px'
            });
            $('#facebook').css({
                'top': '50px'
            });
            $('#twitter').css({
                'top': '50px'
            });
            $flag = 0;
        }
    })
</script>

</html>