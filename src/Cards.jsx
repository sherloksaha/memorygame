import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Cards = ({ go, setGO, win, setWin,setAttempts }) => {
  const [items, setItems] = useState(
    [
      { id: 1, name: "html", stat: "" },
      { id: 1, name: "html", stat: "" },
      { id: 2, name: "css", stat: "" },
      { id: 2, name: "css", stat: "" },
      { id: 3, name: "js", stat: "" },
      { id: 3, name: "js", stat: "" },
      { id: 4, name: "scss", stat: "" },
      { id: 4, name: "scss", stat: "" },
      { id: 5, name: "react", stat: "" },
      { id: 5, name: "react", stat: "" },
      { id: 6, name: "vue", stat: "" },
      { id: 6, name: "vue", stat: "" },
      { id: 7, name: "angular", stat: "" },
      { id: 7, name: "angular", stat: "" },
      { id: 8, name: "nodejs", stat: "" },
      { id: 8, name: "nodejs", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const changeStatus = (id, i) => {
    setDis(true);
    setTimeout(()=>setDis(false),200)
    setInd((e) => [...e, i]);
    setAttmpt((o) => o + 1);
    setAttempts(o=>o-1)
    if (attempt >= 48) {
      setGO(true);
      return
    }
    if (rem) {
      if (id !== rem) {
        setTimeout(() => {
          let itemsCopy = items.map((e) => {
            if (e.id === id || e.id === rem) e.stat = "";
            return e;
          });
          setItems(itemsCopy);
          setrem("");
          let indc = [...ind];
          indc.pop();
          setInd(indc);
          return;
        }, 200);
      }
      if (id == rem) {
        setrem("");
        return;
      }
    }
    setrem(id);
    let itemsCopy = items.map((e) => {
      if (e.id === id) e.stat = "active";
      return e;
    });
    console.log(itemsCopy);
  };
  
  
  
  const [rem, setrem] = useState("");
  const [ind, setInd] = useState([]);
  const [attempt, setAttmpt] = useState(0);
  const[dis,setDis]=useState(false);
  useEffect(() => {
    if (
      items?.every((e) => e.stat === "active") &&
      ind.length === items.length
    ) {
      setWin("win");
    }
  }, [go,ind,attempt]);
  
  return (
    <div className="cards">
      {go ? (
        <h1>Game Over</h1>
      ) : win ? (
        <h1>Winner!!</h1>
      ) : (
        items?.map((e, i) => (
          <Card itm={e} ind={ind} dis={dis} indx={i} onClick={changeStatus} />
        ))
      )}
    </div>
  );
};
