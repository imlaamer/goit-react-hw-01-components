
import { Profile } from "./Profile/Profile";



export const App = () => {
  const userStats = {
     followers: 5603,
    views: 4827,
    likes: 1308 
  }
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username="Jacques Gluke"
        tag="jgluke"
        location="Ocho Rios, Jamaica"
        // avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        stats={userStats}
      />
    </div>
  );
};
