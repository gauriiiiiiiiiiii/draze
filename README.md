# 🎨 DRAZE

> **Where Shapes Take Form**

---

## 🌟 Overview

Draze is a cross-platform, interactive geometric drawing application that empowers users to visualize, draw, and manipulate a wide variety of geometric figures. Draze is unique in that it offers both a modern web-based interface (built with React) and a native desktop experience (built with C/GTK), sharing a common design language and feature set. It is designed for students, educators, engineers, and anyone interested in geometry or visual mathematics.

---

## 🚀 Motivation & Vision

- **Bridging the gap** between educational geometry tools and modern UI/UX standards.
- **Making geometry accessible, beautiful, and interactive** for everyone.
- Inspired by the lack of intuitive, cross-platform tools for geometric visualization.
- Created to be both an educational resource and a practical tool for geometric exploration.

---

## 🏗️ Project Structure

```
Draze/
├── src/                    # React application source (frontend)
│   ├── components/         # Modular React components (Canvas, Sidebar, Toolbar, etc.)
│   ├── styles/             # CSS styles for the web app
│   └── App.js              # Main React application logic
├── public/                 # Static assets for the web app
│   ├── index.html          # Main HTML file (web entry point)
│   └── logo.ico            # Application icon
├── headers/                # C/C++ header files (native backend)
│   ├── canvas/             # Canvas drawing logic and shape definitions
│   ├── main/               # Core windowing and user manual logic
│   ├── sidebar/            # Sidebar and UI controls for GTK
│   ├── css/                # Native CSS styling for GTK
│   └── ...                 # Other UI and logic headers
├── main.c                  # Main C application (GTK entry point)
├── Makefile                # Build instructions for native app
├── package.json            # JS dependencies and scripts for React app
├── resources.rc            # Windows resource file (icons, metadata)
└── README.md               # Project documentation
```

---

## 🛠️ Tech Stack & Libraries

### **Frontend (Web)**
- **React.js** ⚛️ — Component-based UI framework for building the web interface.
- **Material-UI (MUI)** 🎨 — Consistent, accessible UI components.
- **HTML5 Canvas** 🖼️ — For rendering geometric figures interactively.
- **CSS3 & styled-components** 🎨 — Custom and responsive styling.
- **Fabric.js** 🧵 — (Optional) For advanced canvas manipulation.

### **Backend (Native Desktop)**
- **C / C++** 💻 — Core logic for the native application.
- **GTK+ 3** 🖥️ — Cross-platform GUI toolkit for the native desktop interface.
- **Cairo** 🖌️ — 2D graphics library for drawing shapes in GTK.
- **Windows API** 🪟 — For resource management and native integration (via `resources.rc`).

### **Build & Tooling**
- **Makefile** 🛠️ — For compiling the native C/GTK application.
- **npm** 📦 — For managing JS dependencies and scripts.
- **Git** 🔗 — Version control and collaboration.

---

## 🧩 Features

- **Draw Geometric Shapes:** Points, lines, circles, arcs, rectangles, triangles, ellipses, parabolas (horizontal/vertical), hyperbolas (horizontal/vertical), cycloids, epicycloids, hypocycloids, spirals, mirror images.
- **Precision Controls:** Enter coordinates and parameters for exact placement.
- **Color & Line Width Selection:** Custom and preset options for both.
- **Undo/Redo:** Unlimited history for drawing actions.
- **Clear Canvas:** Remove all figures with a single action.
- **Real-time Coordinate Display:** Mouse position in geometric coordinates.
- **Code Preview (Web):** JSON output of all figures for easy export or debugging.
- **User Manual:** Built-in help dialog for guidance.
- **Keyboard Shortcuts:** Ctrl+D (Draw), Ctrl+Z (Undo), Ctrl+Y (Redo), Ctrl+C (Clear).
- **Modern, Responsive UI:** Clean layout, dark/light theme support (web), and accessible design.

---

## 🧬 Architecture & Data Flow

