# santiago-cultural-webpage

santiago-cultural-webpage

# Version 0.1.96 pre-alpha

### 😀 ¿Qué trae esta versión? 😀

- Páginas:
    - Inicio
    - Centros Culturales
    - Actividades
    - Noticias
    - Contáctenos

### Rutas del servidor

```/api/load/``` para cargar cosas del servidor

```/get```  Method: GET. Para cargar un objeto en específico. 
Parámetros:
- id del objeto
- collection tipo del objeto: places, news, events, etc

```/post``` Method: POST. Para cargar una lista de objetos de una colección. 
Parámetros:  
- lang ```string``` lenguaje de la página [es | en]
- collection ```string``` tipo del objeto: places, news, events, etc
- what arreglo de ```string```, atributos que se van a pedir de los modelos
    - id ```number```
    - name ```string```
    - date ```number```
    - startDate ```number``` _solo eventos_
    - endDate ```number``` _solo eventos_
    - video ```stringUrl```
    - web ```stringUrl```
    - location ```stringLatLon```
    - description ```string```
    - placeType arreglo de ```number``` _solo lugares_
    - routes arreglo de ```number``` _solo lugares_
    - stars arreglo de ```number``` _solo lugares_
    - comments arreglo de ```string``` _solo lugares_
    - content arreglo de ```{ type: "text" | "video" | "image", value: stringHtml, url: string }```
    - headerImages arreglo de ```{ url: string, blurHash: string, id: string }```
    - pano objeto ```{ type: "text" | "video" | "image" }```
    - services arrglo de ```string```
    - socialMedia arreglo de ```string```

```/form``` Method: GET. Para cargar el formulario para el usuario
Parámetros:
- lang lenguaje de la página [es | en]

_Datos extras_

```
/**
 * @param {string} [collection] - the name of the collection to load from the server
 * @param {string[]} [what] - an array of strings that are the names of the fields you want to retrieve from the
 * server.
 * @returns The data returned from the server.
 */
export const loadFromServerPost = async (collection = "", what = []) => {
  try {
    const response = await axios.post(
      `${config.serverUrl}/${from}`,
      {
        collection,
        what,
      },
      {
        headers: getAuth,
      }
    );
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (err) {
    return { error: String(err) };
  }
};
```

```
/**
 * It then makes a GET request to the server using the axios library.
 * If the request is successful, it returns the data.
 * If the request is unsuccessful, it returns an error.
 * @param {string} [collection] - the name of the collection to load from
 * @param {string} [id] - the id of the object to load
 * @returns The data returned from the server.
 */
export const loadFromServerGet = async (collection = "", id = "", lang = "") => {
  try {
    const response = await axios.get(
      `${config.serverUrl}/${from}${collection !== "" ? `?collection=${collection}` : ""}${
        id !== "" ? `&id=${id}` : ""
      }${lang !== "" ? `&lang=${lang}` : ""}`,
      {
        headers: getAuth,
      }
    );
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (err) {
    return { error: String(err) };
  }
};
```
