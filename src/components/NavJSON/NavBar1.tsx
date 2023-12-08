"use client";
import { useState } from "react";
import navJson from "./navData.json"; //imported the json file.

//create the arry for store the, track of navigation.
//zero postion is the, main all default json items.
const trackArray = [navJson];

const NavBar1 = () => {
  //strore the actual Array data.
  const [data, setData] = useState(navJson);

  //when the user click on back button
  const handleBackButton = () => {
    if (trackArray.length != 0) {
      setData(trackArray[trackArray.length - 1]);
      trackArray.pop();
    } else {
      setData(navJson);
    }
  };

  return (
    <>
      <div id="navHolder">
        <button onClick={handleBackButton}>Back</button>
        {data.map((navJson, index) => {
          return (
            <>
              <div key={index}>
                <p
                  className="navJson"
                  onClick={() => {
                    if (Array.isArray(navJson.link)) {
                      //if it is sub menu
                      trackArray.push(data);
                      setData(navJson.link);
                    } else {
                      //if it is link
                      console.log(8);
                    }
                  }}
                >
                  {navJson.name}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NavBar1;
