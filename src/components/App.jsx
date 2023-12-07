import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "./Profile/user.json";
import data from "./Statistics/data.json"

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  
  return (
    <div
      style={{
        // margin: '0 auto',

        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
        // backgroundColor: '#E7ECF2',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" statsData={data} />
      {/* <Statistics statsData={data} /> */}
    </div>
  );
};
