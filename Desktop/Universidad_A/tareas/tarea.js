console.log("inicio")


class Libro {
    
    constructor(lTitulo, lAutor, lGenero, leido= false) {
        this.titulo = lTitulo;
        this.autor = lAutor;
        this.genero = lGenero;

        this.leido = leido;

    }
    
    marcarComoLeido(){
         this.leido = true

        console.log("Este libro esta leido")
       


    }

    marcarComoNoLeido(){
        this.leido = false

       console.log("Este libro no esta leido")
      


   }


   informacion(){
    console.log(`Titulo: ${this.titulo} Autor: ${this.autor} Gernero: ${this.genero} Leído: ${this.leido ? 'Sí' : 'No'}`)
   }
}
   const libro = new Libro ( "Crónica de una muerte anunciada" , "Gabriel Garcia Marquez", "policial",true);
   const libro2 = new Libro ( "La Rebelión de las Ratas" , "Fernando Soto Aparicio", "Novela");

    libro.informacion();
    libro2.informacion();
   

class FiguraGeometrica {
 constructor (redondo,lado, altura){
    this.redondo = redondo;
    this.lado = lado;
    this.altura = altura;

   
 }

 darArea () {
    return 0
  }
  darPerimetro () {
    return 0
  }
}

class Circulo extends FiguraGeometrica {
    constructor(redondo, radio){
        super(redondo);
            this.radio = radio
    }
    darArea () {
    return 3.1416 * this.radio * this.radio


 }

 darPerimetro () {
    return 0
  }
}

const circulo = new Circulo ("redondo",8);

console.log(circulo.darArea())

class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        super(false,lado);
        
    }
 darArea (){
    return this.lado*this.lado;

 }

 darPerimetro () {
    return this.lado*this.lado*this.lado*this.lado
  }
}

const cuadrado = new Cuadrado(6);
console.log("Área del cuadrado:", cuadrado.darArea());
console.log("perimetro del cuadrado:", cuadrado.darPerimetro());

class Triangulo extends FiguraGeometrica{
    constructor(lado,altura,base){
        super (false,lado,altura);
        this.base = base;
        
    }
    darArea(){
        return this.base*this.altura/2;
    }

    darPerimetro(){
        return this.base+this.altura+this.lado;
    }

}
const triangulo = new Triangulo(3,8,5);
console.log("Area del triangulo",triangulo.darArea());
console.log("Perimetro del triangulo",triangulo.darPerimetro());