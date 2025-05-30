import { useEffect } from 'react'
import { modalTypes, useModalHandler } from './ModalContext'

function FaqOnLoad() {
  const { openModal } = useModalHandler()

  // Open faq modal at start
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal(modalTypes.faq)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default FaqOnLoad
