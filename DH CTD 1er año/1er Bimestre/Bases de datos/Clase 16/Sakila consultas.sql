-- Reportes 
-- Reportes parte 1: 
-- 1. Obtener el nombre y apellido de los primeros 5 actores disponibles. Utilizar 
-- alias para mostrar los nombres de las columnas en español. 
select first_name Nombre, last_name Apellido from actor limit 5;
-- 2. Obtener un listado que incluya nombre, apellido y correo electrónico de los 
-- clientes (customers) inactivos. Utilizar alias para mostrar los nombres de las 
-- columnas en español. 
select first_name Nombre, last_name Apellido, email   from customer where active = 0;
-- 3. Obtener un listado de films incluyendo título, año y descripción de los films 
-- que tienen un rental_duration mayor a cinco. Ordenar por rental_duration de 
-- mayor a menor. Utilizar alias para mostrar los nombres de las columnas en 
-- español. 
select title Título, release_year año, description Descripción from film where rental_duration >5 order by rental_duration desc;
-- 4. Obtener un listado de alquileres (rentals) que se hicieron durante el mes de 
-- mayo de 2005, incluir en el resultado todas las columnas disponibles. 
select * from rental where rental_date between "2005-05-01" and "2005-05-31" order by rental_date;
-- o
SELECT * 
From rental
WHERE MONTH(rental_date) = 5 AND YEAR(rental_date) = 2005
GROUP BY 1;
-- Reportes parte 2: Sumemos complejidad 
-- Si llegamos hasta acá, tenemos en claro la estructura básica de un SELECT. En los siguientes reportes vamos a sumar complejidad. 
-- ¿Probamos? 
-- 1. Obtener la cantidad TOTAL de alquileres (rentals). Utilizar un alias para mostrarlo en una columna llamada “cantidad”. 
select count(rental_id) cantidad from rental;
-- 2. Obtener la suma TOTAL de todos los pagos (payments). Utilizar un alias para mostrarlo en una columna llamada “total”, 
-- junto a una columna con la cantidad de alquileres con el alias “Cantidad” y una columna que indique el “Importe promedio” por alquiler. 
select sum(amount) total, count(payment_id) Cantidad, avg(rental_id) "Importe promedio"from payment;
-- 3. Generar un reporte que responda la pregunta: ¿cuáles son los diez clientes que más dinero gastan y en cuántos alquileres lo hacen? 
select customer_id Cliente, sum(amount) "Total($)", count(payment_id) Alquileres 
from payment group by customer_id order by sum(amount) desc limit 10;
-- 4. Generar un reporte que indique: ID de cliente, cantidad de alquileres y monto total para todos los clientes 
-- que hayan gastado más de 150 dólares en alquileres. 
select customer_id Cliente, count(payment_id) "Cantidad de alquileres", sum(amount) "Monto total" 
from payment group by customer_id having sum(amount) > 150;
-- 5. Generar un reporte que muestre por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres 
-- y la suma total pagada (amount de tabla payment) para el año de alquiler 2005 (rental_date de tabla rental). 
select month(rental_date) mes,year(rental_date), count(rental.rental_id)"Cantidad de alquileres", sum(payment.amount)"Suma total pagada"  from rental 
inner join payment on rental.rental_id = payment.rental_id where year(rental_date)="2005" group by month(rental.rental_date)  
order by month(rental_date) 
;
;
-- 6. Generar un reporte que responda a la pregunta: ¿cuáles son los 5 inventarios más alquilados? 
-- (columna inventory_id en la tabla rental). Para cada una de ellas indicar la cantidad de alquileres. 
select inventory_id, count(*) from rental group by inventory_id order by count(*) desc limit 5;