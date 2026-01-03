# Vessel Hierarchy Tree UI

A React + TypeScript application that visualizes a hierarchical tree of vessel equipment systems and components. Nodes can be expanded, collapsed, dragged, and connected with visual lines.

## How to Run the Project

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## Component Structure

### App.tsx

The main entry point of the application. Provides context and state management for the entire component tree, setting up providers and routing to the main tree view.

### useApp Hook (hook/useApp.ts)

Custom hook that manages application state including:

- Node expand/collapse state
- Pan and zoom transformation values
- Update functions for panning and zooming

### InfinityCanvas (components/infinityCanvas.tsx)

Wrapper component that handles pan and zoom interactions. Uses mouse events to track pan position and mouse wheel to control zoom level. Applies CSS transforms to scale and translate child components.

### Arena (components/arena.tsx)

Renders the canvas background grid or solid background. Serves as the visual foundation for the interactive tree view.

### Node (components/node.tsx)

Renders individual nodes in the hierarchy. Handles:

- Display of node metadata (name, description, and related attributes)
- Expand/collapse toggle for child nodes
- Drag interactions to reposition nodes
- Visual connection lines to parent and child nodes via react-connect-lines

### mock.data.ts

Static JSON structure defining the vessel hierarchy (`vesselHierarchy`). Contains all equipment systems and components with their relationships and properties.

## Trade-offs and Assumptions

### No Backend Integration

Data comes from a static JSON file. There is no server-side API or database integration. All state persists only during the session.

### Free-form Layout

Node positions are manually managed through drag interactions. There is no automatic layout algorithm (e.g., force-directed, hierarchical). Users position nodes as needed for their view.

### DOM-based Connections

Connections between nodes are rendered using the `react-connect-lines` library, which draws lines directly in the DOM. This approach prioritizes simplicity and React integration over custom canvas-based rendering.

### Interaction Focus

The implementation emphasizes clear user interaction and straightforward component architecture over performance optimization. This makes the code easier to understand and modify for different use cases.
