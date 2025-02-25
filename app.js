const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/node-js')
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:' , error));

 const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true},
    edad: { type: Number, min: 0 },
    planetaOrigen: {type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
        creador: String
 }, {collection: 'Grupo-01'});

 const SuperHero = mongoose.model('SuperHero', superheroSchema);

 async function insetSuperHero() {
    const hero = new SuperHero({
        "nombreSuperHeroe": "Spiderman",
        "nombreReal": "Peter Parker",
        "nombreSociedad": "Vigilante",
        "edad": 25,
        "planetaOrigen": "Tierra",
        "debilidad": "Radioactiva",
        "poderes": ["Trepar paredes","Sentido arácnido","Super fuerza"],
        "aliado": ["Ironman"],
        "enemigo": ["Duende Verde"],
            creador: 'Isaias'

    });
    await hero.save();
    console.log('Superheroe insertado:', hero);
 }

 insetSuperHero();

 async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
 }

 updateSuperHero('Spiderman');

 async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
    console.log('Superhéroe eliminado:', result);
 }

 deleteSuperHero('Spiderman');


 async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra'});
    console.log('Superhéroes encontrados:', heroes);
 }

 findSuperHeroes();