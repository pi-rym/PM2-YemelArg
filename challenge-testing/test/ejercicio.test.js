const carritoCompra = require("../index")
describe("clase carritoCompra", () => {

    let carrito;
    beforeEach(() => {
        carrito = new carritoCompra();
    });

    const producto1 = { name: "producto1", price 10 };
    const producto2 = { name: "producto2", price 20 };
    it("carritoCompra debe ser una clase", () => {
        expect(typeof carritoCompra).toBe("function");
        const carrito = new carritoCompra();
        expect(carrito instanceof carritoCompra).toBe(true)
    });
    it("carritoCompra inicia la propiedad 'products' como un array vacio", () => {
        expect(Array.isArray(carrito.products)).toBe(true);
        expect(carrito.products).toHaveLenght(0);
    });
    it("agregaProducto agrega productos al carrito", () => {
        carrito.agregarProducto(producto1);
        expect(carrito.products).toHaveLenght(1);
        expect(carrito.products[0]).toEqual(producto1)
        carrito.agregarProducto(producto2);
        expect(carrito.products).toHaveLenght(2);
        expect(carrito.products[1]).toEqual(producto2)
    });
    it("calcularTotal devuelve el total", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(30)
    })
    it("aplicarDescuento devuelve el total con el descuento", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(20)).toBe(24)
        expect(carrito.aplicarDescuento(100)).toBe(0)
        expect(carrito.aplicarDescuento(50)).toBe(15)
    });

});