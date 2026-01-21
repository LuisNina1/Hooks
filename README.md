# React Hooks  

Este repositorio es un diario de aprendizaje detallado sobre **React**, centrado especialmente en el dominio de los **Hooks**, desde los fundamentos hasta los más avanzados e incorporaciones recientes de la librería.

El proyecto está construido utilizando **Vite** + **TypeScript** para asegurar un entorno de desarrollo rápido y con tipado fuerte.

## Tecnologías utilizadas

* **React 19.2**
* **TypeScript**
* **Vite**
* **Tailwind CSS**

---

## Contenido del Aprendizaje

He dividido el aprendizaje en módulos progresivos para entender el ciclo de vida y la gestión del estado en React:

### 1. Hooks Básicos
* **`01-useState`**: Manejo de estado local y actualizaciones de estado.
* **`02-useEffect`**: Gestión de efectos secundarios (suscripciones, llamadas a APIs, manipulación manual del DOM).
* **`04-useRef`**: Acceso directo a elementos del DOM y persistencia de valores entre renderizados sin disparar nuevos renders.

### 2. Optimización y Rendimiento
* **`06-memos`**: Implementación de `React.memo`, `useMemo` y `useCallback` para evitar renderizados innecesarios y optimizar el costo computacional.

### 3. Gestión de Estado Avanzada
* **`05-useReducer`**: Alternativa a `useState` para lógica de estado compleja o estados que dependen del anterior.
* **`09-useContext`**: Implementación del Context API para evitar el "prop drilling" y gestionar el estado global de la aplicación.

### 4. Nuevas Funcionalidades y Patrones
* **`07-useOptimistic`**: Aprendizaje sobre actualizaciones optimistas en la UI para mejorar la experiencia de usuario.
* **`08-use-suspense`**: Manejo de estados de carga y componentes asíncronos de forma declarativa.
* **`03-examples`**: Aplicación de Hooks personalizados (Custom Hooks) y casos de uso del mundo real.

---

## Cómo ejecutar el proyecto

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

## 💡 Notas personales
Este repositorio forma parte de mi camino hacia el desarrollo **Front-End**, donde busco no solo escribir código que funcione, sino código eficiente, escalable y fácil de mantener.
