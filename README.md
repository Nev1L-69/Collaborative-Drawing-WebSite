# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- To download libraries write
```bash
yarn install
```
or
```bash
npm install
```
- To run write
```bash
yarn dev
```
or
```bash
npm run dev
```

[![Видео объяснение](Github-CollaborativeWebSite-capability-video.gif)

[Explanation video on youtube without voice](https://youtu.be/cgzgEfAikHE)

# Design Patterns

## RoomPage Component

Several design patterns are applied in the `RoomPage` component to organize the logic and improve the UI interactions:

### 1. **Observer Pattern**
   - **Explanation**: Using React’s `useState` and `useEffect` hooks, the component re-renders when the state changes (such as when a new drawing tool is selected or the color changes).
   - **Usage**: When the state is updated (for example, selecting a new tool), the component re-renders, similar to the Observer pattern where changes in the state (subject) notify the UI (observers) to update.

### 2. **Command Pattern**
   - **Explanation**: The Undo, Redo, and Clear Canvas buttons encapsulate specific actions that are executed when clicked.
   - **Usage**: These buttons act as commands, triggering their respective actions (undo, redo, clear) that manipulate the canvas state.

### 3. **Facade Pattern**
   - **Explanation**: The `RoomPage` component abstracts complex functionality related to canvas interactions (e.g., drawing, selecting tools, clearing canvas).
   - **Usage**: By providing a simple interface to interact with the canvas (like tool selection and canvas clearing), the `RoomPage` hides the internal complexities of managing canvas logic and state.

### 4. **State Pattern**
   - **Explanation**: The `useState` hook is used to manage different states (e.g., selected tool, color) of the component.
   - **Usage**: `useState` helps RoomPage respond appropriately to user actions, ensuring that the UI logic is clean and well-organized.

---

## CreateRoomForm Component

The `CreateRoomForm` component uses additional design patterns to handle the creation of unique identifiers and manage the socket connection:

### 1. **Factory Pattern**
   - **Explanation**: The `uuid()` function generates unique identifiers for the `roomId` and `userId`.
   - **Usage**: Each time `uuid()` is called, it generates a new unique ID, encapsulating the process of creating unique values for users and rooms.

### 2. **Singleton Pattern**
   - **Explanation**: The `socket` instance is created once and shared across different components in the app.
   - **Usage**: The Singleton pattern ensures that only one instance of the WebSocket connection (`socket`) exists throughout the app, making it efficient to manage real-time communication.



## Whiteboard component

## Design Patterns Used

The application implements several design patterns to manage various components, states, and behavior more efficiently. Below are the key design patterns applied in the project:

### 1. **Factory Pattern**

The **Factory Pattern** is used to create objects dynamically without specifying the exact class of object that will be created. In this project, the `rough.generator()` function acts as a factory that generates shapes dynamically for drawing on the canvas. This allows the application to generate various rough shapes like rectangles, lines, and pencil paths.

const roughGenerator = rough.generator(); // Factory Pattern
The roughGenerator instance is then used to generate rough shapes (rectangles, lines, paths) on the canvas.

### 2. Observer Pattern
The Observer Pattern is used to create a subscription mechanism where components "listen" for changes and react when the state or data changes. This pattern is applied in multiple areas in the app:

Listening to server updates: The app listens for updates from the server (such as image URLs or drawing data) and re-renders when new data is received.
`javascript
useEffect(() => {
  socket.on("whiteBoardDataResponse", (data) => {
    setImg(data.imgURL);
  });
}, []);
` Synchronizing drawing data across clients: When the drawing data on one client is updated (i.e., a new shape is drawn), the app sends the new canvas data to the server, which then broadcasts it to all other connected clients.
`socket.emit("whiteboardData", canvasImage); // Observer Pattern`
Reacting to state changes: The elements state holds the drawing elements (shapes, paths). When the elements state is updated, the canvas is re-rendered to reflect the latest drawing.
`
useLayoutEffect(() => {
  if (canvasRef) {
    // Redraw canvas with updated elements
  }
}, [elements]);
`// Reacts to changes in `elements` state
### 3. State Pattern
The State Pattern is used to manage the state of the drawing operation, such as the color of the brush and whether the user is currently drawing. Changes in these states trigger changes in behavior:

Color state: The drawing tool's stroke color is updated whenever the color state changes.
`useEffect(() => {
  ctxRef.current.strokeStyle = color; // State Pattern
}, [color]);`

Drawing state: The isDrawing state tracks whether the user is actively drawing or not. This state change affects how mouse events (mousedown, mousemove, mouseup) are handled.

`const handleMouseUp = () => {
  setIsDrawing(false); // Transition between drawing and idle state
};`
### 4. Strategy Pattern
The Strategy Pattern allows the selection of different algorithms or behaviors at runtime. In this project, the strategy pattern is used to apply different drawing strategies depending on the selected tool (pencil, line, rect). Each tool has its own drawing method:

`
elements.forEach((element) => {
  if (element.type === "rect") {
    roughCanvas.draw(roughGenerator.rectangle(...)); // Strategy Pattern
  } else if (element.type === "line") {
    roughCanvas.draw(roughGenerator.line(...));
  } else if (element.type === "pencil") {
    roughCanvas.linearPath(...);
  }
});`


---
Made by Biloshchytskyi Yevhenii and Biloshchytskyi Artem
