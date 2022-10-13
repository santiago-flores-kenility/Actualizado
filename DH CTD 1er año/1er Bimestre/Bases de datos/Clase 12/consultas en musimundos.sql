select * from clientes;
select count(pais) from clientes where pais="Brazil";
select * from canciones;
SELECT count(id_genero) FROM canciones where id_genero=6;
SELECT sum(`facturas`.`total`)FROM `musimundos`.`facturas`;
SELECT
    avg(`canciones`.`milisegundos`)
FROM `musimundos`.`canciones`;
SELECT `canciones`.`bytes` FROM `musimundos`.`canciones` order by bytes limit 1;
SELECT id_cliente, sum( `facturas`.`total`)
FROM `musimundos`.`facturas` group by id_cliente having sum(total)>45;




