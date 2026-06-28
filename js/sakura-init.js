/* 樱花飘落初始化 - 营柔蒝紫粉色调 */
(function () {
  function initSakura() {
    if (typeof Sakura === 'undefined') {
      setTimeout(initSakura, 200);
      return;
    }
    try {
      new Sakura('body', {
        className: 'sakura',
        fallSpeed: 1,
        maxSize: 14,
        minSize: 10,
        delay: 300,
        colors: [
          { gradientColorStart: 'rgba(255, 183, 197, 0.85)', gradientColorEnd: 'rgba(255, 197, 208, 0.85)', gradientColorDegree: 120 },
          { gradientColorStart: 'rgba(255, 126, 185, 0.85)', gradientColorEnd: 'rgba(255, 209, 220, 0.85)', gradientColorDegree: 120 },
          { gradientColorStart: 'rgba(179, 157, 219, 0.75)', gradientColorEnd: 'rgba(209, 196, 233, 0.75)', gradientColorDegree: 120 }
        ]
      });
    } catch (e) {
      console.warn('Sakura init failed:', e);
    }
  }
  if (document.readyState === 'complete') {
    initSakura();
  } else {
    window.addEventListener('load', initSakura);
  }
})();
