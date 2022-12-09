import { useState } from 'react'

export const useFile = () => {
  const [file, setFormatFile] = useState<File>()
  const [strFile, setStrFile] = useState<string>('')
  const [fileName, setFileName] = useState<string>()
  const [fileType, setFileType] = useState<string>()
  const setFile = (files: FileList | null) => {
    const fileReader = new FileReader()
    fileReader.onload = function () {
      const result = this.result
      if (typeof result !== 'string') return console.log('error size')
      setStrFile(result)
    }
    if (files === null) return
    if (files[0].size > 1024 * 1024 * 5) return // 5MB
    setFormatFile(files[0])
    setFileType(files[0].name.split('.').pop())
    setFileName(files[0].name.split('.').shift())
    fileReader.readAsDataURL(files[0])
  }

  return { strFile, fileName, fileType, setFile }
}
