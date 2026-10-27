// Barrierefreie Tabs: Pfeiltasten, Home/End, Umlauf. Gibt eine select-Funktion zurück.
export function tabs(list: HTMLElement, onSelect?: (tab: HTMLElement) => void) {
  const items = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
  const select = (tab: HTMLElement, focus = false) => {
    items.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
    onSelect?.(tab);
  };
  items.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const vertical = list.getAttribute('aria-orientation') === 'vertical';
      const prev = vertical ? 'ArrowUp' : 'ArrowLeft';
      const next = vertical ? 'ArrowDown' : 'ArrowRight';
      let j = -1;
      if (e.key === prev) j = (i - 1 + items.length) % items.length;
      else if (e.key === next) j = (i + 1) % items.length;
      else if (e.key === 'Home') j = 0;
      else if (e.key === 'End') j = items.length - 1;
      if (j >= 0) { e.preventDefault(); select(items[j], true); }
    });
  });
  return select;
}
