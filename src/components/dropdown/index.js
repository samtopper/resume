import { PropTypes } from "prop-types";
import "./dropdown.css";

const Dropdown = ({ label, id, grouping, options, groups }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        {grouping ? (
          <>
            {groups.map((group, gIndex) => (
              <optgroup key={gIndex} label={group.groupLabel}>
                {group.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </>
        ) : (
          <>
            {options.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </>
        )}
      </select>
    </>
  );
};
export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  grouping: PropTypes.bool,
  options: PropTypes.array,
  groups: PropTypes.array,
};

Dropdown.defaultProps = {
  label: "default dropdown label",
  id: "dropdown-id",
  grouping: false,
  // options: [{ label: "Select", value: "" }],
  options: [],
};
