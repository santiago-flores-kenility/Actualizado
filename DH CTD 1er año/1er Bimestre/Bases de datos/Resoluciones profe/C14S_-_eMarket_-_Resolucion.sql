-- Consignas

-- Clientes
-- 1. ¿Cuántos clientes existen?
SELECT COUNT(*)
FROM clientes;

-- 2. ¿Cuántos clientes hay por ciudad?
SELECT Ciudad, COUNT(*)
FROM clientes
GROUP BY Ciudad;

-- Facturas
-- 1. ¿Cual es el total de transporte?
SELECT SUM(transporte)
FROM facturas;

-- 2. ¿Cual es el total de transporte por EnvioVia (empresa de envío)?
SELECT EnvioVia,SUM(transporte)
FROM facturas
GROUP BY EnvioVia;

-- 3. Calcular la cantidad de facturas por cliente. Ordenar descendentemente por cantidad de facturas.
SELECT ClienteID, COUNT(*)
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(*) DESC;

-- 4. Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
SELECT ClienteID, COUNT(*)
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(*) DESC
LIMIT 5;

-- 5. ¿Cual es el país de envío menos frecuente?
SELECT PaisEnvio, COUNT(*)
FROM facturas
GROUP BY  PaisEnvio
ORDER BY COUNT(*) asc
Limit 1;

-- 6. Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado realizó más operaciones de ventas?
SELECT e.EmpleadoID, e.Nombre, e.Apellido,  COUNT(f.FacturaID) AS cantidadFacturas FROM facturas f
INNER JOIN empleados e ON e.EmpleadoID = f.EmpleadoID
GROUP BY f.EmpleadoID
ORDER BY cantidadFacturas DESC
LIMIT 1;

-- Factura detalle
-- 1. ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?
SELECT ProductoID, COUNT(*)
FROM facturadetalle
GROUP BY ProductoID
ORDER BY COUNT(*) DESC;

-- 2. ¿Cuál es el total facturado? Considerar que el total facturado es la suma de cantidad por precio unitario.
SELECT SUM(Cantidad*PrecioUnitario)
FROM facturadetalle;

-- 3. ¿Cuál es el total facturado para los productos ID entre 30 y 50?
SELECT SUM(Cantidad*PrecioUnitario)
FROM facturadetalle
WHERE ProductoID between 30 and 50;

-- 4. ¿Cuál es el precio unitario promedio de cada producto?
SELECT ProductoID, AVG(PrecioUnitario)
FROM facturadetalle
GROUP BY ProductoID;

-- 5. ¿Cuál es el precio unitario máximo?
SELECT MAX(PrecioUnitario)
FROM facturadetalle;

-- JOINS
-- 1. Generar un listado de todas las facturas del empleado 'Buchanan'.
SELECT *
FROM facturas
JOIN empleados ON facturas.EmpleadoID = empleados.empleadoID
WHERE Apellido = 'Buchanan';

-- 2. Generar un listado con todos los campos de las facturas del correo 'Speedy Express'.
SELECT * 
FROM facturas
JOIN correos ON facturas.enviovia = correos.correoID
WHERE compania = 'Speedy Express';

-- 3. Generar un listado de todas las facturas con el nombre y apellido de los empleados.
SELECT facturas.*, empleados.Apellido, empleados.Nombre
FROM facturas 
JOIN empleados ON facturas.EmpleadoID = empleados.empleadoID;

-- 4. Mostrar un listado de las facturas de todos los clientes “Owner” y país de envío “USA”.
SELECT *
FROM facturas
JOIN clientes ON facturas.ClienteID = clientes.ClienteID
WHERE clientes.titulo = "Owner" AND PaisEnvio = "Usa";

-- 5. Mostrar todos los campos de las facturas del empleado cuyo apellido sea “Leverling” o que incluyan el producto id = “42”.
SELECT f.*
FROM facturas f
JOIN empleados e ON f.EmpleadoID = e.empleadoID
JOIN facturadetalle fd ON f.facturaID = fd.facturaId
WHERE e.Apellido ='Leverling' OR fd.ProductoID = 42;

-- 6. Mostrar todos los campos de las órdenes del empleado cuyo apellido  sea “Leverling” y que incluya el producto id = “80”.
SELECT facturas.*
FROM facturas
JOIN empleados ON facturas.EmpleadoID = empleados.empleadoID
JOIN facturadetalle  ON facturas.facturaID = facturadetalle.facturaId
WHERE Empleados.Apellido ='Leverling' and  (facturadetalle.ProductoID = 80 or facturadetalle.ProductoID = 42);

-- 7. Generar un listado con los cinco mejores clientes, según sus importes de compras total (PrecioUnitario * Cantidad).
SELECT c.ClienteID, c.Contacto, SUM(fd.PrecioUnitario * fd.Cantidad) AS Total
FROM facturas f
JOIN clientes c ON c.ClienteID = f.ClienteID
JOIN facturadetalle fd ON f.facturaID = fd.FacturaId
GROUP BY c.ClienteID, c.Contacto
ORDER BY Total DESC
LIMIT 5;

-- 8. Generar un listado de facturas, con los campos id, nombre y apellido del cliente,  fecha de factura, y país de envío, 
-- ordenado de manera descendente por fecha de factura y limitado a 10 filas.
SELECT f.FacturaID, c.contacto, f.FechaFactura, f.PaisEnvio, SUM(fd.PrecioUnitario * fd.Cantidad) AS Total
FROM facturas f
JOIN facturadetalle fd ON f.facturaID = fd.facturaId
JOIN clientes c ON f.ClienteID = c.ClienteID
GROUP BY f.FacturaID, c.contacto, f.FechaFactura, f.PaisEnvio
ORDER BY f.FechaFactura DESC
LIMIT 10;

