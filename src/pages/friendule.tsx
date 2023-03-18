import Link from "next/link";
const Friendule = () => {
  return (
    <div>
      <div>
        <div>
          <div>Friendule</div>
          <div>
            <div>Introducing the ultimate scheduling tool - the Friendule app!</div>

            <div>With Friendule, sharing your schedule with friends has never been easier. The app is designed with a simple and intuitive user interface that allows you to effortlessly swipe through your weekly or monthly schedule, quickly adding and editing events as you go.</div>

            <div>But that's not all - Friendule also lets you see and compare schedules with your friends without ever having to ask them. Simply search for their profile using their ID and voila! Their schedule is right there in front of you, color-coded for easy identification.</div>

            <div>With Friendule, you'll never miss an important event again. Download the app today and start sharing your schedule with ease!</div>
          </div>
          <div>Privacy policy</div>
          <div>
            <Link href={"/friendule/privacypolicy"}>Privacy policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friendule;
