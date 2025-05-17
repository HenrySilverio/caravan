document.addEventListener('DOMContentLoaded', () => {
  const previewName = document.getElementById('previewName');
  const previewNumber = document.getElementById('previewNumber');
  const previewExpiry = document.getElementById('previewExpiry');

  document.getElementById('ccName').addEventListener('input', e => {
    previewName.textContent = e.target.value || 'Name on card';
  });

  document.getElementById('ccNumber').addEventListener('input', e => {
    let digits = e.target.value.replace(/\D/g, '').match(/.{1,4}/g);
    previewNumber.textContent = digits ? digits.join(' ') : '#### #### #### ####';
  });

  document.getElementById('ccExpiry').addEventListener('input', e => {
    previewExpiry.textContent = e.target.value || 'MM/YY';
  });
});