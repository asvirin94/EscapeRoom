import { useMemo } from 'react';
import { GenreFilterName, LevelFilterName, NameSpace } from '../../consts';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import QuestItem from '../quest-item/quest-item';

export default function QuestsList() {
  const allQuests = useAppSelector((state) => state[NameSpace.Data].quests);
  const isQuestsLoaded = useAppSelector(
    (state) => state[NameSpace.Data].isQuestsLoaded
  );
  const genreFilter = useAppSelector((state) => state[NameSpace.App].type);
  const levelFilter = useAppSelector((state) => state[NameSpace.App].level);

  const filteredQuests = useMemo(() => {
    if (genreFilter !== GenreFilterName.any && levelFilter !== LevelFilterName.any) {
      return allQuests.filter((quest) => quest.type === genreFilter && quest.level === levelFilter);
    } else if (genreFilter === GenreFilterName.any && levelFilter === LevelFilterName.any) {
      return allQuests;
    } else if (genreFilter !== GenreFilterName.any && levelFilter === LevelFilterName.any) {
      return allQuests.filter((quest) => quest.type === genreFilter);
    } else {
      return allQuests.filter((quest) => quest.level === levelFilter);
    }
  }, [genreFilter, levelFilter, allQuests]);

  return isQuestsLoaded ? (
    <div className="cards-grid">
      {filteredQuests.map((quest) => (
        <QuestItem
          title={quest.title}
          level={quest.level}
          key={quest.id}
          peopleMinMax={quest.peopleMinMax}
          previewImg={quest.previewImg}
          previewImgWebp={quest.previewImgWebp}
          id={quest.id}
        />
      ))}
    </div>
  ) : <Loading />;
}

