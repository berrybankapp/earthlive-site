import { useState, useEffect } from 'react'
import Head from 'next/head'
import Microlink from '@microlink/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 200
      setScrolled(window.scrollY > heroHeight - 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const urls = [
    "https://www.viasat.com/news/latest-news/corporate/2025/enrique-gomez-jackson-wins-education-grant-for--earthlive---a-sm/",
    "https://www.webwire.com/ViewPressRel.asp?aId=342612",
    "https://timesofsandiego.com/education/2025/08/16/stem-student-wins-viasat-grant-for-disaster-response-device/",
    "https://philanthropynewsdigest.org/news/other-sources/article/?id=16364886&title=STEM-student-wins-Viasat-grant-for-disaster-response-device",
    "https://comunidadinformativa.com.mx/tecnologia/5714/joven-mexicano-desarrolla-pulsera-satelital-que-puede-salvar-vidas-y-promover-la-sustentabilidad/",
    "https://www.msn.com/en-us/news/technology/stem-student-wins-viasat-grant-for-disaster-response-device/ar-AA1KE4OY",
    "https://www.linkedin.com/feed/update/activity:7362863359114760193",
    "https://www.facebook.com/share/p/1ECDFFkAP3/?mibextid=wwXIfr",
    "https://www.facebook.com/share/p/1GbyLHSEbE/"
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  }

  return (
    <div>
      <Head><title>Earthlive - Locate. Identify. Save Lives.</title></Head>

      <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="logo">Earthlive</div>
      </nav>

      <header className="hero">
        <h1>Locate. Identify. Save Lives.</h1>
        <p>Earthlive is a disaster-response bracelet that connects victims with emergency responders — even when all networks fail.</p>
        <div className="cta-container">
          <a 
            id="cta-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe56sOJqEZ1Rsglvq-2d92EmjPbdfxenOXitxruiGu0ojKzIA/viewform?usp=header" 
            target="_blank" 
            className={`btn primary ${scrolled ? 'to-nav' : ''}`}
          >
            Pre-Order
          </a>
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

      <section className="use-cases teal-bg">
        <h2>Use Cases</h2>
        <div className="use-grid">
          <div className="use-card"><img src="/assets/usecase-disaster.jpg"/><p>Natural Disasters</p></div>
          <div className="use-card"><img src="/assets/usecase-tourism.jpg"/><p>Tourism & Adventure Travel</p></div>
          <div className="use-card"><img src="/assets/usecase-schools.jpg"/><p>Schools & Summer Camps</p></div>
          <div className="use-card"><img src="/assets/usecase-aid.jpg"/><p>Humanitarian Aid</p></div>
          <div className="use-card"><img src="/assets/usecase-events.jpg"/><p>Events & Future Uses</p></div>
        </div>
      </section>

      <section className="impact gray-bg">
        <h2>Impact of Wearing Earthlive</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>⏱ Faster Response</h3>
            <p>Cut rescue time from hours to minutes.</p>
          </div>
          <div className="impact-card">
            <h3>🌍 Wider Reach</h3>
            <p>Connects even in areas with zero cell coverage.</p>
          </div>
          <div className="impact-card">
            <h3>💸 Affordable</h3>
            <p>Low-cost device accessible to vulnerable groups.</p>
          </div>
          <div className="impact-card">
            <h3>💚 Sustainable</h3>
            <p>Made with recycled and eco-friendly materials.</p>
          </div>
        </div>
      </section>

      <section className="comparison white-bg">
        <h2>Why Earthlive vs. Others</h2>
        <table>
          <thead>
            <tr><th>Feature</th><th>Smartwatches / GPS Devices</th><th>Earthlive Bracelet</th></tr>
          </thead>
          <tbody>
            <tr><td>Connectivity</td><td>Cellular/Wi-Fi (fails in disasters)</td><td className="highlight">Direct-to-Satellite</td></tr>
            <tr><td>Cost</td><td>$350 unit + $8.99/month</td><td className="highlight">$25 unit + $2.99/month</td></tr>
            <tr><td>Purpose</td><td>Tourism, fitness</td><td className="highlight">Disaster survival & equity</td></tr>
            <tr><td>Waterproof</td><td>Limited</td><td className="highlight">✅ Yes</td></tr>
            <tr><td>Data Security</td><td>Mixed</td><td className="highlight">End-to-end encrypted</td></tr>
          </tbody>
        </table>
      </section>

      <section className="news teal-bg">
        <h2>News & Media</h2>
        <Carousel 
          responsive={responsive} 
          autoPlay={true} 
          autoPlaySpeed={5000} 
          infinite={true}
          showDots={true}
          arrows={true}
          customLeftArrow={<button className="arrow left">‹</button>}
          customRightArrow={<button className="arrow right">›</button>}
        >
          {urls.map((url, idx) => (
            <div key={idx} className="news-card">
              <Microlink url={url} media="image" size="normal" style={{ maxWidth: '320px', margin: '0 auto' }} />
            </div>
          ))}
        </Carousel>
      </section>

      <footer className="footer">
        <a href="mailto:egomezjackson@gmail.com" className="btn secondary">Contact Us</a>
        <p>© Earthlive 2025</p>
      </footer>
    </div>
  )
}
