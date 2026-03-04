export default function decorate(block) {
  const form = block.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch('https://script.google.com/macros/s/AKfycbzZAbSdl1Y1pcHRq-HNNGcAJVNJl-kfUpHaw_-NWgAoJz3UyhgJhO_xAlnOANWxQBJ2hA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      });

      if (!resp.ok) throw new Error('Request failed');

      alert('Form submitted successfully!');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Submission failed!');
    }
  });
}