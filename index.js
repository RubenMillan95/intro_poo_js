
class Perro{
    //Atributos
      constructor(nombre, raza, peso, edad){
        this.nombre=nombre;
        this.raza=raza;
        this.peso=peso;
        this.edad=edad;
    }

    //Métodos
    ladrar(){
        console.log("guau!!")

    }
}

let miPerro;
miPerro= new Perro("Maximiliano","Snauser","40","10");

let otroPerro;
otroPerro= new Perro("Maximiliano","Snauser","40","10");

miPerro.ladrar();
otroPerro.ladrar();

miPerro.rascar