export const PreviewPage = () => {
  const html = localStorage.getItem('markdown:markedHtml')

  return <div className="w-full h-full"
    {...(html && html.length > 0 ? { dangerouslySetInnerHTML: { __html: html } } : null)}
  />
}