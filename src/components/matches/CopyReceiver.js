import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { encryptString } from '../../common/utils'

export const CopyReceiver = ({ giver, receiver }) => {
  const [copyText, setCopyText] = useState('Copy link')

  const showCopied = () => {
    setCopyText('Copied')
    setTimeout(() => {
      setCopyText('Copy link')
    }, 1000)
  }

  return (
    <CopyToClipboard
      text={`${window.location.origin.toString()}/secret-santa/?giver=${giver}&key=${encryptString(
        receiver
      )}`}
    >
      <a href="#" onClick={showCopied}>
        {copyText}
      </a>
    </CopyToClipboard>
  )
}
