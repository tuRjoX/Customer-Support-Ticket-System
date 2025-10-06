# Customer-Support-Ticket-System

# Live Link: [Customer-Support-Ticket-System](cs-ticket-system.pages.dev)

## What is JSX, and Why is it Used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code inside React components.  
It makes it easier to visualize the UI structure while maintaining JavaScript logic.

### Example:

```jsx
const element = <h1>Hello, React!</h1>;
```

### Why It’s Used:

- **Readability:** Combines HTML structure and JavaScript logic in a single file.
- **Performance:** Compiles into optimized JavaScript using `React.createElement()`.
- **Developer Efficiency:** Easier debugging and code maintenance.

---

## What is the Difference Between State and Props ?

| Feature        | State                                                   | Props                                                    |
| -------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| **Definition** | A component’s internal data that can change over time   | Data passed from a parent to a child component           |
| **Mutability** | Mutable (can be changed using `setState` or `useState`) | Immutable (cannot be changed by the receiving component) |
| **Ownership**  | Managed within the component itself                     | Controlled by the parent component                       |
| **Usage**      | Used for dynamic data like user input or toggles        | Used to configure or customize child components          |

### Example:

```jsx
// Parent Component
<ChildComponent title="Hello" />;

// Child Component
function ChildComponent(props) {
  return <h1>{props.title}</h1>;
}
```

---

## What is the useState Hook, and How Does It Work ?

The **`useState`** hook lets functional components manage state.  
It returns a **state variable** and a **function** to update that variable.

### Syntax:

```jsx
const [count, setCount] = useState(0);
```

### How It Works:

1. Initializes `count` with a value of `0`.
2. When `setCount()` is called, React re-renders the component with the updated value.

### Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

---

## How to Share State Between Components in React ?

There are several ways to share state between components:

1. **Lifting State Up** – Move the shared state to the nearest common ancestor and pass it down via props.
2. **React Context API** – Create a global state accessible to multiple components.
3. **State Management Libraries** – Use libraries like Redux, Zustand, or Recoil for complex state logic.

### Example (Lifting State Up):

```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputComponent value={value} setValue={setValue} />
      <DisplayComponent value={value} />
    </>
  );
}
```

---

## How is Event Handling Done in React ?

Event handling in React is similar to JavaScript but uses **camelCase syntax** and **functions as event handlers**.

### Example:

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Key Points:

- Events are named using **camelCase** (`onClick`, `onChange`).
- Handlers are **passed as functions**, not strings.
- React uses **synthetic events** for cross-browser compatibility.

---
