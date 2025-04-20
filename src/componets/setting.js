import "../styles.css";

export default Setting = ({ data, setData }) => {
  const { theme } = data;

  const handleChangeForSetting = (selectedValue) => {
    setData((preState) => ({
      ...preState,
      theme: selectedValue == "dark" ? "dark" : "light",
    }));
  };

  return (
    <div>
      <h3>Select theme :</h3>
      <label>
        <input
          type="radio"
          checked={theme == "dark"}
          onChange={() => {
            handleChangeForSetting("dark");
          }}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          checked={theme == "light"}
          onChange={() => {
            handleChangeForSetting("light");
          }}
        />
        light
      </label>
    </div>
  );
};
