// DOM API demos

class TodoList {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.todos = [];
    this.nextId = 1;
    this.init();
  }
  init() {
    this.container.innerHTML = `
      <div class="todo-app">
        <h2>Todo List</h2>
        <form class="todo-form">
          <input type="text" placeholder="Enter a task..." required>
          <button type="submit">Add Task</button>
        </form>
        <ul class="todo-list"></ul>
        <div class="todo-stats">
          <span class="total">Total: 0</span>
          <span class="completed">Completed: 0</span>
          <span class="remaining">Remaining: 0</span>
        </div>
      </div>`;

    this.form = this.container.querySelector('.todo-form');
    this.input = this.container.querySelector('input');
    this.list = this.container.querySelector('.todo-list');
    this.stats = this.container.querySelector('.todo-stats');

    this.bindEvents();
  }
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addTodo(this.input.value.trim());
      this.input.value = '';
    });
    this.list.addEventListener('click', (e) => {
      const todoItem = e.target.closest('.todo-item');
      if (!todoItem) return;
      const todoId = parseInt(todoItem.dataset.id);
      if (e.target.matches('.toggle-btn')) this.toggleTodo(todoId);
      else if (e.target.matches('.delete-btn')) this.deleteTodo(todoId);
    });
  }
  addTodo(text) {
    if (!text) return;
    this.todos.push({ id: this.nextId++, text, completed: false, createdAt: new Date() });
    this.render();
  }
  toggleTodo(id) { const t = this.todos.find(x => x.id === id); if (t) { t.completed = !t.completed; this.render(); } }
  deleteTodo(id) { this.todos = this.todos.filter(x => x.id !== id); this.render(); }
  render() {
    this.list.innerHTML = '';
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      li.dataset.id = todo.id;
      li.innerHTML = `
        <button class="toggle-btn">${todo.completed ? '✓' : '○'}</button>
        <span class="todo-text">${this.escapeHtml(todo.text)}</span>
        <button class="delete-btn">✕</button>`;
      this.list.appendChild(li);
    });
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const remaining = total - completed;
    this.stats.querySelector('.total').textContent = `Total: ${total}`;
    this.stats.querySelector('.completed').textContent = `Completed: ${completed}`;
    this.stats.querySelector('.remaining').textContent = `Remaining: ${remaining}`;
  }
  escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
}

function logTo(el, msg) {
  const target = document.getElementById(el);
  target.textContent = String(msg);
}

function selectionDemo() {
  const titleElement = document.getElementById('main-title');
  const intro = document.getElementsByClassName('intro')[0];
  const paragraphs = document.getElementsByTagName('p');
  const firstParagraph = document.querySelector('p');
  const mainTitle = document.querySelector('#main-title');
  const firstLink = document.querySelector('a[href="#home"]');
  const allLinks = document.querySelectorAll('a');
  const summary = {
    titleElement: titleElement?.outerHTML,
    intro: intro?.outerHTML,
    paragraphsCount: paragraphs.length,
    firstParagraph: firstParagraph?.outerHTML,
    mainTitle: mainTitle?.outerHTML,
    firstLinkHref: firstLink?.getAttribute('href'),
    allLinksCount: allLinks.length
  };
  logTo('selection-output', JSON.stringify(summary));
}

function traversalDemo() {
  const el = document.querySelector('#main-title');
  const result = {
    parentNode: el.parentNode?.nodeName,
    parentElement: el.parentElement?.nodeName,
    closestContainer: el.closest('.container')?.className,
    childrenCount: el.children?.length || 0,
    childNodesCount: el.childNodes?.length || 0,
    nextElementSibling: el.nextElementSibling?.nodeName || null,
    previousElementSibling: el.previousElementSibling?.nodeName || null
  };
  logTo('selection-output', JSON.stringify(result, null, 2));
}

function updateTitleText() {
  const title = document.querySelector('#main-title');
  title.textContent = 'New Title (textContent)';
}

function createSection() {
  const newDiv = document.createElement('div');
  newDiv.className = 'dynamic-content';
  newDiv.id = 'new-section';
  newDiv.setAttribute('data-created', Date.now());
  newDiv.setAttribute('role', 'section');
  newDiv.innerHTML = `
    <h3>Dynamic Section</h3>
    <p>Created with JavaScript at ${new Date().toLocaleTimeString()}</p>`;
  document.body.appendChild(newDiv);
}

