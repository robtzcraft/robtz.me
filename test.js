
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Libro extends Producto{
  constructor(nombre, precio, autor, isbn) {
    super(nombre, precio);
    this.autor = autor;
    this.isbn = isbn;
  }
  imprimirDatos() {
    return `
    ${this.nombre}
    ${this.precio}
    ${this.autor}
    ${this.isbn}
    `
  }
}

let libro1 = new Libro('Los hornos de Hitler', 120, 'Sacha', '1231231231');
console.log(libro1.imprimirDatos());
