"use client";
import { useState } from "react";
import navJson from "./navData.json"; //imported the json file.
import { ArrowLeft, X, Home, ChevronRight } from "lucide-react";//icons
import { useRouter } from "next/navigation"; // navigation

//create the arry for store the, track of navigation.
//zero postion is the, main all default json items.
const trackArray = [navJson];

const NavBar1 = () => {
  //strore the actual Array data.
  const [data, setData] = useState(navJson);

  //using Router Update the Address Bar, Navigation..
  const router = useRouter();

  //when the user click on back button
  const handleBackButton = () => {
    //check if track is not empty, if it is empty then set the main default json.
    if (trackArray.length != 0) {
      //set the last newly added array
      setData(trackArray[trackArray.length - 1]);
      //remove the newly added array
      trackArray.pop();
    } else {
      setData(navJson);
    }
  };

  const handleItemClick = (itemObject: any) => {
    if (Array.isArray(itemObject.link)) {
      //it is sub menu
      trackArray.push(data);
      setData(itemObject.link);
    } else {
      //it is a link, Router push update address bar (Navigate)
      router.push(itemObject.link);
    }
  };

  return (
    <div id="navHolder">
      <div className="BackHolder">
        {data == navJson ? (
          <Home style={{ visibility: "hidden" }} size={25} />
        ) : (
          <ArrowLeft
            className="icon-hover"
            color="black"
            size={30}
            strokeWidth={1}
            onClick={handleBackButton}
          />
        )}
        <X className="icon-hover" color="black" size={30} strokeWidth={1} />
      </div>
      <ul>
        {data.map((itemObject, index) => {
          return (
            <li
              key={index}
              className="item"
              onClick={() => handleItemClick(itemObject)}
            >
              <a>{itemObject.name}</a>
              {Array.isArray(itemObject.link) ? (
                <ChevronRight strokeWidth={1} size={20} />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar1;
