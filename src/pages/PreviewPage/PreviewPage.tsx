export const PreviewPage = () => {
  const html = localStorage.getItem('markdown:markedHtml')

  return <div className="mt-10 w-full">
    <div
      className="w-1/2 h-64 border p-2 overflow-auto"
      {...(html && html.length > 0 ? { dangerouslySetInnerHTML: { __html: html } } : null)}
    />
  </div >
}