### **Monolithic, Dual-Platform Design**
- **Web:** Single-page React app, all logic runs in-browser.
- **Native:** Single binary, all logic in one process, modularized via headers and source files.

### **Data Flow**
- **Web:**
  - User → UI Event → State Update → Canvas Redraw → (Undo/Redo/Code Preview updated)
- **Native:**
  - User → GTK Signal → FigureStack Update → Cairo Redraw → (Undo/Redo/Sidebar updated)

### **Component & Module Structure**
- **Web:** Modular React components (Canvas, Sidebar, Toolbar, BottomBar, ColorPicker, CodePreview), CSS-in-JS, and separate style files.
- **Native:** Header files for each logical module (canvas, sidebar, buttons, etc.), with clear separation of concerns.

---

## 🏛️ Implementation Details

### **Frontend (React)**
- **State Management:** React hooks for color, line width, undo/redo stacks, and drawing state.
- **Canvas Rendering:** HTML5 Canvas API for performant, flexible drawing.
- **UI Components:** Modular, styled with Material-UI and custom CSS for a polished look.
- **Keyboard Shortcuts:** Handled via event listeners for fast workflow.
- **Code Preview:** JSON output of all figures for easy export or debugging.
- **Input Validation:** All input fields are type-checked and validated for range and presence.

### **Native (C/GTK)**
- **GTK Window:** Main window with custom title bar and sidebar.
- **Sidebar:** Tool selection, coordinate display, color/width controls, and keyboard shortcuts.
- **Drawing Logic:** Cairo for high-quality vector drawing of all supported shapes.
- **Undo/Redo:** Managed via custom stack data structures (linked lists).
- **Custom CSS:** Theming and styling via GTK CSS provider.
- **User Manual:** Modal dialog for help and instructions.
- **Error Handling:** Error checks for memory allocation, file I/O, and GTK operations; error messages to stderr.

---

## 🗂️ Key Modules & Data Structures

- **FigureStack (C):** Linked list for managing drawn figures and supporting undo/redo.
- **Shape Functions (C):** Dedicated functions for each geometric shape using Cairo.
- **React State (JS):** Arrays for undo/redo stacks, objects for figure data.
- **Sidebar/Toolbar:** Modular UI for tool selection and property editing.

---

## ⚡ Performance & Optimization

- **Efficient Data Structures:** Linked lists (C) and arrays (JS) for fast undo/redo.
- **Optimized Redraws:** Canvas redraws only on state change.
- **Minimal DOM Updates:** React ensures only necessary UI updates.
- **Memory Management:** Careful allocation and cleanup in C.
- **Stateless Web Design:** Enables easy scaling and high concurrency.

---

## 🔒 Security Considerations

- **No User Data Transmission:** All data is local and ephemeral.
- **Input Validation:** All user input is sanitized and type-checked.
- **No Database/Server:** No risk of SQL injection, XSS, or CSRF.
- **No Authentication:** No sensitive data or credentials handled.

---

## 🧪 Testing & Deployment

- **Manual Testing:** All features tested interactively.
- **Unit Testing (Web):** Can be added using Jest/React Testing Library.
- **Build & Deploy (Web):** Deployable via Vercel, Netlify, or static hosting.
- **Build & Deploy (Native):** Compiled binary, distributable as an installer or zip.
- **Version Control:** Git for code, GitHub for collaboration.

---

## 🧠 Challenges & Solutions

- **Advanced Curves:** Implementing cycloids, epicycloids, and spirals required careful mathematical calculations and efficient rendering.
- **Undo/Redo Management:** Ensuring state consistency and memory safety, especially in C, was a key challenge.
- **Cross-Platform Consistency:** Achieved by mirroring features and design between web and native versions.
- **Memory Leaks:** Fixed by careful allocation and freeing of nodes in C.

---

## 📈 Impact, Evaluation & Future Work

- **Designed for Single-User:** But web version can support many concurrent users (stateless).
- **Performance:** Remains responsive with hundreds of figures.
- **Metrics:** Could track render time, memory usage, and user actions in future.
- **Feedback:** Positive feedback from peers and educators for usability and design.
- **Future Features:**
  - Save/load drawings
  - Export to SVG/PDF
  - Collaborative drawing (web)
  - More advanced shapes and tools
  - Automated testing and CI/CD

