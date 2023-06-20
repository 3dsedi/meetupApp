import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail 
    id= 'm1'
    title= 'first meeting'
    image= 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Crowded_tehran.jpg'
    address= 'fake address, 123, g street, 123456'
    description= 'some fake description blah blah blah'
/>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths:[
      {
        params:{
          meetupId: 'm1'
        }
      },
      {
        params:{
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(contex) {
  const meetupId = contex.params.meetupId
  return {
    props:{
      meetupData:{
        id: meetupId,
        title: 'first meeting',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Crowded_tehran.jpg',
        address: 'fake address, 123, g street, 123456',
        description: 'first meetup ever'
    }
       
    },
    revalidate: 3600
  }
}

export default MeetupDetails;
