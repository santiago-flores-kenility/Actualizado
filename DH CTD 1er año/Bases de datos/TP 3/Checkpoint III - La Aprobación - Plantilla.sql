
-- ================= BASE DE DATOS I - PROYECTO - LA APROBACION ================== --
-- =============================== CHECKPOINT III ================================ --
-- Base de datos: la_aprobacion.sql
-- Equipo N°: 10
-- Integrantes: Juan Pablo Cediel, Sara Alvarado, Carolina Cáceres, Gustavo Dagoberto

set sql_mode="ONLY_FULL_GROUP_BY";

-- 1. Listar los servicios básicos de la habitación número 25.

-- rows: 4

select sb.nombre as servicios_basicos_habitacion_25
from habitacion_x_servicio_basico hsb
inner join servicio_basico sb
on hsb.servicio_basico_id = sb.id
where hsb.habitacion_numero = 25;

-- 2. Listar absolutamente todos los servicios básicos y la cantidad de habitaciones en las que están instalados. Mostrar solo el nombre del servicio básico y cantidad

-- rows:11

select sb.nombre as servicio_basico, count(hsb.habitacion_numero) as cantidad_de_habitaciones_instalado
from servicio_basico sb
left join habitacion_x_servicio_basico hsb
on sb.id = hsb.servicio_basico_id
group by sb.nombre;

-- 3. Listar todos los huéspedes que tengan tres o más check-in. Mostrar el número de huésped, apellido y nombre separado por un espacio dentro de una misma columna denominada "Cliente" y, la cantidad de check-in que posee.

-- rows: 23

select concat(h.id, " ", h.apellido, " ", h.nombre) as Cliente, count(c.id) as Numero_de_checkin_por_cliente
from huesped h 
inner join checkin c
on h.id = c.huesped_id
group by h.id
having Numero_de_checkin_por_cliente >= 3;


-- 4. Listar todos los huéspedes que no tengan un check-in. Mostrar el número de huésped, apellido y nombre en mayúsculas dentro de una misma columna denominada "huésped sin check-in".

-- rows: 16

select concat(h.id, '   ', h.apellido, '  ', h.nombre) as 'huesped sin checkin'
from huesped h
left join checkin c on c.huesped_id = h.id
where c.id is null;


-- 5. Listar todos los huéspedes que tengan al menos un check-in que corresponda a la habitación de clase 'Classic'. Se debe mostrar el número de huésped, apellido, nombre, número de habitación y la clase.

-- rows: 18

select h.id, h.apellido, h.nombre, ha.numero, cl.nombre, count(c.id) as numero_reservas_classic
from huesped h
inner join checkin c
on h.id = c.huesped_id
inner join habitacion ha
on ha.numero = h.id
inner join clase cl
on ha.clase_id = cl.id
group by h.id
having  cl.nombre = "Classic" and numero_reservas_classic >= 1;


-- 6. Listar los huéspedes que tengan una o más reservas y que en la segunda letra de su apellido contenga una "u". Se debe mostrar el número de huésped, apellido, nombre, nombre del servicio.
-- rows: 10

select  r.huesped_id, h.apellido, h.nombre, se.nombre 
from huesped h
inner join reserva r on r.huesped_id = h.id
inner join servicio_extra se on se.id = r.servicio_extra_id
where h.apellido like '_u%';



-- 7. Listar absolutamente todos los países y la cantidad de huéspedes que tengan.
-- rows: 4



select  p.nombre, count(h.nombre)
from pais p 
inner join huesped h on p.id = h.pais_id 
group by p.nombre;



-- 8. Calcular el importe total y la cantidad de reservas realizadas en el mes de marzo por cada huésped. Mostrar el apellido del huésped, importe total y cantidad de reservas.
-- rows: 47

select h.apellido, h.nombre, sum(r.importe) as importe_total, count(r.id) as cantidad_reservas
from huesped h 
inner join reserva r on r.huesped_id = h.id
group by h.apellido, h.nombre;



-- 9. Calcular el importe total recaudado por mes (fecha de entrada) para la habitación número 22. Mostrar el número de habitación, nombre de la decoración, clase, nombre del mes y el importe total.
-- rows: 3

select h.numero as numHab, d.nombre as decoracion, cl.nombre, monthname(fecha_entrada) as mes, sum(c.importe)
from checkin c
inner join habitacion h on c.habitacion_numero = h.numero
inner join decoracion d on d.id = h.decoracion_id
inner join clase cl on cl.id = h.clase_id
where h.numero = 22
group by mes, numHab,decoracion;



-- 10. Determinar la recaudación total por país para las habitaciones número 5, 10 y 22. Mostrar nombre del país, número de habitación y el total recaudado.
-- rows:8

select p.nombre País, h.numero Habitación, sum(c.importe) Recaudación
from habitacion h
join checkin c on h.numero = c.habitacion_numero
join huesped hs on c.huesped_id = hs.id
join pais p on hs.pais_id = p.id
group by p.id,h.numero having  h.numero in (5,10,22)
order by p.nombre, h.numero;