---

## 🏆 Project Management & Collaboration

- **Task Management:** Task lists, GitHub issues, and milestones.
- **Version Control:** Git/GitHub for code and issues.
- **Documentation:** Markdown for all docs.
- **Teamwork:** Regular meetings, code reviews, and clear module ownership.
- **Development Methodology:** Kanban-style, iterative development.

---

## 🧮 Data Structures & Algorithms

- **Stacks (Undo/Redo):** Linked lists (C), arrays (JS).
- **Figure List:** Array (JS), linked list (C).
- **Shape Parameters:** Structs (C), objects (JS).
- **Complexity:**
  - Drawing: O(n) for n figures
  - Undo/Redo: O(1) for push/pop
  - Memory: Linear in number of figures

---

## 🌱 Personal & Team Growth

- **Cross-Platform UI:** Deepened understanding of both frontend and systems programming.
- **Design for Usability & Performance:** Improved skills in balancing user experience with technical constraints.
- **Conflict Resolution:** UI design disagreements resolved by prototyping and user feedback.
- **Pride:** Most proud of the seamless, consistent user experience across both web and native platforms.

---

## 📚 Appendix: Codebase & Data Flow Diagram

```
flowchart TD
    User -->|Web| ReactApp
    User -->|Native| GTKApp
    ReactApp --> HTML5Canvas
    ReactApp --> SidebarToolbarBottomBar
    ReactApp --> StateManagement
    HTML5Canvas --> FigureDataJSON
    SidebarToolbarBottomBar --> StateManagement
    StateManagement --> HTML5Canvas
    GTKApp --> GTKWindow
    GTKApp --> SidebarToolbar
    GTKApp --> CairoCanvas
    SidebarToolbar --> CairoCanvas
    GTKWindow --> CairoCanvas
    CairoCanvas --> FigureStackCStruct
    FigureStackCStruct --> UndoRedoStack
    FigureStackCStruct --> ShapeDrawingFunctions
```

---

## 🏁 Getting Started

