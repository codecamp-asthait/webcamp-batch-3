// IndexedDB Beginner Demo

let db = null;
let currentStore = 'items';

function log(id, msg) {
  const el = document.getElementById(id);
  el.textContent = typeof msg === 'string' ? msg : JSON.stringify(msg, null, 2);
}

function openDB(name, storeName, version = 1) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(name, version);
    currentStore = storeName;

    req.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains(storeName)) {
        const store = database.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        store.createIndex('createdAt', 'createdAt');
      }
    };
    req.onsuccess = () => { db = req.result; resolve(db); };
    req.onerror = () => reject(req.error);
  });
}

function getStore(mode = 'readonly') {
  const tx = db.transaction(currentStore, mode);
  return tx.objectStore(currentStore);
}

async function addItem(text) {
  if (!db) throw new Error('DB not open');
  const store = getStore('readwrite');
  const item = { text, createdAt: new Date().toISOString() };
  return requestToPromise(store.add(item));
}

async function listItems() {
  if (!db) throw new Error('DB not open');
  const store = getStore('readonly');
  if (store.getAll) {
    return requestToPromise(store.getAll());
  }
  return new Promise((resolve, reject) => {
    const items = [];
    const req = store.openCursor();
    req.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) { items.push(cursor.value); cursor.continue(); }
      else resolve(items);
    };
    req.onerror = () => reject(req.error);
  });
}

async function getItem(id) {
  if (!db) throw new Error('DB not open');
  const store = getStore('readonly');
  return requestToPromise(store.get(Number(id)));
}

async function deleteItem(id) {
  if (!db) throw new Error('DB not open');
  const store = getStore('readwrite');
  return requestToPromise(store.delete(Number(id)));
}

async function clearStore() {
  if (!db) throw new Error('DB not open');
  const store = getStore('readwrite');
  return requestToPromise(store.clear());
}

function requestToPromise(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Upgrade to v2: add index 'text' if missing
function upgradeDB(name, storeName) {
  return new Promise((resolve, reject) => {
    const currentVersion = db?.version || 1;
    const req = indexedDB.open(name, currentVersion + 1);
    req.onupgradeneeded = (e) => {
      const database = e.target.result;
      const store = database.objectStoreNames.contains(storeName)
        ? e.target.transaction.objectStore(storeName)
        : database.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      if (!store.indexNames.contains('text')) {
        store.createIndex('text', 'text', { unique: false });
      }
    };
    req.onsuccess = () => { db = req.result; resolve(db); };
    req.onerror = () => reject(req.error);
  });
}

async function findByText(value) {
  if (!db) throw new Error('DB not open');
  const store = getStore('readonly');
  const idx = store.index('text');
  if (!idx) throw new Error('Index "text" not found. Run upgrade.');
  const results = [];
  return new Promise((resolve, reject) => {
    const range = IDBKeyRange.only(value);
    const req = idx.openCursor(range);
    req.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) { results.push(cursor.value); cursor.continue(); }
      else resolve(results);
    };
    req.onerror = () => reject(req.error);
  });
}

function setupUI() {
  document.getElementById('db-open').addEventListener('click', async () => {
    const name = document.getElementById('db-name').value || 'demo-db';
    const store = document.getElementById('store-name').value || 'items';
    try { await openDB(name, store); log('db-output', { name, store, version: db.version }); }
    catch (err) { log('db-output', 'Open failed: ' + err); }
  });

  document.getElementById('item-add').addEventListener('click', async () => {
    const text = document.getElementById('item-text').value.trim();
    if (!text) { log('add-output', 'Text required'); return; }
    try { const id = await addItem(text); log('add-output', { id, text }); }
    catch (err) { log('add-output', 'Add failed: ' + err); }
  });

  document.getElementById('items-list').addEventListener('click', async () => {
    try { const items = await listItems(); log('list-output', items); }
    catch (err) { log('list-output', 'List failed: ' + err); }
  });

  document.getElementById('item-get').addEventListener('click', async () => {
    const id = document.getElementById('item-id').value;
    if (!id) { log('getdel-output', 'ID required'); return; }
    try { const item = await getItem(id); log('getdel-output', item ?? 'not found'); }
    catch (err) { log('getdel-output', 'Get failed: ' + err); }
  });

  document.getElementById('item-delete').addEventListener('click', async () => {
    const id = document.getElementById('item-id').value;
    if (!id) { log('getdel-output', 'ID required'); return; }
    try { await deleteItem(id); log('getdel-output', 'Deleted ' + id); }
    catch (err) { log('getdel-output', 'Delete failed: ' + err); }
  });

  document.getElementById('store-clear').addEventListener('click', async () => {
    try { await clearStore(); log('clear-output', 'Store cleared'); }
    catch (err) { log('clear-output', 'Clear failed: ' + err); }
  });

  document.getElementById('db-upgrade').addEventListener('click', async () => {
    const name = document.getElementById('db-name').value || 'demo-db';
    const store = document.getElementById('store-name').value || 'items';
    try { await upgradeDB(name, store); log('upgrade-output', { upgradedTo: db.version, indexes: [...getStore().indexNames] }); }
    catch (err) { log('upgrade-output', 'Upgrade failed: ' + err); }
  });

  document.getElementById('find-by-text').addEventListener('', async () => {
    const text = document.getElementById('find-text').value.trim();
    if (!text) { log('upgrade-output', 'Text required'); return; }
    try { const res = await findByText(text); log('upgrade-output', res); }
    catch (err) { log('upgrade-output', 'Find failed: ' + err); }
  });

  document.getElementById('open-tab').addEventListener('click', () => { window.open(location.href, '_blank'); });
}

window.addEventListener('DOMContentLoaded', setupUI);
