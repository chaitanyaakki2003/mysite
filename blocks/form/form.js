export default function decorate(block) {
  const form = block.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    await fetch('https://script.google.com/macros/s/AKfycbxZxf6vRc2hZajzOsWirb_g9rwALHrft5seWZ4B913yGbIF1mgFlRGAkZDK46LJ4MUSeg/exec', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    alert('Form submitted successfully!');
    form.reset();
  });
}