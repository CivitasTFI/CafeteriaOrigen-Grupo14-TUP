# Reparto del trabajo – Cafetería Origen (Parcial I)

Grupo: Matias, Nicolas, Fede y Homero

## Resumen del reparto

| Integrante | Responsabilidad |
| --- | --- |
| Matias | Dominio de productos |
| Nicolas | Pedidos |
| Fede | Reportes |
| Homero | Base del proyecto, GET /productos, README y video |

La parte de base del proyecto la hace Homero al principio y después se enfoca en el video.

## Matias: dominio de productos

- Clase base `Producto` (`id`, `nombre`, `precioBase`, `calcularPrecio()`) y las subclases `Expreso`, `Filtrado` y `Pasteleria`.
- En los cafés, `calcularPrecio()` es `precioBase + gramos × precioPorGramo`. En pastelería es solo el `precioBase`.
- Constantes de precio por gramo (Brasil 140, Colombia 180, Etiopía 240) y gramos por tamaño (expreso 18/27/36 g, filtrado 6/15/25 g).
- Catálogo con los 20 productos de la tabla: 9 expresos, 9 filtrados y 2 de pastelería.
- Tests unitarios que verifiquen los precios finales de la tabla (por ejemplo, expreso mediano Etiopía = 8.980).

## Nicolas: pedidos

- Modelo `Pedido` (`id`, `items: [{productoId, cantidad}]`, `estado`), repositorio en memoria y servicio con el total (suma de `calcularPrecio() × cantidad`).
- Endpoints `POST /pedidos`, `GET /pedidos` y `GET /pedidos/:id`.
- Validaciones: producto inexistente, cantidad inválida, items vacíos y pedido no encontrado (404).
- Tests del servicio y de los endpoints.

## Fede: reportes

- Facturación total (suma de los totales de todos los pedidos), cantidad vendida por producto (formato `{ "Espresso": 10, "Filtrado": 4 }`) y producto más vendido, calculado a partir del resultado anterior.
- Endpoints `GET /reportes/facturacion` y `GET /reportes/mas-vendido`.
- Casos borde: sin pedidos y empate en el más vendido.
- Tests unitarios y de endpoints.

## Homero: base, productos y video

- **Día 1:** setup (Express, Jest, supertest, `npm test`), separación `app.js`/`server.js` y manejo de errores común. Es lo primero que necesitan los demás para arrancar.
- Endpoints `GET /productos` y `GET /productos/:id`, con tests.
- README con instrucciones de ejecución y una colección de requests (curl o Postman).
- Un test de integración que cree un pedido y consulte los reportes.
- Guion, grabación y edición del video (5 a 8 minutos), con nombres y legajos al inicio. Formato MP4 o enlace no listado de YouTube/Google Drive.

## Orden sugerido del video

1. Presentación y legajos de todos los integrantes.
2. Recorrido rápido del código, explicando las decisiones de diseño más importantes. Cada integrante habla al menos una vez sobre una parte que resolvió personalmente.
3. Ejecución en vivo de `npm test` mostrando los tests en verde.
4. Demo del servidor corriendo con al menos un request manual (curl o Postman).

## Decisiones para acordar antes de arrancar

1. **IDs de productos:** numéricos o strings (por ejemplo `expreso-mediano-etiopia`).
2. **Valores de `estado`:** por ejemplo `pendiente`, `preparando` y `entregado`.
3. **"Mesa":** el PDF dice "pedido de tal mesa" en `GET /pedidos/:id`. Definir si el pedido lleva un campo `mesa` o si el `id` alcanza.
4. **Qué cuenta como vendido:** si los reportes incluyen todos los pedidos o solo algunos estados.
5. **Contrato entre módulos:** Matias publica rápido la interfaz (`obtenerProducto(id)` y `calcularPrecio()`) para que Nicolas y Fede trabajen con mocks.

## Orden de trabajo sugerido

1. **Día 1:** Homero sube el esqueleto y Matias sube las clases con el catálogo.
2. **Días 2 a 4:** Nicolas y Fede trabajan en paralelo en ramas separadas, con tests incluidos.
3. **Día 5:** integración y revisión cruzada; `npm test` tiene que pasar entero.
4. **Día 6:** ensayo y grabación del video.

## Requisito general

Todo debe estar testeado según lo visto en la teoría y realizado en la práctica.
