import css from './Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: { followers, views, likes },
}) {
  const {
    profile,
    description,
    name,
    label,
    quantity,
    tagProf,
    avatarProf,
    locationProf,
    statsProf,
  } = css;
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="User avatar" className={avatarProf} />
        <p className={name}>{username}</p>
        <p className={tagProf}>@{tag}</p>
        <p className={locationProf}>{location}</p>
      </div>

      <ul className={statsProf}>
        <li>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers}</span>
        </li>
        <li>
          <span className={label}>Views</span>
          <span className={quantity}>{views}</span>
        </li>
        <li>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
