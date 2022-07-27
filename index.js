


class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido,
        this.mascotas = [],
        this.libros = []
    }

    getFullName = () => {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota = (mascota) => {
        this.mascotas.push(mascota)
    }
    counterMascotas = () => {
        return (`La cantidad de mascotas es ${this.mascotas.length}`)
    }
    addBook = (nombre, autor) => {
        this.libros.push({nombre, autor})
    }
    getBookNames = () => {
        return this.libros.map(libro => libro.nombre)
    }
}


let usuario1 = new Usuario('Diego', 'Maidana')

usuario1.getFullName()
console.log(usuario1.getFullName())
usuario1.addMascota('Juanjin')
usuario1.addMascota('Froyd')
usuario1.addMascota('Sheilo')
console.log(usuario1.counterMascotas())
usuario1.addBook('Harry Potter', 'J.K.Rowling')
usuario1.addBook('Harry Potter 7', 'J.K.Rowling')
console.log(usuario1.getBookNames())