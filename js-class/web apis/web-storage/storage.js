// Web Storage (LocalStorage & SessionStorage) demo

function safeParse(str) {
  try { return JSON.parse(str); } catch { return str; }
}
function toStringValue(input, asJson) {
  if (!asJson) return String(input);
  try { return JSON.stringify(JSON.parse(input)); } catch { return JSON.stringify(input); }
}
function listStorage(storage) {
  const out = [];
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    out.push({ key, value: storage.getItem(key) });
  }
  return out;
}
function exportStorage(storage) {
  const obj = {};
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    obj[key] = storage.getItem(key);
  }
  return JSON.stringify(obj, null, 2);
}
async function importFromFile(inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return null;
  const text = await file.text();
  return text;
}

function setupPanel(panelId, storage, ids) {
  const keyEl = document.getElementById(ids.key);
  const valEl = document.getElementById(ids.val);
  const jsonEl = document.getElementById(ids.json);
  const outEl = document.getElementById(ids.out);
  const listOutEl = document.getElementById(ids.listOut);
  const fileEl = document.getElementById(ids.file);
  const eventsOutEl = document.getElementById(ids.eventsOut);

  document.getElementById(ids.set).addEventListener('click', () => {
    const k = keyEl.value.trim();
    if (!k) { outEl.textContent = 'Key is required'; return; }
    const v = toStringValue(valEl.value, jsonEl.checked);
    try { storage.setItem(k, v); outEl.textContent = `Set {"${k}": ${v}}`; }
    catch (err) { outEl.textContent = `Set failed: ${err}`; }
  });

  document.getElementById(ids.get).addEventListener('click', () => {
    const k = keyEl.value.trim();
    if (!k) { outEl.textContent = 'Key is required'; return; }
    const v = storage.getItem(k);
    outEl.textContent = v === null ? 'null' : JSON.stringify(safeParse(v), null, 2);
  });

  document.getElementById(ids.remove).addEventListener('click', () => {
    const k = keyEl.value.trim();
    if (!k) { outEl.textContent = 'Key is required'; return; }
    storage.removeItem(k);
    outEl.textContent = `Removed ${k}`;
  });

  document.getElementById(ids.clear).addEventListener('click', () => {
    storage.clear();
    outEl.textContent = 'Cleared storage';
  });

  document.getElementById(ids.list).addEventListener('click', () => {
    listOutEl.textContent = JSON.stringify(listStorage(storage), null, 2);
  });

  document.getElementById(ids.export).addEventListener('click', () => {
    listOutEl.textContent = exportStorage(storage);
  });

  document.getElementById(ids.import).addEventListener('click', async () => {
    const text = await importFromFile(fileEl);
    if (!text) { listOutEl.textContent = 'No file selected'; return; }
    try {
      const obj = JSON.parse(text);
      Object.entries(obj).forEach(([k, v]) => storage.setItem(k, String(v)));
      listOutEl.textContent = 'Import complete';
    } catch (err) {
      listOutEl.textContent = `Import failed: ${err}`;
    }
  });

  if (eventsOutEl) {
    window.addEventListener('storage', (e) => {
      const info = {
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        url: e.url,
        storageArea: e.storageArea === localStorage ? 'localStorage' : 'sessionStorage'
      };
      eventsOutEl.textContent = JSON.stringify(info, null, 2);
    });
  }
}

function setupThemePrefs() {
  const out = document.getElementById('local-theme-output');
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme || '';
    out.textContent = `Theme: ${theme || 'default'}`;
  };
  const current = localStorage.getItem('pref:theme');
  applyTheme(current);
  document.getElementById('local-theme-dark').addEventListener('click', () => {
    localStorage.setItem('pref:theme', 'dark'); applyTheme('dark');
  });
  document.getElementById('local-theme-light').addEventListener('click', () => {
    localStorage.setItem('pref:theme', 'light'); applyTheme('light');
  });
  document.getElementById('local-theme-reset').addEventListener('click', () => {
    localStorage.removeItem('pref:theme'); applyTheme('');
  });
}

function quotaWrite(sizeKB, key, out) {
  const chunk = 'x'.repeat(1024); // 1KB
  let data = '';
  try {
    for (let i = 0; i < sizeKB; i++) data += chunk;
    localStorage.setItem(key, data);
    out.textContent = `Wrote ${sizeKB}KB to ${key}`;
  } catch (err) {
    out.textContent = `Quota exceeded at ~${data.length/1024|0}KB: ${err}`;
  }
}

function setupQuotaTester() {
  const out = document.getElementById('local-quota-output');
  document.getElementById('local-quota-small').addEventListener('click', () => quotaWrite(100, 'quota:test', out));
  document.getElementById('local-quota-large').addEventListener('click', () => quotaWrite(5000, 'quota:test', out));
  document.getElementById('local-quota-clear').addEventListener('click', () => { localStorage.removeItem('quota:test'); out.textContent = 'Cleared quota test'; });
}

