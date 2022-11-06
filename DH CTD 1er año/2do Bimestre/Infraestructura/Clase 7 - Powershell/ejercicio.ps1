foreach($nombre in $(get-content -Path .\nombres.txt)){
	if($nombre -eq "Juan"){
		echo "Encontramos a Juan"
	} else {
		$OtroNombre++
	}
	Write-Output "El nombre de la persona es: $nombre"
	$gender=Invoke-RestMethod -Uri https://api.genderize.io/?name = $nombre | Select-Object -ExpandProperty Gender
	Write-Output "El género más asociado a ese nombre es: $gender"
	$country=Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Onject -First 1
	Write-Output "La nacionalidad de la persona es: $($country.country_id)"
}
Write-Output "La cantidad de personas que no son Juan es: "$OtroNombre