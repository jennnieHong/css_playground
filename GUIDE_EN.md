# CSS Study User Guide

This document details how to use the CSS Study application.

## 🎯 Learning Goal
To understand core CSS layout and styling concepts by "interacting" with them directly.

## 🖥️ Key Interface

### 1. Navigation
Select learning topics via the left sidebar menu.
- **Home**: Introduction page
- **CSS Basics**: Core modules like Flexbox, Grid, Animation, Responsive, Position
- **Advanced Topics**: CSS Variables (Custom Properties), Architecture (BEM, etc.)

### 2. Live Code Editor
The core component of each study page.

- **CSS Tab**: Directly edit specific style code.
- **HTML Tab**: Modify the HTML structure (tags, classes) of the example. (New Feature!)
- **Apply Button**: Click to apply your manual code edits. (Enabled only when changes exist)
- **Reset Button**: Revert to the initial state.
- **Interactive Controls**: Manipulate buttons/selectors above the editor to automatically update CSS properties and see immediate results.

## 📚 Study Modules Overview

### Flexbox Study
- `justify-content`: Main axis alignment (flex-start, center, space-between, etc.)
- `align-items`: Cross axis alignment (stretch, center, etc.)
- `flex-direction`: Layout direction (row vs column)

### Grid Study
- `grid-template-columns`: Defining columns (repeat, fr units, etc.)
- `gap`: Spacing between grid cells
- `Alignment`: justify-items, align-items
- `Grid Areas`: Layout using named grid areas

### Animation Study
- `transition`: Experiment with duration and timing-functions
- `keyframes`: Animations using @keyframes (Bounce, Rotate, Fade)

### Position Study (New!)
- **Parent-Child**: Learn the relationship between `relative` parent and `absolute` child (Crucial pattern).
- **Fixed**: Create elements that stay fixed on screen while scrolling.

### Advanced Topics
- **Custom Properties**: Usage and scoping of CSS variables (`--var-name`)
- **Architecture**: Methodologies for large-scale CSS projects

## ❓ Troubleshooting

- **Menu not visible**: 
  - Ensure the backend server is running (`npm run dev` in backend).
  - Ensure the database script (`initDb.js`) has been executed.
- **Code edits not sticking**: 
  - Make sure to click the `Apply` button.
  - Check for syntax errors in your CSS/HTML.

---
Happy Styling with CSS Study! 🎨
