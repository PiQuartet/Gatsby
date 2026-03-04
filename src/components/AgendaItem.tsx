import React from "react"

type AgendaItemProps = {
  date: string
  title: string
  venue?: string
  city?: string
  time?: string
  ticketsUrl?: string
  program?: string
  imageSrc?: string
  imageAlt?: string
}

export default function AgendaItem({
  date,
  title,
  venue,
  city,
  time,
  ticketsUrl,
  program,
  imageSrc,
  imageAlt,
}: AgendaItemProps) {
  return (
    <section
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 16,
        padding: 18,
        margin: "18px 0",
        background: "rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            style={{
              width: 220,
              maxWidth: "100%",
              borderRadius: 12,
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />
        ) : null}

        <div style={{ flex: "1 1 260px", minWidth: 260 }}>
          <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 6 }}>
            <strong>{date}</strong>
            {time ? <span> · {time}</span> : null}
          </div>

          <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>

          {(venue || city) ? (
            <div style={{ opacity: 0.9, marginBottom: 10 }}>
              {venue ? <span>{venue}</span> : null}
              {venue && city ? <span>, </span> : null}
              {city ? <span>{city}</span> : null}
            </div>
          ) : null}

          {program ? <p style={{ margin: "0 0 12px 0" }}>{program}</p> : null}

          {ticketsUrl ? (
            <a
              href={ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Tickets / Info
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}