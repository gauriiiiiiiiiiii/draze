# 🎨 DRAZE 
Interactive Geometric Drawing Application

A powerful and intuitive drawing application that combines the precision of geometric shapes with the flexibility of free-form drawing. Built with React and GTK, DRAZE offers a unique blend of web and native capabilities.

## ✨ Key Features

### 🎯 Drawing Capabilities
- **Geometric Shapes** 📐
  - Points, Lines, Circles, Arcs
  - Rectangles, Triangles, Ellipses
  - Parabolas (Horizontal & Vertical)
  - Hyperbolas (Horizontal & Vertical)
  - Special Curves (Cycloid, Epicycloid, Hypocycloid)
  - Spirals and Mirror Images

### 🛠️ Advanced Tools
- **Precision Controls** 📏
  - Coordinate-based positioning
  - Real-time coordinate display
  - Grid system for alignment
  - Customizable line width
  - Color picker with RGB support

### 🔄 History Management
- **Undo/Redo System** ↩️
  - Unlimited undo/redo operations
  - Clear canvas option
  - State preservation
  - Figure stack management

### 🎨 User Interface
- **Modern Design** 💫
  - Clean, intuitive layout
  - Responsive canvas
  - Real-time preview
  - Customizable workspace
  - Dark/Light theme support

## 🏗️ Project Structure

```
DRAZE/
├── src/                    # React application source
│   ├── components/        # React components
│   ├── styles/           # CSS styles
│   └── App.js            # Main React component
├── public/               # Static assets
│   ├── index.html       # Main HTML file
│   └── logo.ico         # Application icon
├── headers/             # C/C++ header files
│   ├── canvas/         # Canvas operations
│   ├── main/          # Core functionality
│   ├── sidebar/       # UI components
│   └── css/          # Styling definitions
├── main.c             # Main C application
└── resources.rc       # Windows resource file
```

## 📦 File Descriptions

### Core Files
- `main.c` - Main application entry point, handles GTK initialization and window management
- `resources.rc` - Windows resource definitions for icons and metadata
- `public/index.html` - Main HTML file with canvas setup and UI structure

### Source Directories
- `src/` - Contains React components and web application logic
- `headers/` - C/C++ header files for native functionality
- `public/` - Static assets and resources

## 🛠️ Technologies Used

- **Frontend** 🎯
  - React.js
  - Material-UI
  - HTML5 Canvas
  - CSS3

- **Backend** ⚙️
  - GTK (GIMP Toolkit)
  - C/C++
  - Windows API

