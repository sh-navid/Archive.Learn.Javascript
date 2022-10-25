<?php
    if($_GET['data']==true){
        $A=[10,12,14,16,18];
        echo implode(",",$A);
    }else{
        echo readfile("index.html")[0];
    }
?>
