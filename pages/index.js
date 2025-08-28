import Head from 'next/head'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Home() {
  const newsItems = [
    { title: "Viasat Education Grant", url: "https://www.viasat.com/news/latest-news/corporate/2025/enrique-gomez-jackson-wins-education-grant-for--earthlive---a-sm/", img: "/assets/viasat.png" },
    { title: "Webwire Coverage", url: "https://www.webwire.com/ViewPressRel.asp?aId=342612", img: "/assets/webwire.png" },
    { title: "Times of San Diego", url: "https://timesofsandiego.com/education/2025/08/16/stem-student-wins-viasat-grant-for-disaster-response-device/", img: "/assets/times.png" }
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  }

  return (
    <div>
      <Head><title>Earthlive - Locate. Identify. Save Lives.</title></Head>

      <header className="hero">
        <h1>Locate. Identify. Save Lives.</h1>
        <p>Earthlive is a disaster-response bracelet that connects victims with emergency responders — even when all networks fail.</p>
        <div className="cta-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe56sOJqEZ1Rsglvq-2d92EmjPbdfxenOXitxruiGu0ojKzIA/viewform?usp=header" target="_blank" className="btn primary">Pre-Order</a>
          <a href="#solution" className="btn secondary">Learn More</a>
        </div>
      </header>

      <section className="problem white-bg">
        <h2>The Problem</h2>
        <p>Every year, millions go missing in natural disasters. Phones, apps, and radios often fail when power lines are down and infrastructure is destroyed. Rescue teams lose valuable time — and people lose their lives.</p>
        <img src="/assets/disaster.jpg" alt="Disaster scene" />
      </section>

      <section className="solution gray-bg" id="solution">
        <h2>The Solution — Earthlive Bracelet</h2>
        <div className="solution-content">
          <img src="/assets/bracelet.png" alt="Bracelet mockup" />
          <ul>
            <li>🌐 Direct-to-Satellite Connectivity</li>
            <li>📍 Real-Time Location Sharing</li>
            <li>🔐 Encrypted Personal ID Data</li>
            <li>💧 Waterproof, Recycled Materials</li>
            <li>🔋 Rechargeable, Long-Lasting Battery</li>
            <li>🌞 Future-ready: Solar & Kinetic Charging</li>
          </ul>
        </div>
      </section>

      <section className="use-cases white-bg">
        <h2>Use Cases</h2>
        <div className="use-grid">
          <div className="use-card"><img src="/assets/usecase-disaster.jpg"/><p>Natural Disasters</p></div>
          <div className="use-card"><img src="/assets/usecase-tourism.jpg"/><p>Tourism & Adventure Travel</p></div>
          <div className="use-card"><img src="/assets/usecase-schools.jpg"/><p>Schools & Summer Camps</p></div>
          <div className="use-card"><img src="/assets/usecase-aid.jpg"/><p>Humanitarian Aid</p></div>
          <div className="use-card"><img src="/assets/usecase-events.jpg"/><p>Events & Future Uses</p></div>
        </div>
      </section>

      <section className="comparison gray-bg">
        <h2>Why Earthlive vs. Others</h2>
        <table>
          <tbody>
            <tr><td>Connectivity</td><td>Cellular/Wi-Fi (fails in disasters)</td><td className="highlight">Direct-to-Satellite</td></tr>
            <tr><td>Cost</td><td>$350 unit + $8.99/month</td><td className="highlight">$25 unit + $2.99/month</td></tr>
          </tbody>
        </table>
      </section>

      <section className="news teal-bg">
        <h2>News & Media</h2>
        <Carousel responsive={responsive}>
          {newsItems.map((item, i) => (
            <div key={i} className="news-card">
              <a href={item.url} target="_blank">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </a>
            </div>
          ))}
        </Carousel>
      </section>

      <footer><p>info@earthlive.space</p><p>© Earthlive 2025</p></footer>
    </div>
  )
}
