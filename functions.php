<?php
	require_once'config.php';

	function connect(){
		$connection = mysql_connect(HOST, USER, PASS);
		if(mysql_select_db(DB)){
			return $connection;
		}else {
			echo mysql_error();
		}
	}

	function getCountries($start, $num){
		$sql = "SELECT * FROM country LIMIT $start, $num";
		$arr = array();
		$query = mysql_query($sql);

		while ($row = mysql_fetch_assoc($query)) {
			$arr[] = $row;
		}
		return $arr;
	}
?>