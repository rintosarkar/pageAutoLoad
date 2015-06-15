<?php 
	require_once'functions.php';
	connect();

	$start = $_POST['start'];
	$countries = getCountries($start, 5);

	$str ='';
	foreach ($countries as $c) {
		$str .= '<li><strong>'.$c['name'].'</strong></li>';
	}
	
	if(!empty($str)){
		echo $str;
	}else{
		echo "end";
	}

 ?>