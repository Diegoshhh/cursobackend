
const {promises: fs} = require('fs')

class Contenedor {
    constructor(ruta){
        this.ruta = ruta;
    }

    async save(nuevoObjeto){

        const objetos = await this.getAll()

        let newId
        if(objetos.length == 0 ){
            newId = 1
        }else{
            const ultimoId = parseInt(objetos[objetos.length - 1].id)
            newId = ultimoId + 1
        }

        objetos.push({...nuevoObjeto, id:newId})

        try {
            await fs.writeFile(this.ruta, JSON.stringify(objetos, null, 2))
            return newId
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }
    async getByid(id){
        return ''
    }
    async getAll(){
        try {
            const objetos = fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objetos)
        } catch (error) {
            return []            
        }
    }
    async deleteById(id){
        const objetos = await this.getAll()

        const nuevoObjeto = objetos.filter(elemento => elemento.id !== id)

        if(nuevoObjeto.length === objetos.length){
            throw new Error(`Error al borrar: no se encontro el id ${id}`)
        }

        try {
            await fs.writeFile(this.ruta, JSON.stringify(nuevoObjeto, null , 2))
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }
    async deleteAll(){

    }
}

const listaProductos = new Contenedor('./productos.txt')

// listaProductos.save({title:'Acondicionador', price:'18USD'})
listaProductos.deleteById(1)



// class Usuario {
//     constructor(nombre, apellido){
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.mascotas = [],
//         this.libros = []
//     }

//     getFullName = () => {
//         return `${this.nombre} ${this.apellido}`
//     }
//     addMascota = (mascota) => {
//         this.mascotas.push(mascota)
//     }
//     counterMascotas = () => {
//         return (`La cantidad de mascotas es ${this.mascotas.length}`)
//     }
//     addBook = (nombre, autor) => {
//         this.libros.push({nombre, autor})
//     }
//     getBookNames = () => {
//         return this.libros.map(libro => libro.nombre)
//     }
// }


// let usuario1 = new Usuario('Diego', 'Maidana')

// usuario1.getFullName()
// console.log(usuario1.getFullName())
// usuario1.addMascota('Juanjin')
// usuario1.addMascota('Froyd')
// usuario1.addMascota('Sheilo')
// console.log(usuario1.counterMascotas())
// usuario1.addBook('Harry Potter', 'J.K.Rowling')
// usuario1.addBook('Harry Potter 7', 'J.K.Rowling')
// console.log(usuario1.getBookNames())