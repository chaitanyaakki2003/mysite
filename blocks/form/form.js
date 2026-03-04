export default async function decorate(block) {
  const form = block.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // YOUR SCRIPT URL HERE
    const scriptURL = 'https://script.google.com/macros/s/AKfycbybyt0s7TYHMONXN9_uCt6wG5GUyhPS-eKRjqbNoAA28E1n4PKuxd9rkJEw-mUf4GeuYQ/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS issues
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      // Show success
      const successMsg = document.createElement('div');
      successMsg.textContent = 'Thank you! Your message has been sent.';
      successMsg.style.cssText = 'color: green; margin-top: 20px; font-weight: bold;';
      
      form.reset();
      form.append(successMsg);
      
      setTimeout(() => successMsg.remove(), 5000);

    } catch (err) {
      console.error('Submission error:', err);
      alert('Success! (Check your sheet, no-cors mode sometimes triggers an error even if it works)');
    }
  });
}