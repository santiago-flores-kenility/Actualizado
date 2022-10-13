-- Base de datos: emarket

-- Ejercicio 1 
-- 1. Crear una vista para poder organizar los envíos de las facturas. Indicar número de factura, fecha de la factura y fecha de envío, ambas en formato dd/mm/yyyy, valor del transporte formateado con dos decimales, y la información del domicilio del destino incluyendo dirección, ciudad, código postal y país, en una columna llamada Destino. 
CREATE VIEW v_detalles_envio AS
SELECT FacturaID, DATE_FORMAT(FechaFactura,'%d/%m/%Y') AS fechaFactura, DATE_FORMAT(FechaEnvio,'%d/%m/%Y') AS MesEnvio, 
	FORMAT(Transporte, 2) AS Transporte, CONCAT(DireccionEnvio, ' - ', CiudadEnvio, ' (', CodigoPostalEnvio,') ', PaisEnvio) AS Destino 
FROM facturas f;

-- 2. Realizar una consulta con todos los correos y el detalle de las facturas que usaron ese correo. Utilizar la vista creada. 
SELECT c.Compania, vd.* FROM correos c
LEFT JOIN facturas f ON f.enviovia = c.correoID
INNER JOIN v_detalles_envio vd ON f.FacturaID = vd.FacturaID;

-- 3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna alternativa o solución. 


-- Ejercicio 2 
-- 1. Crear una vista con un detalle de los productos en stock. Indicar id, nombre del producto, nombre de la categoría y precio unitario. 
CREATE VIEW v_productos_en_stock AS
SELECT CategoriaNombre AS categoria, ProductoId AS producto_id, ProductoNombre As producto_nombre, PrecioUnitario AS precio FROM categorias c
LEFT JOIN productos p ON c.CategoriaID = p.CategoriaID
WHERE p.UnidadesStock > 0;

-- 2. Escribir una consulta que liste el nombre y la categoría de todos los productos vendidos. Utilizar la vista creada. 
SELECT DISTINCT vp.* FROM facturadetalle fd
INNER JOIN v_productos_en_stock vp ON vp.producto_id = fd.ProductoID;

-- 3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna alternativa o solución. 

