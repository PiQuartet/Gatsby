import React, { useEffect } from "react"

type WeeztixEmbedProps = {
  url: string
  guid: string
}

export default function WeeztixEmbed({ url, guid }: WeeztixEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://v1.widget.shop.weeztix.com/injector.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="ot-iframe"
      data-ot-url={url}
      data-ot-guid={guid}
    />
  )
}