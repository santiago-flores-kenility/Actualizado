foreach($nombre in $(get-content -Path .\nombres.txt)){

	if($nombre -eq "juan"){
		echo "Encontramos a Juan"
	} else {
		$OtroNombre++
	}	





	Write-Output "El nombre de la personsa es: $nombre"
	$gender= Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
	Write-Output "El genero mas asociado a este nombre es: $gender"
	$country= Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
	Write-Output "La nacionalidad de la persona es: $($country.country_id)"

}

Write-Output "La cantidad de personas que no son Juan es: $OtroNombre"