export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.style.visibility = 'hidden'
    tempTextArea.value = text
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
  }
}
