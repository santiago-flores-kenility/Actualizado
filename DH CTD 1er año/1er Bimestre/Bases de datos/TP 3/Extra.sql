set sql_mode="ONLY_FULL_GROUP_BY";
-- CONSIGNAS
-- 1. Reportar los productos (nombre en mayúsculas), stock, unidad de medida y precio (agregar el signo de la moneda). 
-- Ordenarlos por nombre de producto.
select upper(p.nombre) "Producto",p.stock, un.nombre "Unidad", concat("$",p.precio) "Precio" from producto p 
join unidad_medida un on p.unidad_medida_id = un.id
order by p.nombre;
-- 2.1 Reportar los productos (nombre en minúsculas), stock y las unidades de medidas sin importar si están 
-- o no asignadas a algún producto. Mostrar la leyenda –Sin Asignación- para los productos que figuren como nulos. 
-- Ordenarlos por el nombre de la unidad de medida.
Select coalesce(lower(p.nombre),"–Sin Asignación-") nombre, p.stock stock, un.nombre from producto p
right join unidad_medida un on p.unidad_medida_id = un.id;
-- 2.2 Modificar la consulta (2.1) para que muestre solamente los registros donde las unidades de medida 
-- aún no fueron asignadas a algún producto.
select coalesce(lower(p.nombre),"–Sin Asignación-"), stock, un.nombre from producto p 
right join unidad_medida un on p.unidad_medida_id=un.id where p.unidad_medida_id is null order by un.nombre;
-- 3.1 Listar todas las ventas mostrando el número de factura, nombre del producto, cantidad, 
-- importe y total facturado. Ordenarlo por número de factura.
select * from factura f 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id order by f.id;
-- 3.2 Modificar la consulta (3.1) para que muestre todas las ventas incluyendo a aquellos productos que aún no han sido vendidos. 
-- Finalmente, ordenarlo por número de Factura.
select * from factura f 
join factura_detalle fd on f.id = fd.factura_id
right join producto p on fd.producto_id = p.id order by f.id;
-- 4.1 Listar todas las ventas mostrando el número de factura, fecha, nombre completo del cliente, nombre del producto, 
-- cantidad, unidad de medida, importe y total facturado. Ordenarlo por el número de factura de mayor a menor.
select f.id "Nº de factura", f.fecha, concat(c.nombre, " ",c.apellido) Cliente, p.nombre Producto, 
fd.cantidad Cantidad, ud.nombre Unidad, fd.importe importe, f.total Total
from factura f 
join cliente c on f.cliente_id= c.id 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
join unidad_medida ud on p.unidad_medida_id = ud.id
order by f.id desc;
-- 4.2 Modificar la consulta (4.1) para que muestre todas las ventas incluyendo a aquellos productos 
-- que aún no han sido vendidos. Finalmente, ordenarlo por número de factura.
select f.id "Nº de factura", f.fecha, concat(c.nombre, " ",c.apellido) Cliente, p.nombre Producto, 
fd.cantidad Cantidad, ud.nombre Unidad, fd.importe importe, f.total Total
from factura f 
join cliente c on f.cliente_id= c.id 
join factura_detalle fd on f.id = fd.factura_id
right join producto p on fd.producto_id = p.id
join unidad_medida ud on p.unidad_medida_id = ud.id
order by f.id ;
-- 4.3 Modificar la consulta (4.1) para que muestre todas las ventas incluyendo a aquellos clientes 
-- que aún no han realizado alguna compra. Finalmente, ordenarlo por número de factura.
select f.id "Nº de factura", f.fecha, concat(c.nombre, " ",c.apellido) Cliente, p.nombre Producto, 
fd.cantidad Cantidad, ud.nombre Unidad, fd.importe importe, f.total Total
from  factura_detalle fd
join factura f on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
join unidad_medida ud on p.unidad_medida_id = ud.id
right join cliente c on f.cliente_id= c.id
order by f.id ;
-- 4.4 Modificar la consulta (4.1) para que muestre todas las ventas incluyendo a aquellos productos 
-- que aún no han sido vendidos y las unidades de medidas que aún no han sido asignadas a algún producto.
select f.id "Nº de factura", f.fecha, concat(c.nombre, " ",c.apellido) Cliente, p.nombre Producto, 
fd.cantidad Cantidad, ud.nombre Unidad, fd.importe importe, f.total Total
from  factura_detalle fd
join factura f on f.id = fd.factura_id
join cliente c on f.cliente_id= c.id
right join producto p on fd.producto_id = p.id
right join unidad_medida ud on p.unidad_medida_id = ud.id;
-- 5.1 Reportar los productos y cantidades que ha comprado cada cliente (id y nombre completo). 
-- Ordenar por cliente en forma descendente y por producto en forma ascendente.
select c.id,c.nombre, p.nombre, fd.cantidad
from
cliente c
join factura f on c.id = f.cliente_id
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
order by c.nombre desc,  p.nombre;
-- 5.2 Modificar la consulta (5.1) para que incluya aquellos clientes (id y nombre completo) que aún no han generado compras.
select c.id,c.nombre, p.nombre, fd.cantidad
from
factura f 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
right join cliente c on c.id = f.cliente_id
order by c.nombre desc,  p.nombre;
-- 6.2 Modificar la consulta (6.1) para que incluya aquellos productos que aún no han generado ventas. NO SE PUEDE...

