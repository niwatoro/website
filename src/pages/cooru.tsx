import Link from "next/link";

const Cooru = () => {
  return (
    <div>
      <div>
        <div>
          <div>Cooru!</div>
          <div>
            <div>Say goodbye to the hassle of planning and coordinating offline events with friends. Introduce our new and innovative event planning app. With just a tap on the map, you can easily create and join events with your friends.</div>
            <ul>
              <li>Organize gatherings, parties, meetups and more with ease</li>
              <li>Discover events happening in your area</li>
              <li>Navigate to the event location with ease</li>
              <li>Keep track of your friends' whereabouts on the map</li>
              <li>Chat and coordinate with friends in the app</li>
              <li>Create and join groups for specific events</li>
              <li>Stay updated with push notifications for upcoming events</li>
              <li>And much more!</li>
            </ul>
            <div>Our app is the perfect solution for anyone looking to bring their social life to the next level. Download now and experience the convenience of planning offline events with friends</div>
          </div>
          <div>Privacy policy</div>
          <div>
            <Link href={"/aikaigi/privacypolicy"}>Privacy policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooru;