### Web (React)
```sh
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)

### Native (C/GTK)
```sh
sudo apt install libgtk-3-dev
make
./draze
```

---

> **Draze** — Where Shapes Take Form. For questions, feedback, or contributions, please open an issue or pull request!

---

## **1️⃣ Project Overview & High-Level Design**

**Q1: Can you give me a quick overview of Draze?**
**A:** Draze is a cross-platform geometric drawing application that allows users to visualize, draw, and manipulate a variety of geometric shapes. It has two implementations: a modern React-based web app and a native desktop version built in C with GTK and Cairo. Both share the same design language, feature set, and workflow, so users get a consistent experience whether they’re on the web or desktop. It’s aimed at students, educators, engineers, and anyone interested in visualizing geometry in an interactive way.

---

**Q2: Why did you decide to build both a web and a native version?**
**A:** The motivation was twofold:

1. **Accessibility** – The web version makes it easy for anyone to try the tool instantly without installation.
2. **Performance and offline capability** – The native version provides lower-latency drawing, integrates with the OS, and works without internet access.
   Additionally, implementing both pushed me to design modular code and think carefully about how to translate features across very different tech stacks.

---

**Q3: How do the web and native versions maintain feature parity?**
**A:** I used a **mirroring approach** to feature development. For every feature on the web, I designed an equivalent GTK implementation in C. Both use a similar mental model — a shape stack, undo/redo operations, and a modular UI — which makes it easier to keep them in sync.

---

## **2️⃣ Frontend (React) Specific**

**Q4: How is drawing handled in the web version?**
**A:** The web version uses the **HTML5 Canvas API** for drawing. React manages UI state — like selected shape, color, and line width — while actual rendering is done imperatively on the canvas to avoid unnecessary DOM updates. State changes trigger a redraw of all shapes in memory, ensuring consistency even after undo/redo.

---

**Q5: Why not use SVG instead of Canvas?**
**A:** SVG excels for DOM-based graphics with many individual elements, but in Draze, users can draw hundreds of shapes and curves interactively. Canvas offers better performance for rapid, continuous rendering, especially for complex curves like epicycloids and spirals.

---

**Q6: How do you implement undo/redo in the React version?**
**A:** I maintain two arrays:

* `undoStack` for all drawn figures
* `redoStack` for figures removed during undo
  When a shape is drawn, it’s pushed onto the undo stack. Undo pops from undoStack to redoStack; redo pops back. Each operation triggers a full canvas redraw from the current undoStack contents.

---

## **3️⃣ Native (C/GTK) Specific**

**Q7: How is drawing implemented in the native version?**
**A:** Drawing is handled with the **Cairo graphics library** inside GTK’s drawing area widget. Each shape has its own drawing function that takes parameters (like center, radius, color). All shapes are stored in a linked list (`FigureStack`), which is iterated over during redraws.

---

**Q8: Can you explain your memory management strategy in C?**
**A:** Every shape node in the linked list is dynamically allocated. On deletion (undo/redo or clear), memory is freed immediately to avoid leaks. On exit, I traverse the list and free all nodes. I also check allocation return values and print errors to `stderr` if needed.

---

**Q9: How are undo/redo stacks implemented in C?**
**A:** They’re implemented as linked lists for O(1) push/pop. The `undoStack` list contains currently drawn figures, and `redoStack` contains figures undone. Redoing moves a node back from redoStack to undoStack.

---

## **4️⃣ Cross-Platform & Architecture**

**Q10: What are the biggest differences between implementing Draze in React vs. C/GTK?**
**A:**

* **Rendering model**: React is declarative and uses Canvas API; GTK+Cairo is imperative.
* **Memory management**: Automatic in JS, manual in C.
* **UI composition**: React has reusable components; GTK uses widgets and signals.
* **State management**: Hooks in React vs. manual structs in C.
  These differences affected how I designed the core drawing logic for each platform.

---

**Q11: How did you ensure performance stays smooth with many shapes?**
**A:**

* Optimized redraws to only happen when state changes.
* Used lightweight data structures (arrays in JS, linked lists in C).
* Avoided storing unnecessary intermediate states.
* Precomputed math-heavy curves like cycloids before drawing, instead of recalculating on every frame.

---

## **5️⃣ Mathematical & Algorithmic**

**Q12: How do you draw complex curves like cycloids or spirals?**
**A:** These are drawn using their parametric equations. For example, a cycloid is defined by:

```
x = r(t - sin(t))
y = r(1 - cos(t))
```

I iterate over `t` in small steps, compute `(x, y)` for each, and draw connected line segments. Step size is tuned for smoothness vs. performance.

---

**Q13: What’s the time complexity for a redraw?**
**A:** O(n) for n figures, since each redraw involves iterating through the list/array of figures and re-rendering them.

---

## **6️⃣ Testing & Reliability**

**Q14: How did you test Draze?**
**A:** Testing was mostly manual, focusing on:

* Drawing correctness (shape dimensions and coordinates)
* Undo/redo correctness
* Cross-browser and cross-platform consistency
  For web, automated tests could be added with Jest/React Testing Library; for native, unit tests could be built with GLib’s test framework.

---

**Q15: How do you handle invalid inputs?**
**A:** All coordinate and parameter inputs are validated before being used. In JS, I check types and ranges; in C, I validate input before processing to avoid undefined behavior.

---

## **7️⃣ Future & Improvements**

**Q16: What features would you like to add next?**
**A:**

* Save/load drawings (JSON or SVG)
* Export to vector formats (SVG/PDF)
* Collaborative web mode
* More shape types (Bezier curves, polygons)
* Automated test coverage

---

**Q17: How would you add collaborative drawing in the web version?**
**A:** I’d use WebSockets or WebRTC for real-time updates, with a shared state model stored on a backend server. Changes would be diffed and broadcasted to all clients.

---



