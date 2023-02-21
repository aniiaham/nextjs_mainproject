//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const data = await response.json();
    console.log(data);
    
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
