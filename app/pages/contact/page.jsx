import React from 'react'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Carte from '../../components/Carte'
import banner from '../../public/kpvoyage.jpg'
import contact from '../../public/contact.jpg'

const page = () => {
  return (
    <div>
      <Banner imageUrl={contact} title="Contact" />
      <Contact />
      <Carte />
    </div>
  )
}

export default page