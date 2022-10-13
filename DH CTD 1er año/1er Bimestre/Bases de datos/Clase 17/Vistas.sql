-- Vistas - Parte I
-- Clientes
-- 1. Crear una vista con los siguientes datos de los clientes: ID, contacto, y el
-- Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por
-- ejemplo: “TEL: (01) 123-4567”.
select cl.ClienteID, cl.Contacto, cl.fax, cl.Telefono , coalesce() from clientes cl; 
-- 2. Se necesita listar los números de teléfono de los clientes que no tengan
-- fax. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de clientes.
select cl.Compania, cl.Telefono from clientes cl where cl.fax = "";
-- b. Consultando la vista de clientes.
alter view telClientes as select cl.Compania, cl.Telefono, cl.fax from clientes cl;
select * from telclientes;
select tc.Compania, tc.Telefono from telClientes tc where tc.fax="";

-- Proveedores
-- 1. Crear una vista con los siguientes datos de los proveedores: ID,
-- contacto, compañía y dirección. Para la dirección tomar la dirección,
-- ciudad, código postal y país.
create view Direc_proveedores as
select ProveedorID Id, Contacto, Compania Nombre, 
concat(Direccion ,", ", Ciudad , ", ",CodigoPostal , ", ", Pais) Dirección 
from proveedores;
-- 2. Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo
-- de dos formas distintas:
-- a. Consultando la tabla de proveedores.
Select * from proveedores where direccion like ("%Americanas%") and Pais = "Brazil"; 
-- b. Consultando la vista de proveedores.
select * from direc_proveedores where Dirección like ("%Americanas%Brazil%");

