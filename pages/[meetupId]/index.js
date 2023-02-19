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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Allianz_arena_golden_hour_Richard_Bartz.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Somewhere 5, 12345 Some City",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
