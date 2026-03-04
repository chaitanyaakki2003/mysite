export default function decorate(block) {
  const rows = [...block.children];

  const buttons = document.createElement('div');
  buttons.className = 'tab-buttons';

  const contents = document.createElement('div');
  contents.className = 'tab-contents';

  rows.forEach((row, index) => {
    const cells = [...row.children];
    const titleCell = cells[0];
    const contentCell = cells[1];

    // button
    const btn = document.createElement('button');
    btn.className = 'tab-button';
    btn.type = 'button';
    btn.textContent = titleCell.textContent.trim();
    if (index === 0) btn.classList.add('active');
    buttons.appendChild(btn);

    // content
    const panel = document.createElement('div');
    panel.className = 'tab-content';
    if (index === 0) panel.classList.add('active');
    panel.innerHTML = contentCell ? contentCell.innerHTML : '';
    contents.appendChild(panel);

    btn.addEventListener('click', () => {
      // deactivate all
      buttons.querySelectorAll('.tab-button').forEach((b) => b.classList.remove('active'));
      contents.querySelectorAll('.tab-content').forEach((p) => p.classList.remove('active'));

      // activate clicked
      btn.classList.add('active');
      panel.classList.add('active');
    });
  });

  // replace block HTML
  block.textContent = '';
  block.append(buttons, contents);
}