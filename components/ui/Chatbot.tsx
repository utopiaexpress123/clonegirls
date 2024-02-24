"use client"
import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '4fc8983d-46a5-494d-9f84-224664ec33e1',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '4fc8983d-46a5-494d-9f84-224664ec33e1',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot