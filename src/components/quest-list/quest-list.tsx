import { Quest } from "../../types/quest"
import QuestCard from "../quest-card/quest-card"

type QuestListProps = {
  questsData: Quest[],
}

export default function QuestList({questsData}: QuestListProps): JSX.Element {
  
  return (
    <div className="cards-grid">
      {questsData.map((questData) => <QuestCard questData={questData} key={questData.id} />)}
    </div>
  );
}
