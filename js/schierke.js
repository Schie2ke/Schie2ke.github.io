/* Alice 企鹅看板娘 - 静态浮动（无台词） */
(function () {
  function init() {
    if (document.getElementById('schierke-companion')) return;

    const companion = document.createElement('div');
    companion.id = 'schierke-companion';
    companion.innerHTML = `
      <img class="schierke-img" src="/img/Alice_penguin.png" alt="Alice Penguin"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      <span class="schierke-emoji-fallback" style="display:none">🐧</span>
    `;
    document.body.appendChild(companion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
