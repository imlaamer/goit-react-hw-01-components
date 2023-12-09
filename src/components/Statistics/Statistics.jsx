import { generateColor } from 'helpers/generateColor';
import css from './Statistics.module.css';
// import { generateColor } from '../../helpers/generateColor';

export function Statistics({ title, statsData }) {
  const { statistics, statTitle, statList, item, itemLabel, itemPercentage } =
    css;

  return (
    <section className={statistics}>
      {title?.length > 0 && <h2 className={statTitle}>{title}</h2>}
      <ul className={statList}>
        {statsData?.map(({ id, label, percentage }) => (
          <li
            className={item}
            key={id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={itemLabel}>{label}</span>
            <span className={itemPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
