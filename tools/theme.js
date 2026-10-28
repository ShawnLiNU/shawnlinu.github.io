/* Shared bright/dark theme for shawnlinu.github.io/tools
   Saves the choice in localStorage so every tool page uses it
   until the button is clicked again. */
(function () {
  var KEY = 'tools-theme';
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; }
    catch (e) { return 'dark'; }
  }

  function apply(t) {
    root.setAttribute('data-theme', t);
    root.style.colorScheme = t;
    var b = document.getElementById('themeToggleBtn');
    if (b) {
      b.textContent = t === 'light' ? '\u263E' : '\u2600';
      b.title = t === 'light' ? 'Switch to dark theme' : 'Switch to bright theme';
    }
    window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }

  function toggle() {
    var t = read() === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(KEY, t); } catch (e) {}
    apply(t);
  }

  window.ToolsTheme = { get: read, toggle: toggle };

  /* set before first paint to avoid a flash */
  root.setAttribute('data-theme', read());
  root.style.colorScheme = read();

  /* re-check when returning with the Back button */
  window.addEventListener('pageshow', function () { apply(read()); });

  /* keep other open tabs in sync */
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(read()); });

  function addButton() {
    var css = document.createElement('style');
    css.textContent =
      '#themeToggleBtn{position:fixed;right:16px;bottom:16px;z-index:99999;width:38px;height:38px;' +
      'border-radius:50%;border:1px solid rgba(128,128,128,.35);cursor:pointer;font-size:17px;line-height:1;' +
      'display:flex;align-items:center;justify-content:center;opacity:.75;transition:opacity .2s,transform .2s;' +
      'background:#1c1f24;color:#f5d36b;box-shadow:0 2px 8px rgba(0,0,0,.25)}' +
      '#themeToggleBtn:hover{opacity:1;transform:scale(1.08)}' +
      'html[data-theme="light"] #themeToggleBtn{background:#ffffff;color:#3a4a5a}' +
      '@media print{#themeToggleBtn{display:none}}';
    document.head.appendChild(css);
    var b = document.createElement('button');
    b.id = 'themeToggleBtn';
    b.type = 'button';
    b.setAttribute('aria-label', 'Toggle bright or dark theme');
    b.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    b.addEventListener('touchend', function (e) { e.stopPropagation(); });
    document.body.appendChild(b);
    apply(read());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton);
  else addButton();
})();
