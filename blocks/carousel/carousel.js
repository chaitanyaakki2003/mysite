export default function decorate(block) {
  const rows = [...block.children];
  const slides = rows.map((row) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.append(...row.childNodes);
    return slide;
  });

  const track = document.createElement('div');
  track.className = 'carousel-track';
  slides.forEach((s) => track.append(s));

  block.innerHTML = '';
  block.append(track);

  const prev = document.createElement('button');
  prev.className = 'carousel-prev';
  prev.textContent = '‹';

  const next = document.createElement('button');
  next.className = 'carousel-next';
  next.textContent = '›';

  block.append(prev, next);

  let index = 0;
  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  update();
}