-- Crear una vista de productos que se usará para control de stock. Incluir el ID
-- y nombre del producto, el precio unitario redondeado sin decimales, las
-- unidades en stock y las unidades pedidas. Incluir además una nueva
-- columna PRIORIDAD con los siguientes valores:
-- ■ BAJA: si las unidades pedidas son cero.
-- ■ MEDIA: si las unidades pedidas son menores que las unidades
-- en stock.
-- ■ URGENTE: si las unidades pedidas no duplican el número de
-- unidades.
-- ■ SUPER URGENTE: si las unidades pedidas duplican el número
-- de unidades en caso contrario.

select p.ProductoID ID, p.ProductoNombre, concat("$",round(p.precioUnitario)) "P. Unit", p.UnidadesStock stock, p.UnidadesPedidas pedidas ,
case 
when p.UnidadesPedidas =  0 then "Baja"
when p.UnidadesPedidas < UnidadesStock then "Media"
when p.UnidadesPedidas < (UnidadesStock * 2) then "Urgente"
when p.UnidadesPedidas > (UnidadesStock*2) then "SUPER URGENTE"
End as Prioridad
from productos p;