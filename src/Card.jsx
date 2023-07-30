import React from "react";

export const Card = ({ itm,onClick,indx,ind ,dis}) => {
  return (<>
    <button disabled={ind.includes(indx)||dis} className="ecard" onClick={()=>onClick(itm.id,indx)}>
    {(itm?.stat==='active' && ind.includes(indx))?itm.name:""}
    </button>
  </>);
};
