type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.log(pokemon1, pokemon2, pokemon3)

// b) O npm executa a compilação dentro do arquivo package.json , que tem os scripts que rodam no terminal.

// o uso do arquivo tsc -- Init e em sefuida descomento o que foi pedido seguido o slide.

Resposta:
//"target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations
//"module": "commonjs",                                /* Specify what module code is generated.
//  "rootDir": "./src",                                  /* Specify the root folder within your source files. */
// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
//"outDir": "./build",                                   /* Specify an output folder for all emitted files. */
//"removeComments": true,  
//"forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
/* Disable emitting comments. */
//"esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
//"strict": true,                                      /* Enable all strict type-checking options. */
//"noImplicitAny": true, 
//"skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
/* Enable error reporting for expressions and declarations with an implied 'any' type. */


