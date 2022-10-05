-- Clientes
-- 1) ¿Cuántos clientes existen?;
select count(clientes.ClienteID) from clientes;
-- 2) ¿Cuántos clientes hay por ciudad?;
select Ciudad ,count(clientes.ClienteID) from clientes group by Ciudad;
-- Facturas
-- 1) ¿Cuál es el total de transporte?;
select sum(Transporte) from facturas;
-- 2) ¿Cuál es el total de transporte por EnvioVia (empresa de envío)?;
select EnvioVia ,sum(Transporte) from facturas group by EnvioVia;
-- 3) Calcular la cantidad de facturas por cliente. Ordenar descendentemente por cantidad de facturas.;
select ClienteID, count(FacturaID) c from facturas group by ClienteID order by c desc ;
-- 4) Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
select ClienteID, count(FacturaID) c from facturas group by ClienteID order by c desc limit 5;
-- 5) ¿Cuál es el país de envío menos frecuente de acuerdo a la cantidad de facturas?
select PaisEnvio pais, count(FacturaID) cuenta from facturas group by pais order by cuenta limit 1;
-- 6) Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado
-- realizó más operaciones de ventas?
select EmpleadoID, count(FacturaID) c from facturas group by EmpleadoID order by c desc limit 1;
-- Factura detalle
-- 1) ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?
select p.ProductoNombre,f.ProductoID ID, count(f.ProductoID) cantidad from facturadetalle f 
join productos p on p.ProductoID = f.ProductoID group by f.ProductoID order by cantidad desc limit 1;
-- 2) ¿Cuál es el total facturado? Considerar que el total facturado es la suma de
-- cantidad por precio unitario.
select sum(PrecioUnitario*Cantidad) "Total facturado"from facturadetalle;
-- 3) ¿Cuál es el total facturado para los productos ID entre 30 y 50?
select (PrecioUnitario*Cantidad) "Total facturado"from facturadetalle where ProductoID between 30 and 50;

-- 4) ¿Cuál es el precio unitario promedio de cada producto?
select p.ProductoNombre, avg(f.PrecioUnitario) "Precio Unitario Promedio" from facturadetalle f 
join productos p on p.ProductoID = f.ProductoID group by f.ProductoID;
-- 5) ¿Cuál es el precio unitario máximo?;
select p.ProductoNombre, max(f.PrecioUnitario) "Precio Unitario Máximo" from facturadetalle f 
join productos p on p.ProductoID = f.ProductoID group by f.ProductoID;
