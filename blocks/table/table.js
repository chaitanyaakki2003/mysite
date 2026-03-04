export default function decorate(block) {
  const rows = [...block.children];
  const table = document.createElement('table');

  if (block.classList.contains('striped')) {
    table.classList.add('striped');
  }

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  rows.forEach((row, i) => {
    const tr = document.createElement('tr');
    [...row.children].forEach((cell) => {
      const cellTag = i === 0 ? 'th' : 'td';
      const newCell = document.createElement(cellTag);
      newCell.innerHTML = cell.innerHTML;
      tr.appendChild(newCell);
    });

    if (i === 0) {
      thead.appendChild(tr);
    } else {
      tbody.appendChild(tr);
    }
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  block.innerHTML = '';
  block.appendChild(table);
}