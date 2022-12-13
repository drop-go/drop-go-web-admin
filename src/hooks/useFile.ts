import { useState } from 'react'

export const useFile = () => {
  const [file, setFormatFile] = useState<File>()
  const [strFile, setStrFile] = useState<string>('')
  const [fileName, setFileName] = useState<string>()
  const [fileType, setFileType] = useState<string>()
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
    // 5MB
    if (files[0].size > 1024 * 1024 * 5) {
      setError('ファイルサイズが大きすぎます。（最大5MB）')
      return
    }
    setFormatFile(files[0])
    setFileType(files[0].name.split('.').pop())
    setFileName(files[0].name.split('.').shift())
    fileReader.readAsDataURL(files[0])
  }

  return { strFile, fileName, fileType, error, setFile }
}
