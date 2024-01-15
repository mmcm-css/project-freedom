import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import Welcome from './components/welcome-content/welcome'
import FeedContent from './components/feed/feed-content'
import FloatingButton from './components/floating-button/floating-button'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Welcome />
        <FeedContent />
        <FloatingButton />
      </main>
    </>
  )
}
