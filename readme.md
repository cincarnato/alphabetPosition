# Code Challenge: AlphabetPosition

Bienvenidos.

En este ejercicio el requerimiento es, dado un string, reemplazar cada una de sus letras con su posición en el alfabeto.

Si alguna letra no existe, ignorarla y no renornar nada por esta. 
"a" = 1, "b" = 2, etc.

```
Ejemplo: 

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

```
Tu resultado debe ser una cadena.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: str
- **tipo**: String
- **limitaciones**: Debe contener caracteres.

## Salida

- **tipo**: String


## Tests

### Test 1  

- **Parametros**: str = "The sunset sets at twelve o' clock." 
- **Resultado esperado**: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
---
### Test 2  

- **Parametros**: str = "The narwhal bacons at midnight."  
- **Resultado esperado**: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
---
