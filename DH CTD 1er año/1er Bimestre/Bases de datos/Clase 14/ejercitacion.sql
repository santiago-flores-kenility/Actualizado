1. Utilizando la base de datos de movies, queremos conocer, por un lado, 
 los títulos y el nombre del género de todas las series de la base de datos.;
 SELECT `series`.`title`,
    `series`.`release_date`,
    `series`.`end_date`, genres.name
FROM `movies_db`.`series` inner join `movies_db`.`genres`on genre_id = genres.id;
2. Por otro, necesitamos listar los títulos de los episodios junto con el nombre y
 apellido de los actores que trabajan en cada uno de ellos.;
select episodes.title, actors.first_name, actors.last_name from episodes 
inner join actor_episode on episodes.id = actor_episode.episode_id 
inner join actors on actor_episode.actor_id = actors.id;
3. Para nuestro próximo desafío, necesitamos obtener a todos los actores/ actrices (mostrar nombre y apellido)
 que han trabajado en cualquier película de la saga de La Guerra de las galaxias.;
select actors.first_name, actors.last_name, movies.title from actors 
inner join actor_movie on actors.id = actor_movie.actor_id
inner join movies on movies.id=actor_movie.movie_id where movies.title like ("La Guerra de las galaxias:%");
4. Crear un listado a partir de la tabla de películas, mostrar un reporte de la
 cantidad de películas por nombre de género.;
 select genres.name , count(movies.genre_id)from genres inner join movies on genres.id = movies.genre_id group by movies.genre_id;