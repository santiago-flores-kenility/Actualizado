-- 1. Crear una vista para poder organizar los envíos de las facturas. Indicar número
-- de factura, fecha de la factura y fecha de envío, ambas en formato dd/mm/yyyy,
-- valor del transporte formateado con dos decimales, y la información del
-- domicilio del destino incluyendo dirección, ciudad, código postal y país, en una
-- columna llamada Destino.
select FacturaID "Nº de factura", date_format(FechaFactura,'%d/%m/%Y') "Fecha factura", 
date_format(FechaEnvio,'%d/%m/%Y') "Fecha de envío", format(transporte,2) "Valor del transporte ($)",
concat(direccionenvio,", ",CiudadEnvio, ", ", CodigoPostalEnvio, ", ", PaisEnvio) Direccion from facturas;
-- 2. Realizar una consulta con todos los correos y el detalle de las facturas que
-- usaron ese correo. Utilizar la vista creada.
select * from correos
left join facturas on 
-- 3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna
-- alternativa o solución.
