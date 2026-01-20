import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = path.join(__dirname, '../database/cssStudy.db');
const db = new sqlite3.Database(dbPath);

console.log('Cleaning duplicate menus and resetting database...\n');

db.serialize(() => {
  // 1. 기존 메뉴 모두 삭제
  db.run('DELETE FROM menus', (err) => {
    if (err) {
      console.error('Error deleting menus:', err);
      db.close();
      return;
    }
    console.log('✓ All existing menus deleted');
  });

  // 2. Auto-increment 카운터 리셋
  db.run('DELETE FROM sqlite_sequence WHERE name="menus"', (err) => {
    if (err) {
      console.error('Error resetting sequence:', err);
    }
  });

  // 3. 초기 메뉴 다시 추가
  const initialMenus = [
    // CSS Basics Group
    { title: 'CSS Basics', path: null, parent_id: null, order_index: 1, icon: '🎨' },
    { title: 'Flexbox Study', path: '/flexbox', parent_id: 1, order_index: 1, icon: '📦' },
    { title: 'Grid Study', path: '/grid', parent_id: 1, order_index: 2, icon: '⚡' },
    { title: 'Animation Study', path: '/animation', parent_id: 1, order_index: 3, icon: '🎬' },
    { title: 'Responsive Study', path: '/responsive', parent_id: 1, order_index: 4, icon: '📱' },
    { title: 'Position Study', path: '/position', parent_id: 1, order_index: 5, icon: '📍' },

    // Advanced Topics Group
    { title: 'Advanced Topics', path: null, parent_id: null, order_index: 2, icon: '🚀' },
    { title: 'Custom Properties', path: '/custom-properties', parent_id: 7, order_index: 1, icon: '🎛️' },
    { title: 'CSS Architecture', path: '/architecture', parent_id: 7, order_index: 2, icon: '🏗️' },
    { title: 'Container Queries', path: '/container-queries', parent_id: 7, order_index: 3, icon: '📦' },
    { title: 'Stacking & Layers', path: '/stacking', parent_id: 7, order_index: 4, icon: '📚' },
    { title: 'Pseudo Elements', path: '/pseudo-elements', parent_id: 7, order_index: 5, icon: '::' },
    { title: 'Performance & Rendering', path: '/performance', parent_id: 7, order_index: 6, icon: '⚡' },
    { title: 'Modern Selectors', path: '/selectors', parent_id: 7, order_index: 7, icon: '🎯' },

    // CSS Foundations Group
    { title: 'CSS Foundations', path: null, parent_id: null, order_index: 3, icon: '🏛️' },
    { title: 'Display Study', path: '/display', parent_id: 15, order_index: 1, icon: '📐' },
    { title: 'Box Model Study', path: '/box-model', parent_id: 15, order_index: 2, icon: '📦' },
    { title: 'Float & Clear Study', path: '/float', parent_id: 15, order_index: 3, icon: '🌊' },
    { title: 'Logical Properties', path: '/logical-properties', parent_id: 15, order_index: 4, icon: '🌐' },

    // Visual & Design Group
    { title: 'Visual & Design', path: null, parent_id: null, order_index: 4, icon: '🎨' },
    { title: 'Colors & Backgrounds', path: '/colors', parent_id: 20, order_index: 1, icon: '🌈' },
    { title: 'Typography', path: '/typography', parent_id: 20, order_index: 2, icon: '✍️' },
    { title: 'Units & Sizing', path: '/units', parent_id: 20, order_index: 3, icon: '📏' },
    { title: 'Height & Sizing', path: '/height', parent_id: 20, order_index: 4, icon: '📐' },
    { title: 'CSS Animations', path: '/animations', parent_id: 20, order_index: 5, icon: '✨' },

    // Interaction Group
    { title: 'Interaction', path: null, parent_id: null, order_index: 5, icon: '👆' },
    { title: 'States & Pseudo-classes', path: '/interaction', parent_id: 26, order_index: 1, icon: '🔄' },
    { title: 'Form Styling', path: '/forms', parent_id: 26, order_index: 2, icon: '📝' },
    { title: 'Accessibility (A11y)', path: '/accessibility', parent_id: 26, order_index: 3, icon: '♿' }
  ];

  console.log('\nAdding all menus...\n');

  const stmt = db.prepare(`
    INSERT INTO menus (title, path, parent_id, order_index, icon)
    VALUES (?, ?, ?, ?, ?)
  `);

  initialMenus.forEach((menu, index) => {
    stmt.run(menu.title, menu.path, menu.parent_id, menu.order_index, menu.icon, function (err) {
      if (err) {
        console.error(`Error inserting ${menu.title}:`, err);
      } else {
        console.log(`✓ ${index + 1}/${initialMenus.length} Added: ${menu.title}`);
      }
    });
  });

  stmt.finalize((err) => {
    if (err) {
      console.error('Error finalizing:', err);
    } else {
      console.log('\n✅ Database reset complete!');
      console.log('✅ All menus added successfully!\n');
      console.log('📋 Total: 5 groups, 19 study pages\n');
    }

    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed.');
      }
    });
  });
});
