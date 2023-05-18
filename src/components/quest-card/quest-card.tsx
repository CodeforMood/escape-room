import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { Quest } from "../../types/quest"

type QuestCardProps = {
  questData: Quest,
}

export default function QuestCard({questData}: QuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {title, id, previewImg, previewImgWebp, level, peopleMinMax, } = questData;
  
  return (
    <div className="quest-card">
        <div className="quest-card__img">
            <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, img/content/crypt/crypt-size-s@2x.webp 2x`} /><img src={previewImg} srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в клетке в подземелье." />
            </picture>
        </div>
        <div className="quest-card__content">
            <div className="quest-card__info-wrapper"><Link className="quest-card__link" onClick={() => dispatch(fetchQuestInfoAction(id))} to="quest.html">{title}</a>
            </div>
            <ul className="tags quest-card__tags">
                <li className="tags__item">
                    <svg width="11" height="14" aria-hidden="true">
                        <use xlinkHref="#icon-person"></use>
                    </svg>{`${peopleMinMax[0]}&ndash;${peopleMinMax[1]}&nbsp;чел`}
                </li>
                <li className="tags__item">
                    <svg width="14" height="14" aria-hidden="true">
                        <use xlinkHref="#icon-level"></use>
                    </svg>{level}
                </li>
            </ul>
        </div>
    </div>
  );
}
