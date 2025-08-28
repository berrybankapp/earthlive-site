import Microlink from '@microlink/react'
import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Earthlive - Locate. Identify. Save Lives.</title>
      </Head>

      {/* Hero Section */}
      <header className="hero">
        <h1>Locate. Identify. Save Lives.</h1>
        <p>Earthlive is a disaster-response bracelet that connects victims with emergency responders — even when all networks fail.</p>
        <div className="cta-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe56sOJqEZ1Rsglvq-2d92EmjPbdfxenOXitxruiGu0ojKzIA/viewform?usp=header" target="_blank" className="btn primary">Sign Up for Early Access</a>
          <a href="#solution" className="btn secondary">Learn More</a>
        </div>
      </header>

      {/* Problem Section */}
      <section className="problem white-bg">
        <h2>The Problem</h2>
        <p>Every year, millions go missing in natural disasters. Phones, apps, and radios often fail when power lines are down and infrastructure is destroyed. Rescue teams lose valuable time — and people lose their lives.</p>
        <img src="/assets/disaster.jpg" alt="Disaster scene" />
      </section>

      {/* Solution Section */}
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

      {/* How It Works */}
      <section className="how-it-works white-bg">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step"><h3>1. Wear It</h3><p>Victims wear the bracelet as a simple band.</p></div>
          <div className="step"><h3>2. Activate</h3><p>The bracelet transmits encrypted GPS + ID data directly to satellites.</p></div>
          <div className="step"><h3>3. Rescue</h3><p>Responders access secure data in under 30 seconds.</p></div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases gray-bg">
        <h2>Use Cases</h2>
        <ul className="emoji-list">
          <li>🌋 Natural Disasters</li>
          <li>🏕 Tourism & Adventure Travel</li>
          <li>🏫 Schools & Summer Camps</li>
          <li>🕊 Humanitarian Aid</li>
          <li>🎶 Events & Future Uses</li>
        </ul>
      </section>

      {/* Impact */}
      <section className="impact teal-bg">
        <h2>The Impact of Wearing Earthlive</h2>
        <div className="impact-grid">
          <div className="impact-card">⏱ <strong>30–50%</strong><br/> Increase in survival rates during time-sensitive rescues.</div>
          <div className="impact-card">🧾 <strong>Up to 80%</strong><br/> Reduction in unidentified victims.</div>
          <div className="impact-card">🌍 <strong>Equitable & Scalable</strong><br/> Unit cost under $25 makes it accessible globally.</div>
          <div className="impact-card">🔄 <strong>Sustainable Design</strong><br/> Recycled materials, future solar/kinetic charging.</div>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison white-bg">
        <h2>Why Earthlive vs. Others</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Smartwatches / GPS Devices</th>
              <th>Earthlive Bracelet</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Connectivity</td><td>Cellular/Wi-Fi (fails in disasters)</td><td className="highlight">Direct-to-Satellite</td></tr>
            <tr><td>Cost</td><td>$350+</td><td className="highlight">$25 unit + $2.99/month</td></tr>
            <tr><td>Purpose</td><td>Tourism, fitness</td><td className="highlight">Disaster survival & equity</td></tr>
            <tr><td>Waterproof</td><td>Limited</td><td className="highlight">✅ Yes</td></tr>
            <tr><td>Data Security</td><td>Mixed</td><td className="highlight">End-to-end encrypted</td></tr>
          </tbody>
        </table>
      </section>

      {/* CTA */}
      <section className="cta teal-bg" id="signup">
        <h2>Join the Movement</h2>
        <p>Sign up today to be among the first to access Earthlive and help bring this life-saving technology to the world.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe56sOJqEZ1Rsglvq-2d92EmjPbdfxenOXitxruiGu0ojKzIA/viewform?usp=header" target="_blank" className="btn primary">Sign Me Up</a>
      </section>

      {/* About Us */}
      <section className="about white-bg">
        <h2>About Us</h2>
        <p>Earthlive is built on the belief that no life should be lost because of poor connectivity. Our mission is to make disaster-response technology affordable, scalable, and sustainable for communities worldwide.</p>
      </section>

      {/* News Section with Microlink */}
      <section className="news gray-bg">
        <h2>News & Media</h2>
        <div className="grid">
          <Microlink url="https://www.viasat.com/news/latest-news/corporate/2025/enrique-gomez-jackson-wins-education-grant-for--earthlive---a-sm/" />
          <Microlink url="https://www.webwire.com/ViewPressRel.asp?aId=342612" />
          <Microlink url="https://timesofsandiego.com/education/2025/08/16/stem-student-wins-viasat-grant-for-disaster-response-device/" />
          <Microlink url="https://philanthropynewsdigest.org/news/other-sources/article/?id=16364886&title=STEM-student-wins-Viasat-grant-for-disaster-response-device" />
          <Microlink url="https://comunidadinformativa.com.mx/tecnologia/5714/joven-mexicano-desarrolla-pulsera-satelital-que-puede-salvar-vidas-y-promover-la-sustentabilidad/" />
          <Microlink url="https://www.msn.com/en-us/news/technology/stem-student-wins-viasat-grant-for-disaster-response-device/ar-AA1KE4OY" />
          <Microlink url="https://www.linkedin.com/feed/update/activity:7362863359114760193" />
          <Microlink url="https://www.facebook.com/share/p/1ECDFFkAP3/?mibextid=wwXIfr" />
          <Microlink url="https://www.facebook.com/share/p/1GbyLHSEbE/" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Home | About | Contact | Pre-Order</p>
        <p>info@earthlive.space</p>
        <p>© Earthlive 2025</p>
      </footer>
    </div>
  )
}
