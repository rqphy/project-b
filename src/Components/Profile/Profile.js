function Profile({ title }) {
  return (
    <a className="Profile">
      <div className="Profile__img"></div>
      {title && <h4 className="Profile__title">{title}</h4>}
    </a>
  );
}

export default Profile;
