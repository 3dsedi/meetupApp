import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
    {
    id: 'm1',
    title: 'first meeting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Crowded_tehran.jpg',
    address: 'fake address, 123, g street, 123456'
},
    {
    id: 'm2',
    title: 'second meeting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Crowded_tehran.jpg',
    address: 'fake address, 153, kkj street, 123456'
},
]
const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups}/>
  )
}


export async function getStaticProps() {
  return {
    props:{
      meetups: DUMMY_DATA
    },
    revalidate: 3600
  }
}

export default HomePage