import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Pages.module.css";
import { AppContext } from "./Context";
const Home = () => {
  const navigate = useNavigate();

  const { setNewdata, newdata } = useContext(AppContext);
  const [data, setData] = useState([]);
  const getdata = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {
        setData(Object.keys(res.message));
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  //   let arr=Object.keys(res.message)

  // style={{cursor:"pointer"}}
  return (
    <div>
      <div>
        {data &&
          data.map((el, i) => {
            return (
              <div key={i} className={styles.name}>
                <h3
                  onClick={() => {
                    setNewdata(el);
                    navigate("/puppy");
                  }}
                >
                  {" "}
                  {el}
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
