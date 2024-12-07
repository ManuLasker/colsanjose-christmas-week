import { CSSProperties } from 'react'

const styles: { [key: string]: CSSProperties } = {
  gift: {
    animation: 'bounce 2s infinite',
  },
  ribbon: {
    animation: 'pulse 1.5s infinite',
  },
}

export default function Gifts() {
  return (
    <svg className="gifts" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Large gift */}
      <g style={styles.gift}>
        <rect x="10" y="60" width="40" height="40" fill="#ff0000" />
        <rect x="10" y="60" width="40" height="10" fill="#cc0000" />
        <rect x="25" y="60" width="10" height="40" fill="#cc0000" style={styles.ribbon} />
      </g>

      {/* Medium gift */}
      <g style={styles.gift}>
        <rect x="55" y="70" width="30" height="30" fill="#00ff00" />
        <rect x="55" y="70" width="30" height="7" fill="#00cc00" />
        <rect x="67" y="70" width="7" height="30" fill="#00cc00" style={styles.ribbon} />
      </g>

      {/* Small gift */}
      <g style={styles.gift}>
        <rect x="40" y="80" width="20" height="20" fill="#0000ff" />
        <rect x="40" y="80" width="20" height="5" fill="#0000cc" />
        <rect x="48" y="80" width="5" height="20" fill="#0000cc" style={styles.ribbon} />
      </g>
    </svg>
  )
}

