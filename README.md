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


