
import Hero from '../components/Hero'
import ViewAllProduks from '../components/ViewAllProduks'
import AboutPage from './AbautPage'
import Produks from '../components/Produks'


const HomePage = () => {
  return (
    <>
      <Hero />
      <Produks isHome={true}/>
      <ViewAllProduks />
      <AboutPage />
    </>
  )
}

export default HomePage