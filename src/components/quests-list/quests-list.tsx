import QuestItem from '../quest-item/quest-item';

export default function QuestsList() {
  return (
    <>
      <h2 className="title visually-hidden">Выберите квест</h2>
      <div className="cards-grid">
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
        <QuestItem />
      </div>
    </>
  );
}
