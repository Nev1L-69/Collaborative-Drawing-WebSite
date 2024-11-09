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

---
Made by Biloshchytskyi Yevhenii and Biloshchytskyi Artem
