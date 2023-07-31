import { Outlet } from "react-router-dom";
import users from "../data";
import UserCard from "../components/UserCard";

function Home(){
    const userList = users.map(user => <UserCard key={user.id} {...user}/>)

  return (
      <main>
        <h1>Home!</h1>
        <Outlet />
        {userList}
      </main>
  );
};

export default Home;