import Intro from "@/CustomComponents/Intro"
import LeftPanel from "@/CustomComponents/LeftPanel"
import RightPanel from "@/CustomComponents/RightPanel";
import { useState } from "react";

function Home() {
  const [activeCard, SetActiveCard] = useState<string>("1");
  return (
    <div className="w-full h-full flex-col">
      <Intro />
      <div className=" w-full h-full gap-2 pt-3 flex pl-4 pb-4 ">

        <LeftPanel activeCard={activeCard} setActiveCard={SetActiveCard} />

        <RightPanel blogId={activeCard} />
      </div>
    </div>
  )
}

export default Home