-- 7.1 Reportar las ventas discriminando por fecha y cliente. Mostrar la fecha, nombre completo del cliente, 
-- cantidad de compras realizadas por día, recaudación total y la recaudación promedio. Finalmente, ordenar por la fecha de facturación y cliente.
select f.fecha, concat(c.apellido," ",c.nombre) Cliente, count(f.fecha), sum(f.total),avg(f.total)
from
factura f 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
join cliente c on c.id = f.cliente_id
group by f.fecha, c.id
order by f.fecha,  c.apellido;
-- 8.1 Listar la cantidad de productos comprados por cada cliente. Se debe mostrar el número de documento 
-- y el nombre completo del cliente y, la cantidad, el menor y mayor precio de los productos.
select c.documento_nro, concat(c.apellido," ",c.nombre) Cliente, p.nombre, sum(fd.cantidad), min(fd.importe), max(fd.importe)
from
factura f 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
join cliente c on c.id = f.cliente_id
group by c.id, p.id;
-- 8.2 Listar la cantidad de productos comprados por cada cliente (incluir aquellos que aún no han hayan realizado una compra). 
-- Se debe mostrar el número de documento y el nombre completo del cliente y, la cantidad, el menor y mayor precio de los productos.
select c.documento_nro, concat(c.apellido," ",c.nombre) Cliente, p.nombre, sum(fd.cantidad), min(fd.importe), max(fd.importe)
from
factura f 
join factura_detalle fd on f.id = fd.factura_id
join producto p on fd.producto_id = p.id
right join cliente c on c.id = f.cliente_id
group by c.id, p.id;
-- 9 Listar los productos y clasificar su stock. Mostrar el id y nombre del producto, el stock y su clasificación. 
-- Se debe clasificar como ‘Bajo’ cuando el stock es menor o igual a 5, ‘Medio’ cuando se encuentra entre 6 y 25, 
-- ‘Alto’ cuando es mayor a 25, y, ‘Sin Clasificación’ para algún otro rango.
select p.id, p.nombre, p.stock, 
case
when p.stock <=5 then "Bajo"
when p.stock between 6 and 25 then "Medio"
when p.stock > 25 then "Alto"
else "Sin clasificación"
end Clasificacion
from 
producto p;

-- 10 Listar los usuarios que tienen más de 32 años. Se debe mostrar el apellido, nombre y edad de cada uno.
select apellido, nombre, timestampdiff(year, fecha_nacimiento, curdate() ) edad
from usuario where timestampdiff(year, fecha_nacimiento, curdate() ) >32;
-- 11 Mostrar el email y edad del usuario más joven que tiene más de 35 años.
select email, timestampdiff(year, fecha_nacimiento, curdate() ) edad from usuario
where timestampdiff(year, fecha_nacimiento, curdate() )>35 order by timestampdiff(year, fecha_nacimiento, curdate() ) limit 1;
-- 12 Mostrar el precio del producto más caro.
select nombre, precio from producto order by precio desc limit 1;
-- 13 Mostrar el producto más caro. Se debe mostrar nombre y precio. Al precio agregarle el signo pesos.
select nombre, concat("$",precio) Precio from producto order by precio desc limit 1;