-- 11. Calcular la recaudación total de cada forma de pago para las reservas. Mostrar la forma de pago y el total.
-- rows: 4
select fp.nombre "Forma de pago", concat("$",sum(r.importe) ) "Recaudación Total"
from reserva r
join forma_pago fp on r.forma_pago_id = fp.id
group by r.forma_pago_id; 

-- 12. Listar los empleados del sector 'administración' que su país de origen sea 'Argentina'. Mostrar el número de legajo, apellido, 
-- la primera inicial del primer nombre y un punto, nombre de su país de origen y el nombre del sector. 
-- rows:3
select e.legajo, e.apellido, concat(left(e.nombre,1),".") "Inicial primer nombre",p.nombre "País", s.nombre "Sector"
from sector s 
join empleado e on s.id = e.sector_id
join pais p on e.pais_id = p.id
where s.nombre="Administración" and p.nombre="Argentina"
;


-- 13. Listar todos los servicios básicos que tienen las habitaciones (desde la 20 hasta la 24) y su clase. Mostrar número de habitación, 
-- clase y el nombre de los servicios básicos. Ordenar por número de habitación y servicio.
-- rows: 28
select h.numero"Habitación Nº", c.nombre Clase,s.nombre Servicio 
from habitacion h
join habitacion_x_servicio_basico hs on h.numero = hs.habitacion_numero
join servicio_basico s on hs.servicio_basico_id = s.id
join clase c on h.clase_id = c.id 
where h.numero between 20 and 24
order by h.numero and s.nombre;

-- 14. Listar las decoraciones que no están aplicadas en ninguna habitación.
-- rows: 2
select d.nombre 
from habitacion h
right join decoracion d on h.decoracion_id=d.id
where h.numero is null;

-- 15. Listar todos los empleados categorizados por edad. Las categorías son: 'junior' (hasta 35 años), 
-- 'semi-senior' (entre 36 a 40 años) y 'senior' (más de 40). Mostrar el apellido, nombre, edad, categoría 
-- y ordenar de mayor a menor por categoría y edad.
-- rows: 25
select e.apellido,e.nombre, TIMESTAMPDIFF(YEAR, e.fecha_nacimiento, NOW()) edad,
case
	when TIMESTAMPDIFF(YEAR, e.fecha_nacimiento, NOW()) <= 35 then "Junior" 
    when TIMESTAMPDIFF(YEAR, e.fecha_nacimiento, NOW()) between 36 and 40 then "Semi-Senior"
    else  "Senior"
end Categoria
from empleado e
order by categoria desc, edad desc;


-- 16. Calcular la cantidad y el promedio de cada forma de pago para los check-in. Mostrar la forma de pago, cantidad y el promedio formateado con dos decimales.
-- rows:
select forma_pago.id, count(checkin.forma_pago_id) cantidad, format (avg(importe), 2) Promedio
from checkin
inner join forma_pago on checkin.forma_pago_id = forma_pago.id
group by forma_pago_id;


-- 17. Calcular la edad de los empleados de Argentina. Mostrar el apellido, nombre y la edad del empleado.
-- rows:
select empleado.nombre, empleado.apellido, timestampdiff(year, fecha_nacimiento, now()) edadEmpleado
from empleado
left join pais on pais.id = empleado.pais_id;


-- 18. Calcular el importe total para los check-in realizados por el huésped 'Mercado Joel'. Mostrar apellido, nombre, importe total y el país de origen.
-- rows:1
select huesped.id, huesped.apellido, huesped.nombre, SUM(checkin.importe) importeTotal
from huesped
left join checkin on huesped.id = checkin.huesped_id
where huesped.apellido = "Mercado" and huesped.nombre = "Joel";



-- 19. Listar la forma de pago empleada por cada servicio extra. Se debe mostrar el nombre del servicio extra, 
-- nombre de la forma de pago y calcular la cantidad y total recaudado.

-- rows: 4
select servicio_extra.id, servicio_extra.nombre, forma_pago.nombre, count(reserva.servicio_extra_id) cantidadPagos, 
SUM(reserva.importe) totalRecaudado
from servicio_extra
join reserva on servicio_extra.id = reserva.servicio_extra_id
join forma_pago on reserva.forma_pago_id = forma_pago.id
group by servicio_extra.nombre;



-- 20. Listar la forma de pago empleada para el servicio extra 'Sauna' y los huéspedes correspondientes. Se debe mostrar el nombre del servicio extra, 
-- nombre de la forma de pago, numero del cliente e importe total.
-- rows: 1

select servicio_extra.id, servicio_extra.nombre, forma_pago.nombre, huesped.id, SUM(reserva.importe) totalRecaudado
from servicio_extra
join reserva on servicio_extra.id = reserva.servicio_extra_id
join forma_pago on reserva.forma_pago_id = forma_pago.id
join huesped on huesped.id = reserva.huesped_id
where servicio_extra.nombre = "Sauna"
group by servicio_extra.nombre;


