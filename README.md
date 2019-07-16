# CURSO DE REACT JS

## INTRODUCCIÓN A REACT JS

### ¿QUÉ ES REACT?

React cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

> React es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

JSX es HTML dentro de Javascript, esto se verá más adelante en detalle.

React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

### HERRAMIENTAS QUE USAREMOS

Estas son las herramientas que usaremos en el curso:

- Navegador: Especialmente Chrome ya que cuenta con óptimas herramientas de desarrollo.
- React Developer Tools: Es una herramienta Open Source creada por Facebook y tiene instalación para Chrome o Firefox. Nos dejará ver el código de React inspeccionando elementos.
- Editor de texto: Puedes usar cualquiera, en este curso sugerimos Visual Studio Code. Tiene muchos plugins útiles para el desarrollo.
- Prettier: Es un plugin que hace que el código se vea bien sin importar cómo esta escrito.

### CREATE REACT APP

**create-react-app** es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo:

- Se debe instalar desde la línea de comando usando `npm install -g create-react-app`

- Una vez instalado se crea la carpeta del proyecto con `create-react-app -nombre del proyecto-`

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.

Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.

- Finalmente para correr la aplicación se usa el comando `npm run start`

Otras herramientas:

- Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
- Eslint: Lee el código y avisa de errores.

### FUNDAMENTOS

### ReactDOM.render

React y ReactDOM trabajarán en conjunto.

- React como análogo a createElement.
- ReactDOM a appendChild-

`ReactDOM.render()` toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar **React**.

### JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React; sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

1. El tipo de elemento que estamos creando
2. Atributos o props
3. El children que es el contenido.

Ejemplo:

```javascript
  React.createElement('a', { href: 'https://platzi.com' }, 'Ir a Platzi')
```

En **JSX** se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

En **jsx** es posible representar funciones através de `{}`, una **expresión** es algo que en JavaScript se va a interpretar y evaluar, por ejemplo `{2 + 2}`, si la expresión es null, o undefined los datos no se van a ver

```javascript
  import React from 'react'
  import ReactDOM from 'react-dom'

  const jsx = <div>
    <h1>Hi I'm Aaron</h1>
    <p>I'm Web Developer</p>
  </div>

  const container = document.getElementById('app')
  ReactDOM.render(jsx, container)
```

## CREACIÓN Y DISEÑO DE COMPONENTES

### ¿QUÉ ES UN COMPONENTE?

Los componentes en React son bloques de construcción.

Las aplicaciones hechas con React son como figuras de Lego; junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

#### Identificación de componentes

Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

> Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

### NUESTOR PRIMER COMPONENTE

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método **render** que define cuál será el resultado que aparecerá en pantalla.
- El **source** de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

### APLICAR ESTILOS

- Para los estilos crearemos una carpeta llamada **Styles** y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
- Para usar los estilos es necesario importarlos con import React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
- Es posible utilizar **Bootstrap** con React, sólo debe ser instalado con `npm install bootstrap` y debe ser importado en el index.js
- Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

### PROPS

Los **props** que es la forma corta de **properties** son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama `this.props` y los valores son asignados directamente en el `ReactDOM.render()`.

### NUESTRA PRIMERA PÁGINA

Las páginas en React son componentes conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

- Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

### ENLAZANDO EVENTOS

**React** dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase `this.handleChange`.

Los elementos button también tienen un evento que es onClick.

Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo:

1. Especificando que su valor es de tipo **button**.
2. manejándolo desde el formulario cuando ocurre el evento **onSubmit**.

### MANEJO DE ESTADOS

Hasta esta clase todos los componentes han obtenido su información a través de **props** que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del **state** a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una **función** de la clase component llamada `setState` a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

> Para solucioar esto es posible pasar un **prop** adicional `value`  que va a desplegar cada uno de los input. Es importante tener en cuenta inicializar el objeto state.

### LEVANTAMIENTO DE ESTADO

Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

## REACT ROUTER

### INTRODUCCIÓN A REACT ROUTER

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

- Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.
- Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.
- React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

  **1. Route**: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
  **2. BrowserRouter**: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
  **3. Switch**: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
  **4. Link**: Toma el lugar del elemento `<a>`, evita que se recargue la página completamente y actualiza la URL.

### DIVISION DE LA APLICACIÓN EN RUTAS

Para instalar React Router lo hacemos desde la terminal con `npm install react-router-dom`. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

> Link internamente tiene un elemento `<a>` pero va a interceptar el click para navegar de manera interna sin refrescar toda la página.

```javascript
  import React from 'react'
  import { BrowserRouter, Switch, Route } from 'react-router-dom'

  import Badges from '../pages/Badges'
  import BadgeNew from '../pages/BadgeNew'

  const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
      </BrowserRouter>
    )
  }

  export default App
```

Adicionalmente, el elemento Link ya no contiene el atribute _href_ sino _to_

```html
  <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
```

### Mejorando la User Interface con un Layout

React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

Para crear el Layout existe un **prop** especial llamado **children**

```javascript
  import React from 'react'
  import Navbar from './Navbar'

  const Layout = props => {
    return (
      <div>
        <Navbar />
        {props.children}
      </div>
    )
  }

  export default Layout
```

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:

```javascript
  import { Redirect, Route } from "react-router-dom";

  <Route path="/404" component={MiComponente404} />
  <Redirect from="*" to="/404" />
```

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

## COMPONENT LIFECYCLE

### Introducción al ciclo de vida de un componente

Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

- **Montaje:** Representa el momento donde se inserta el código del componente en el DOM. Se llaman tres métodos: 
  1. constructor
  2. render
  3. componentDidMount.

- **Actualización:** Ocurre cuando los props o el estado del componente cambian. Se llaman dos métodos:
  1. render.
  2. componentDidUpdate: Este método recibe dos argumentosq eu son los props y el estado que tenía anteriormente; esto sirve para comparar la versión anterior del componente y la versión actual.

- **Desmontaje:** Nos da la oportunidad de hacer limpieza de nuestro componente. Se llama un método:
  1. componentWillUnmount.

### Práctica del ciclo de vida

Orden de ejecución de los métodos:

- Montaje:
  1. Constructor.
  2. Render.
  3. ComponentDidMount.
  4. Render.
  5. ComponentWillUnmount

El render aparece de nuevo en la posición 4 debido a que al actualizar los datos del componente se vuelve a ejecutar este método.

Una vez se termina de renderizar entra el método componentDidUpdate.

#### ¿Qué pasa si hacemos una llamada asíncrona y el componente muere antes de la promesa o el callback?

En estos casos es posible limpiar las llamadas asíncronas en el ComponentWillAmount

## LLAMADAS A UN API

### INTRODUCCIÓN A LLAMADAS A UN API

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

- **Loading**: cuando la petición se envía y estamos esperando.
- **Error**: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- **Data**: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

### TRAER DATOS DESDE UN API EN REACT

Una llamada a una API es un proceso asíncrono, es decir que lo comenzamos pero no sabemos cuándo acabará. Por lo mismo la función a escribir debe ser asíncrona.
La llamada se hará usando fetch que es una función de React que al pasarle una dirección de internet, hará una petición GET y lo que sea que exista ahí será devuelto.

### SOLICITANDO DATOS GET
