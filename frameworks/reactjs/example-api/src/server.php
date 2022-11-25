<?php

// To run server
// php -S 0.0.0.0:4000 .\server.php


// $data = $_GET["data"];
// echo $data;

$data = array(
    array(
        "question"  =>  "What is the capital of Iran?",
        "answers"   =>  array("Tehran", "Paris"),
        "correct"   =>  0,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of England?",
        "answers"   =>  array("Manhatan", "Tokio", "London"),
        "correct"   =>  2,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of Japan?",
        "answers"   =>  array("Manhatan", "London", "Tokio", "Tehran"),
        "correct"   =>  2,
        "selected"  => -1
    )
);

if(stripos($_SERVER['REQUEST_URI'], '/data' )!==false){
    //echo file_get_contents("./index.html");
    echo json_encode($data);
}else{
    echo "<h1>Hello from PHP server</h1>";
}