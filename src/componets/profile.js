import "../styles.css";

export default profile = ({ data, setData, error }) => {
  const { name, age, email } = data;

  const handleProfileChnage = (item, e) => {
    setData((preSate) => ({
      ...preSate,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="profile-tab">
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            handleProfileChnage("name", e);
          }}
        />
        {error.name && <div className="input-error">{error.name}</div>}
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={(e) => {
            handleProfileChnage("age", e);
          }}
        />
        {error.age && <div className="input-error">{error.age}</div>}
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          value={email}
          type="email"
          onChange={(e) => {
            handleProfileChnage("email", e);
          }}
        />
        {error.email && <div className="input-error">{error.email}</div>}
      </div>
    </div>
  );
};
