<?php require_once'functions.php'; connect(); ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Facebook Like Pagination</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <script src="js/jquery.min.js"></script>

    <style>
        body{
            background: #cccccc;
            padding-top: 60px;
        }
        .container{
            background: #fff;
            padding: 10px;
            width: 500px;
            margin-bottom: 50px;
        }

        ul{
            list-style: none;
            /*background: teal;*/
            margin: 0 auto;
        }

       li:nth-child(odd){
            background: #ececec;
            /*padding-left: 20px;*/
            padding: 10px;
            font-size: 1.5em;
            color:#000;
            border-left: 2px solid #ececec;
        }

        li:nth-child(even){
            background: #00e6b2;
             /*padding-left: 20px;*/
             border-left: 2px solid #00e6b2;
             padding: 10px;
            font-size: 1.5em;
            color:#fff;
        }

        li:nth-child(odd):hover{
            border-left: 2px solid red;
        }
        li:nth-child(even):hover{
            border-left: 2px solid black;
        }

        


    </style>
</head>

<body>
    <div class="container">
        <div class="page-header">
            <h2>Current Countries</h2>
        </div>
        <?php $cnt = getCountries(0, 25) ?>
        <ul id="country">
             <?php foreach($cnt as $c): ?> 
                <li><?php echo $c['name']; ?></li>
             <?php endforeach ?>   
        </ul>
    </div>

    <script>
        $(window).scroll(function(){
            // console.log($(window).scrollTop());
            if($(window).scrollTop()== $(document).height()- $(window).height()){
                var ul = $('#country');
                var start = ul.children().length;
                // console.log(start); 

                // if(!ol.hasClass('ended')){

                // }

                $.post('ajax.php', {'start':start}, function(res){
                    if(res !== 'end'){
                        ul.append(res);
                    }else {
                        if(!ul.hasClass('ended')){
                            alert('No more result to show!!');
                            ul.addClass('ended');
                        }
                    } 

                

                });
            }
        });
    </script>

</body>
</html>