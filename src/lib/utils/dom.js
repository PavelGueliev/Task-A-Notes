export function stripHtml(html) {
  if (!html || typeof html !== 'string') {
    return html || '';
  }

  const div = document.createElement('div');
  div.innerHTML = html;

  return div.textContent || '';
}
