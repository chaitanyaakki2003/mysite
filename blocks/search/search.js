export default function decorate(block) {
  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Search...';

  block.append(input);
}