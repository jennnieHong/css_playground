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

  // 3. 초기 메뉴 다시 추가 (JS 커리큘럼 중심)
  const menuStructure = [
    {
      title: 'JS: Basics & Logic',
      icon: '🌱',
      order: 1,
      children: [
        { title: '1. Variables & Syntax', path: '/js/basics', icon: '💎', order: 1 },
        { title: '2. BigInt Deep Dive', path: '/js/bigint', icon: '🔢', order: 2 },
        { title: '3. Type Conversion', path: '/js/conversion', icon: '🔄', order: 3 },
        { title: '4. Operators & Logical', path: '/js/operators', icon: '🧮', order: 4 },
        { title: '5. Conditionals & Ternary', path: '/js/conditionals', icon: '🛤️', order: 5 },
        { title: '6. Loops & Patterns', path: '/js/loops', icon: '🔄', order: 6 },
      ]
    },
    {
      title: 'JS: Objects & Data',
      icon: '🧩',
      order: 2,
      children: [
        { title: '7. Iterables & Protocol', path: '/js/iterables', icon: '➰', order: 7 },
        { title: '8. Spread & Destructuring', path: '/js/spread-destructuring', icon: '💥', order: 8 },
        { title: '9. Reference Types & Mem', path: '/js/reference-types', icon: '🧠', order: 9 },
        { title: '10. Objects & Props', path: '/js/objects', icon: '🗃️', order: 10 },
        { title: '11. Arrays Mastery', path: '/js/arrays', icon: '📊', order: 11 },
        { title: '12. Map & Set', path: '/js/map-set', icon: '🗺️', order: 12 },
        { title: '13. Array-like Objects', path: '/js/array-like', icon: '🎭', order: 13 },
      ]
    },
    {
      title: 'JS: Advanced Mechanics',
      icon: '⚙️',
      order: 3,
      children: [
        { title: '14. Functions & Closures', path: '/js/functions', icon: '🧩', order: 14 },
        { title: '15. Prototypes & Chain', path: '/js/prototypes', icon: '🧬', order: 15 },
        { title: '16. Type Determination', path: '/js/type-checking', icon: '🔍', order: 16 },
        { title: '17. Number Precision', path: '/js/precision', icon: '🎯', order: 17 },
        { title: '18. ES6+ Modern', path: '/js/modern', icon: '🚀', order: 18 },
        { title: '19. Generators & Currying', path: '/js/advanced-js', icon: '🧪', order: 19 },
      ]
    },
    {
      title: 'JS: Browser & Async',
      icon: '🌐',
      order: 4,
      children: [
        { title: '20. DOM Manipulation', path: '/js/dom-manipulation', icon: '🖱️', order: 20 },
        { title: '21. Event Handling', path: '/js/events', icon: '⚡', order: 21 },
        { title: '22. Async & Promises', path: '/js/async-basics', icon: '⏳', order: 22 },
        { title: '23. Fetch & Web APIs', path: '/js/async-fetch', icon: '📡', order: 23 },
        { title: '24. Web Storage & Observer', path: '/js/web-storage', icon: '📥', order: 24 },
      ]
    },
    {
      title: 'CSS + JavaScript',
      icon: '🎨',
      order: 5,
      children: [
        { title: '1. Styling & ClassList', path: '/js-css/dom-styling', icon: '✨', order: 1 },
        { title: '2. CSS Variables (JS)', path: '/js-css/variables', icon: '🧪', order: 2 },
        { title: '3. Computed Styles & Rects', path: '/js-css/computed', icon: '📏', order: 3 },
        { title: '4. Animation Events', path: '/js-css/animation-events', icon: '🎬', order: 4 },
      ]
    }
  ];

  console.log('\nAdding all menus...\n');

  const insertMenu = (title, path, parentId, orderIndex, icon) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO menus (title, path, parent_id, order_index, icon) VALUES (?, ?, ?, ?, ?)',
        [title, path, parentId, orderIndex, icon],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  };

  async function processMenus() {
    try {
      for (const group of menuStructure) {
        const groupId = await insertMenu(group.title, null, null, group.order, group.icon);
        console.log(`✓ Group Added: ${group.title} (ID: ${groupId})`);

        for (const item of group.children) {
          const itemId = await insertMenu(item.title, item.path, groupId, item.order, item.icon);
          console.log(`  - Item Added: ${item.title}`);
        }
      }
      console.log('\n✅ Database reset complete!');
      console.log('✅ All menus added successfully!\n');
    } catch (err) {
      console.error('Error processing menus:', err);
    } finally {
      db.close((err) => {
        if (err) console.error('Error closing database:', err);
        else console.log('Database connection closed.');
      });
    }
  }

  processMenus();
});
