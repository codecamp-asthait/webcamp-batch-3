// CSSOM API demos

let dynamicSheet = null;

function listStylesheets() {
  console.log(document.styleSheets);
  const sheets = Array.from(document.styleSheets).map((ss, i) => ({
    index: i,
    href: ss.href || 'inline',
    title: ss.ownerNode?.tagName,
    disabled: ss.disabled,
    rules: ss.cssRules?.length ?? 0,
  }));
  document.getElementById('cssom-stylesheets-output').textContent = JSON.stringify(sheets, null, 2);
}

function listAllRules() {
  const all = [];
  Array.from(document.styleSheets).forEach((ss, si) => {
    try {
      Array.from(ss.cssRules || []).forEach((r, ri) => {
        all.push({ sheetIndex: si, ruleIndex: ri, cssText: r.cssText });
      });
    } catch (err) {
      // CORS-protected stylesheets may throw; skip gracefully
      all.push({ sheetIndex: si, error: String(err) });
    }
  });
  document.getElementById('cssom-rules-output').textContent = JSON.stringify(all, null, 2);
}

function toggleStylesheet() {
  const first = document.styleSheets[0];
  if (!first) return;
  first.disabled = !first.disabled;
  listStylesheets();
}

function insertRule() {
  const selector = document.getElementById('rule-selector').value.trim();
  const decl = document.getElementById('rule-decl').value.trim();
  const sheet = document.styleSheets[0];
  if (!sheet) return;
  const ruleText = `${selector} { ${decl} }`;
  try {
    const idx = sheet.insertRule(ruleText, sheet.cssRules.length);
    document.getElementById('cssom-rules-output').textContent = `Inserted at index ${idx}: ${ruleText}`;
  } catch (err) {
    document.getElementById('cssom-rules-output').textContent = `Insert failed: ${err}`;
  }
}

function deleteLastRule() {
  const sheet = document.styleSheets[0];
  if (!sheet) return;
  const len = sheet.cssRules.length;
  if (len > 0) {
    sheet.deleteRule(len - 1);
    document.getElementById('cssom-rules-output').textContent = `Deleted rule at index ${len - 1}`;
  }
}

function createDynamicStylesheet() {
  if (dynamicSheet) return; // already created
  const style = document.createElement('style');
  style.setAttribute('data-name', 'dynamic');
  document.head.appendChild(style);
  dynamicSheet = style.sheet;
  document.getElementById('cssom-stylesheets-output').textContent = 'Dynamic stylesheet created';
}

function addRuleToDynamic() {
  if (!dynamicSheet) { document.getElementById('cssom-stylesheets-output').textContent = 'Create the dynamic sheet first'; return; }
  try {
    dynamicSheet.insertRule('.dyn-1 { background:#263065; color:#fff; }', dynamicSheet.cssRules.length);
    dynamicSheet.insertRule('.dyn-2 { background:#31c48d; color:#000; }', dynamicSheet.cssRules.length);
    document.getElementById('cssom-stylesheets-output').textContent = 'Added rules to dynamic sheet';
  } catch (err) {
    document.getElementById('cssom-stylesheets-output').textContent = `Insert failed: ${err}`;
  }
}

function viewComputedById() {
  const id = document.getElementById('computed-id').value.trim();
  const el = document.getElementById(id);
  if (!el) { document.getElementById('cssom-computed-output').textContent = 'Element not found'; return; }
  const cs = getComputedStyle(el);
  const props = ['color','fontSize','backgroundColor','padding','margin','border','borderRadius','display'];
  const out = Object.fromEntries(props.map(p => [p, cs.getPropertyValue(p)]));
  document.getElementById('cssom-computed-output').textContent = JSON.stringify(out, null, 2);
}

function setupCssomUI() {
  document.getElementById('list-stylesheets').addEventListener('click', listStylesheets);
  document.getElementById('list-rules').addEventListener('click', listAllRules);
  document.getElementById('toggle-stylesheet').addEventListener('click', toggleStylesheet);
  document.getElementById('insert-rule').addEventListener('click', insertRule);
  document.getElementById('delete-last-rule').addEventListener('click', deleteLastRule);
  document.getElementById('create-dynamic-css').addEventListener('click', createDynamicStylesheet);
  document.getElementById('add-dynamic-rule').addEventListener('click', addRuleToDynamic);
  document.getElementById('view-computed').addEventListener('click', viewComputedById);
}

window.addEventListener('DOMContentLoaded', setupCssomUI);
