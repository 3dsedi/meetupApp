import { useRouter } from 'next/router';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'


const NewMeetupPage = () => {
  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to add meetup.');
      }

      const data = await response.json();
      console.log(data);
      // Handle any further actions after successfully adding the meetup to the database
    } catch (error) {
      console.error(error);
      // Handle error state or display an error message to the user
    }
    router.push('/')
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage