import React from "react"

export default ({ slice }) => (
  <div className="embed container">
    <div dangerouslySetInnerHTML={{ __html: slice.primary.embed_link.html }} />
  </div>
)
