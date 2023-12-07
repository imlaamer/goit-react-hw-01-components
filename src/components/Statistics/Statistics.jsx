import css from "./Statistics.module.css"

export function Statistics({ title, statsData }) {
    const { statistics, statTitle, statList, item, itemLabel, itemPercentage } = css;
    return (
        <section className={statistics}>
            {title && <h2 className={statTitle}>{title}</h2>}

            <ul className={statList}>
        {statsData.map(({ id, label, percentage }) => (
            <li className={item} key={id} >
                <span className={itemLabel}>{label}</span>
                <span className={itemPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
