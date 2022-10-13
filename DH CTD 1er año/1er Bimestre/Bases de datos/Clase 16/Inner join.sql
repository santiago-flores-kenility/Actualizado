-- Reportes parte I - Repasamos INNER JOIN
-- Realizar una consulta de la facturación de e-market. Incluir la siguiente información:
-- ● Id de la factura
-- ● fecha de la factura
-- ● nombre de la empresa de correo
-- ● nombre del cliente
-- ● categoría del producto vendido
-- ● nombre del producto
-- ● precio unitario
-- ● cantidad
select fc.FacturaID, fc.FechaFactura, co.Compania, cl.Compania, ca.CategoriaNombre, p.ProductoNombre, fd.PrecioUnitario, fd.Cantidad  
from facturas fc 
join facturadetalle fd on fc.FacturaID=fd.FacturaID 
join correos co on fc.EnvioVia = co.CorreoID
join clientes cl on fc.ClienteID = cl.ClienteID
join productos p on fd.ProductoID = p.ProductoID
join categorias ca on p.CategoriaID = ca.CategoriaID;

-- 1. Listar todas las categorías junto con información de sus productos. Incluir todas
-- las categorías aunque no tengan productos.
select * from categorias c left join productos p on c.CategoriaID= p.CategoriaID; 
-- 2. Listar la información de contacto de los clientes que no hayan comprado nunca
-- en emarket.
select * from clientes cl left join facturas f on	cl.ClienteID=f.ClienteID where f.ClienteID is null ;
-- 3. Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y
-- la información de contacto de su proveedor. Tener en cuenta que puede haber
-- productos para los cuales no se indicó quién es el proveedor.
select * from productos p join categorias c on p.CategoriaID=c.CategoriaID left join proveedores pr on p.ProveedorID=pr.ProveedorID;
-- 4. Para cada categoría listar el promedio del precio unitario de sus productos.
select c.CategoriaNombre, avg(p.PrecioUnitario) from categorias c join productos p on c.CategoriaID=p.CategoriaID group by c.CategoriaID;
-- 5. Para cada cliente, indicar la última factura de compra. Incluir a los clientes que
-- nunca hayan comprado en e-market.
select cl.Compania, max(f.FechaFactura) from clientes cl left join facturas f on cl.ClienteID=f.ClienteID group by cl.ClienteID;
-- 6. Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un
-- listado con todas las empresas de correo, y la cantidad de facturas
-- correspondientes. Realizar la consulta utilizando RIGHT JOIN.
select c.Compania, count(f.EnvioVia) from facturas f right join correos c on f.EnvioVia=c.CorreoID group by c.CorreoID;