function setupNav() {
  const localPanel = document.getElementById('local-panel');
  const sessPanel = document.getElementById('session-panel');
  document.getElementById('show-local').addEventListener('click', () => { localPanel.classList.add('visible'); sessPanel.classList.remove('visible'); });
  document.getElementById('show-session').addEventListener('click', () => { sessPanel.classList.add('visible'); localPanel.classList.remove('visible'); });
  document.getElementById('open-tab').addEventListener('click', () => { window.open(location.href, '_blank'); });
}

window.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupPanel('local-panel', localStorage, {
    key: 'local-key', val: 'local-value', json: 'local-json', out: 'local-output',
    set: 'local-set', get: 'local-get', remove: 'local-remove', clear: 'local-clear',
    list: 'local-list', export: 'local-export', import: 'local-import', file: 'local-import-file',
    listOut: 'local-list-output', eventsOut: 'local-events-output'
  });
  setupPanel('session-panel', sessionStorage, {
    key: 'sess-key', val: 'sess-value', json: 'sess-json', out: 'sess-output',
    set: 'sess-set', get: 'sess-get', remove: 'sess-remove', clear: 'sess-clear',
    list: 'sess-list', export: 'sess-export', import: 'sess-import', file: 'sess-import-file',
    listOut: 'sess-list-output', eventsOut: 'sess-events-output'
  });
  setupThemePrefs();
  setupQuotaTester();

  // Cheat sheet demo buttons
  document.getElementById('local-demo-basic').addEventListener('click', () => {
    try {
      localStorage.setItem('greeting', 'hello');
      const v = localStorage.getItem('greeting');
      localStorage.removeItem('greeting');
      document.getElementById('local-cheat-output').textContent = [
        'localStorage.setItem("greeting", "hello")',
        `getItem → ${JSON.stringify(v)}`,
        'removeItem("greeting")'
      ].join('\n');
    } catch (err) {
      document.getElementById('local-cheat-output').textContent = 'Error: ' + err;
    }
  });

  document.getElementById('local-demo-json').addEventListener('click', () => {
    try {
      const obj = { theme: 'dark', fontSize: 16 };
      localStorage.setItem('prefs', JSON.stringify(obj));
      const parsed = JSON.parse(localStorage.getItem('prefs') || 'null');
      localStorage.removeItem('prefs');
      document.getElementById('local-cheat-output').textContent = [
        'localStorage.setItem("prefs", JSON.stringify({ theme: "dark", fontSize: 16 }))',
        `getItem + JSON.parse → ${JSON.stringify(parsed)}`,
        'removeItem("prefs")'
      ].join('\n');
    } catch (err) {
      document.getElementById('local-cheat-output').textContent = 'Error: ' + err;
    }
  });

  document.getElementById('show-differences').addEventListener('click', () => {
    const lines = [
      '- Persistence:',
      '  • localStorage persists across reloads & browser restarts until cleared.',
      '  • sessionStorage persists only for the current tab/window and is cleared when it closes.',
      '- Scope:',
      '  • localStorage is shared across tabs of the same origin.',
      '  • sessionStorage is isolated per tab/window (same origin, not shared).',
      '- API & Limits:',
      '  • Same API (setItem/getItem/removeItem/clear); values are strings; typical quota ~5–10MB.',
      '- Events:',
      '  • Both fire storage events in other tabs of the same origin when modified.'
    ];
    document.getElementById('differences-output').textContent = lines.join('\n');
  });

  document.getElementById('sess-demo-basic').addEventListener('click', () => {
    try {
      sessionStorage.setItem('step', '2');
      const v = sessionStorage.getItem('step');
      sessionStorage.removeItem('step');
      document.getElementById('sess-cheat-output').textContent = [
        'sessionStorage.setItem("step", "2")',
        `getItem → ${JSON.stringify(v)}`,
        'removeItem("step")'
      ].join('\n');
    } catch (err) {
      document.getElementById('sess-cheat-output').textContent = 'Error: ' + err;
    }
  });

  document.getElementById('sess-demo-json').addEventListener('click', () => {
    try {
      const obj = { cartCount: 3 };
      sessionStorage.setItem('session:data', JSON.stringify(obj));
      const parsed = JSON.parse(sessionStorage.getItem('session:data') || 'null');
      sessionStorage.removeItem('session:data');
      document.getElementById('sess-cheat-output').textContent = [
        'sessionStorage.setItem("session:data", JSON.stringify({ cartCount: 3 }))',
        `getItem + JSON.parse → ${JSON.stringify(parsed)}`,
        'removeItem("session:data")'
      ].join('\n');
    } catch (err) {
      document.getElementById('sess-cheat-output').textContent = 'Error: ' + err;
    }
  });
});
