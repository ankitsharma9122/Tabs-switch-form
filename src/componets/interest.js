import "../styles.css";
export default function Interest({ data, setData, error }) {
  const { interest } = data;
  const handlechange = (e, selectedValue) => {
    setData((preSate) => ({
      ...preSate,
      interest: e.target.checked
        ? [...interest, selectedValue]
        : interest.filter((item) => item != selectedValue),
    }));
  };

  console.log("ankit==>", data);

  return (
    <div className="interest-tab">
      <h3>select your skills : </h3>
      <label>
        <input
          type="checkbox"
          checked={interest.includes("coding")}
          onChange={(e) => handlechange(e, "coding")}
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          checked={interest.includes("music")}
          onChange={(e) => handlechange(e, "music")}
        />
        Music
      </label>
      <label>
        <input
          type="checkbox"
          checked={interest.includes("cricket")}
          onChange={(e) => handlechange(e, "cricket")}
        />
        Cricket
      </label>
      <label>
        <input
          type="checkbox"
          checked={interest.includes("dance")}
          onChange={(e) => handlechange(e, "dance")}
        />
        Dance
      </label>
      {error.interest && <div className="input-error">{error.interest}</div>}
    </div>
  );
}
