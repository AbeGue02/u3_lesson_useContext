import { useContext } from "react";
import DataContext from "../dataContext";

export default function ComponentD() {

  const { userInfo, setUserInfo } = useContext(DataContext);

  return (
    <div className="card">
      <h2>This is Component D</h2>
      
      <ul>
        <li>Child of ComponentB</li>
        <li>Grandchild of App</li>
        <li>Cousin of ComponentC</li>
        <li>Nephew/Neice of ComponentA</li>
      </ul>

      
        <p>{userInfo.name}'s favorite food is </p>
        <p style={{ color: userInfo.favColor }}> {userInfo.favFood} </p>
   
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "brown",
            favMovie: "SMILE"
          })
        }
      >
        Change to Brown
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Mary Poppins",
            name: "Abe"
          })
        }
      >
        Change Movie and Name
      </button>
    </div>
  )
    }
