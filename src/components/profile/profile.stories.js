import Profile from ".";

export default {
  title: "Example/Profile",
  component: Profile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

// export const LoggedIn = {
//   args: {
//     user: {
//       name: "Jane Doe",
//     },
//   },
// };

export const ProfileCard = {};
