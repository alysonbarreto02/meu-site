import type { NextPage } from 'next'
import Header from '../components/Header'
import Init from '../components/Init/Init'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Header />
      <Init />
      <Skills/>
    </div>
  )
}

export default Home
