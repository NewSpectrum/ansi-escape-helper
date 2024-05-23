document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.ansi-table td');
  const infoBox = document.getElementById('info-box');
  
  cells.forEach(cell => {
    cell.addEventListener('click', event => {
      const colorCode = cell.innerText.trim();
      const colorHex = cell.getAttribute('title');
      
      infoBox.innerHTML = `
        <div>
          <strong>Color Code:</strong> ${colorCode}
        </div>
        <div>
          <strong>Hex:</strong> ${colorHex}
        </div>
        <div>
          <button onclick="copyToClipboard('${colorCode}', 'UNIX')">Copy UNIX</button>
          <button onclick="copyToClipboard('${colorCode}', 'Windows')">Copy Windows</button>
        </div>
      `;
      
      const rect = cell.getBoundingClientRect();
      infoBox.style.top = `${rect.bottom + window.scrollY}px`;
      infoBox.style.left = `${rect.left + window.scrollX}px`;
      infoBox.classList.remove('hidden');
    });
  });
  
  document.addEventListener('click', event => {
    if (!infoBox.contains(event.target) && !Array.from(cells).some(cell => cell.contains(event.target))) {
      infoBox.classList.add('hidden');
    }
  });
});

function copyToClipboard(colorCode, format) {
  let textToCopy = '';
  if (format === 'UNIX') {
    textToCopy = `\\e[38;5;${colorCode}m`;
  } else if (format === 'Windows') {
    textToCopy = `\`e[38;5;${colorCode}m`;
  }
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Copied to clipboard');
  });
}
