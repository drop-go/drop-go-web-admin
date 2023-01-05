import { useState } from 'react'

export const useFile = () => {
  const [file, setFormatFile] = useState<File>()
  const [strFile, setStrFile] = useState<string>('')
  const [fileName, setFileName] = useState<string>()
  const [error, setError] = useState<string>('')
  const setFile = (files: FileList | null) => {
    const fileReader = new FileReader()
    fileReader.onload = function () {
      const result = this.result
      if (typeof result !== 'string') return console.log('error size')
      setStrFile(result)
    }
    if (files === null) {
      setError('ファイルが見つかりません。')
      return
    }
    // NOTE: 5MB
    if (files[0].size > 1024 * 1024 * 5) {
      setError('ファイルサイズが大きすぎます。（最大5MB）')
      return
    }
    setFormatFile(files[0])
    setFileName(files[0].name)
    fileReader.readAsDataURL(files[0])
  }

  return { strFile, fileName, error, setFile }
}
