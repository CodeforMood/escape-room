import { MyQuest } from '../../types/my-quest';
import { Quest } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type QuestListProps = {
  questsData?: Quest[];
  myQuestsData?: MyQuest[];
}

export default function QuestList({questsData, myQuestsData}: QuestListProps): JSX.Element {
  if (questsData) {
    return (
      <div className="cards-grid">
        {questsData.map((questData) => <QuestCard questData={questData} key={questData.id} />)}
      </div>
    );
  }

  if (myQuestsData) {
    return (
      <div className="cards-grid">
        {myQuestsData.map((myQuestData) => <QuestCard myQuestData={myQuestData} key={myQuestData.id} />)}
      </div>
    );
  }
  return (<></>);
}
