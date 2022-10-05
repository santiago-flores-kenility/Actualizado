set sql_mode= "ONLY_FULL_GROUP_BY";
-- Reportes - JOINS
-- Consignas:
-- 1. Obtener los artistas que han actuado en una o más películas;
select concat(artista.nombre, " ", artista.apellido) artista, count(pelicula_id) películas from artista_x_pelicula 
join artista on artista_id = artista.id group by artista_x_pelicula.artista_id order by count(pelicula_id) desc ;
-- 2. Obtener las películas donde han participado más de un artista según nuestra
-- base de datos.
select titulo , count(artista_id) from artista_x_pelicula join pelicula on pelicula_id =pelicula.id  group by pelicula_id having count(artista_id) >1;
-- 3. Obtener aquellos artistas que han actuado en alguna película, incluso
-- aquellos que aún no lo han hecho, según nuestra base de datos.
select * from artista left join artista_x_pelicula on artista.id=artista_id;
-- 4. Obtener las películas que no se le han asignado artistas en nuestra base de
-- datos.
select * from pelicula left join artista_x_pelicula on pelicula.id=pelicula_id;
-- 5. Obtener aquellos artistas que no han actuado en alguna película, según
-- nuestra base de datos.
select * from artista left join artista_x_pelicula on artista.id=artista_id where artista_id is null;
-- 6. Obtener aquellos artistas que han actuado en dos o más películas según
-- nuestra base de datos.
select concat(artista.nombre, " ", artista.apellido) artista, count(artista_id ) actuaciones from artista 
join artista_x_pelicula on artista.id=artista_id group by artista_x_pelicula.artista_id 
having count(artista_id ) >1;
-- 7. Obtener aquellas películas que tengan asignado uno o más artistas, incluso
-- aquellas que aún no le han asignado un artista en nuestra base de datos.
select * from pelicula left join artista_x_pelicula on pelicula.id=pelicula_id;