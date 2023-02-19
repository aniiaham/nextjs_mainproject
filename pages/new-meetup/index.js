import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/da/Allianz_arena_golden_hour_Richard_Bartz.jpg"
      title="A First Meetup"
      address="Somewhere 5, 12345 Some City"
      description="The meetup description"
    />
  );
}

export default MeetupDetails;
