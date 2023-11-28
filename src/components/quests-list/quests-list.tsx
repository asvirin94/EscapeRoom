import { useMemo } from 'react';
import { GenreFilterName, LevelFilterName } from '../../consts';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import QuestItem from '../quest-item/quest-item';
import { getIsQuestsLoaded, getQuests } from '../../store/data-process/data-process.selectors';
import { getGenreFilter, getLevelFilter } from '../../store/app-process/app-process.selectors';

export default function QuestsList() {
  const allQuests = useAppSelector(getQuests);
  const isQuestsLoaded = useAppSelector(getIsQuestsLoaded);
  const genreFilter = useAppSelector(getGenreFilter);
  const levelFilter = useAppSelector(getLevelFilter);

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