function cloneNav() {
  const originalList = document.querySelector('.nav-list');
  if (!originalList) return;
  const cloned = originalList.cloneNode(true);
  cloned.id = 'secondary-nav';
  cloned.className = 'nav-list secondary';
  cloned.querySelectorAll('a').forEach(a => { a.textContent = `Secondary ${a.textContent}`; });
  document.body.appendChild(cloned);
}

function removeSection() {
  document.querySelector('#new-section')?.remove();
}

function setLinkAttributes() {
  const link = document.querySelector('a');
  if (!link) return;
  link.setAttribute('href', 'https://example.com');
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener');
  link.title = 'Click to visit';
}

function toggleHighlightClass() {
  document.querySelector('.intro')?.classList.toggle('highlight');
}

function applyInlineStyles() {
  const el = document.querySelector('#main-title');
  Object.assign(el.style, {
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '8px',
    border: '2px solid #5d8cff'
  });
}

function showComputedStyles() {
  const el = document.querySelector('#main-title');
  const cs = getComputedStyle(el);
  const out = {
    color: cs.color,
    fontSize: cs.fontSize,
    marginTop: cs.marginTop,
    backgroundColor: cs.backgroundColor,
    padding: cs.padding,
    borderRadius: cs.borderRadius
  };
  logTo('computed-output', JSON.stringify(out, null, 2));
}

function bindEventsDemo() {
  const form = document.getElementById('demo-form');
  const output = document.getElementById('event-output');
  const input = form.querySelector('input');
  const list = document.getElementById('delegation-list');

  input.addEventListener('input', (e) => {
    output.textContent = `Input changed: ${e.target.value}`;
  });
  input.addEventListener('focus', () => { input.classList.add('focused'); });
  input.addEventListener('blur', () => { input.classList.remove('focused'); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const entries = Array.from(data.entries());
    output.textContent = `Form submitted: ${JSON.stringify(entries)}`;
  });

  window.addEventListener('resize', () => {
    output.textContent = `Window resized: ${window.innerWidth}x${window.innerHeight}`;
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 's') e.preventDefault();
    output.textContent = `Key pressed: ${e.key}`;
  });

  // Event delegation on list
  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const text = event.target.textContent;
      output.textContent = `List button clicked: ${text}`;
    }
  });

  document.getElementById('add-delegation-item').addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `<button>New Item</button>`;
    list.appendChild(li);
  });
}

function setupNav() {
  const showDom = document.getElementById('show-dom');
  const showCssom = document.getElementById('show-cssom');
  const domPanel = document.getElementById('dom-section');
  const cssomPanel = document.getElementById('cssom-section');
  showDom.addEventListener('click', () => { domPanel.classList.add('visible'); cssomPanel.classList.remove('visible'); });
  showCssom.addEventListener('click', () => { cssomPanel.classList.add('visible'); domPanel.classList.remove('visible'); });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  setupNav();
  document.getElementById('select-demo').addEventListener('click', selectionDemo);
  document.getElementById('traverse-demo').addEventListener('click', traversalDemo);
  document.getElementById('update-text').addEventListener('click', updateTitleText);
  document.getElementById('add-section').addEventListener('click', createSection);
  document.getElementById('clone-nav').addEventListener('click', cloneNav);
  document.getElementById('remove-section').addEventListener('click', removeSection);
  document.getElementById('set-attrs').addEventListener('click', setLinkAttributes);
  document.getElementById('toggle-class').addEventListener('click', toggleHighlightClass);
  document.getElementById('apply-inline-styles').addEventListener('click', applyInlineStyles);
  document.getElementById('show-computed').addEventListener('click', showComputedStyles);
  document.getElementById('event-bubbling').addEventListener('click', () => {
    console.log("Event Bubbling Demo: Click on inner box to see event bubbling in action.");
  })
  document.getElementById('event-capturing').addEventListener('click', () => {
    console.log("Event Capturing Demo: Click on inner box to see event capturing in action.");
  })
  bindEventsDemo();
  new TodoList('#app');
});
