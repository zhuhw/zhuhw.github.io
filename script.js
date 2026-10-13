(() => {
  const blueprint = document.querySelector('.lab-blueprint');
  const items = [...document.querySelectorAll('.lab-item')];
  const nodes = [...document.querySelectorAll('[data-lab]')];

  if (!blueprint || !items.length) return;

  function updateSelection() {
    const selected = items.find((item) => item.open)?.dataset.component || '';
    blueprint.dataset.active = selected;
    for (const node of nodes) {
      node.setAttribute('aria-expanded', String(node.dataset.lab === selected));
    }
  }

  for (const item of items) {
    item.addEventListener('toggle', () => {
      // Keep the accordion exclusive in browsers without details[name] support.
      if (item.open) {
        for (const other of items) {
          if (other !== item) other.open = false;
        }
      }
      updateSelection();
    });
  }

  for (const node of nodes) {
    node.disabled = false;
    node.addEventListener('click', () => {
      const item = document.getElementById(node.getAttribute('aria-controls'));
      if (!item) return;
      item.open = true;
      updateSelection();
      // Move focus to the revealed content so keyboard and screen-reader users
      // get the same tour as pointer users, including on a narrow screen.
      item.querySelector('summary').focus({ preventScroll: true });
      const bounds = item.getBoundingClientRect();
      if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  document.querySelector('.map-hint').hidden = false;
  updateSelection();
})();
