import Dropdown from "./dropdown";

export default function Components() {
  return (
    <>
      <h1>Components List</h1>
      <ul>
        <li>dropdown</li>

        <li>use storybook</li>
      </ul>

      <Dropdown
        label="Choose a car:"
        id="cars"
        grouping={false}
        options={[
          { label: "Mercedes", value: "mercedes" },
          { label: "Audi", value: "audi" },
          { label: "Saab", value: "saab" },
          { label: "Volvo", value: "volvo" },
        ]}
        groups={[
          {
            groupLabel: "German Cars",
            options: [
              { label: "Mercedes", value: "mercedes" },
              { label: "Audi", value: "audi" },
            ],
          },
          {
            groupLabel: "Swedish Cars",
            options: [
              { label: "Volvo", value: "volvo" },
              { label: "Saab", value: "saab" },
            ],
          },
        ]}
      />
    </>
  );
}
