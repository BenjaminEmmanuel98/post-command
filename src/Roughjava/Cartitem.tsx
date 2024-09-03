import React from "react";

interface Info {
  daddy: any[];
}
const Cartitem: React.FC<Info> = ({daddy}) => {
  return(
    <>
    {daddy .map((items: any) =>(
        <div>
            <div>{items.firstname}</div>
            <div>{items.lastname}</div>
        </div>
    ))}
    </>
  )
};

export default Cartitem;
