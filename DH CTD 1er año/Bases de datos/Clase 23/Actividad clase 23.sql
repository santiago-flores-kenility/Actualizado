-- Consignas
-- 1) Empleados
-- a) Crear un SP que liste los apellidos y nombres de los empleados ordenados
-- alfabéticamente.
-- b) Invocar el SP para verificar el resultado.

delimiter $$
create procedure listado_empleados()
begin
	select apellido, nombre from empleados order by apellido;
end$$
call listado_empleados

-- 2) Empleados por ciudad
-- a) Crear un SP que reciba el nombre de una ciudad y liste los empleados de esa
-- ciudad.
-- b) Invocar al SP para listar los empleados de Seattle.
delimiter $x
create procedure empleados_por_ciudad(in nomciudad varchar(15))
begin
	select * from empleados where Ciudad = nomciudad;
end$x
call empleados_por_ciudad("Seattle")


-- 3) Clientes por país
-- a) Crear un SP que reciba el nombre de un país y devuelva la cantidad de clientes
-- en ese país.
-- b) Invocar el SP para consultar la cantidad de clientes en Portugal.
delimiter %x
create procedure clientes_por_pais(in var_pais varchar(15))
begin
	select count(ClienteID) from clientes where pais = var_pais;
end%x
call clientes_por_pais("Portugal")


-- 4) Productos sin stock
-- a) Crear un SP que reciba un número y liste los productos cuyo stock está por
-- debajo de ese número. El resultado debe mostrar el nombre del producto, el
-- stock actual y el nombre de la categoría a la que pertenece el producto.
-- b) Listar los productos con menos de 10 unidades en stock.
-- c) Listar los productos sin stock.
delimiter %¬
create procedure productos_sin_stock(in numero smallint)
begin
	select p.ProductoNombre, p.UnidadesStock, c.CategoriaNombre from productos p 
    join categorias c on p.CategoriaID = c.CategoriaID 
    where UnidadesStock < numero;
end%¬
call productos_sin_stock(1)

-- 5) Ventas con descuento
-- a) Crear un SP que reciba un porcentaje y liste los nombres de los productos que
-- hayan sido vendidos con un descuento igual o superior al valor indicado,
-- indicando además el nombre del cliente al que se lo vendió.
-- b) Listar la información de los productos que hayan sido vendidos con un
-- descuento mayor al 10%.
delimiter <¬
create procedure ventas_con_descuento(in descu double)
begin
	Select p.ProductoNombre, c.Compania, fd.Descuento * 100 from productos p 
    join facturadeventas_con_descuentotalle fd on p.ProductoID = fd.ProductoID
    join facturas f on fd.FacturaID = f.FacturaID
    join clientes c on f.ClienteID = c.ClienteID
    where fd.Descuento >= descu /100;
end<¬
call ventas_con_descuento(10)

