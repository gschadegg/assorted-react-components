import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // dark: { ...themes.dark, appBg: 'darkM' },
    current: 'light',
    stylePreview: true,
  },
  options: {
    storySort: {
      order: ['Maps', 'Components'],
    },
  },
}

// import { themes } from '@storybook/theming';

// export parameters = {
//   darkMode: {
//     // Override the default dark theme
//     dark: { ...themes.dark, appBg: 'black' },
//     // Override the default light theme
//     light: { ...themes.normal, appBg: 'red' }
//   }
// };

// import addons from '@storybook/addons';
// import { addDecorator } from '@storybook/react';

// // your theme provider
// import ThemeContext from './theme';

// // get channel to listen to event emitter
// const channel = addons.getChannel();

// // create a component that listens for the DARK_MODE event
// function ThemeWrapper(props) {
//   // this example uses hook but you can also use class component as well
//   const [isDark, setDark] = useState(false);

//   useEffect(() => {
//     // listen to DARK_MODE event
//     channel.on('DARK_MODE', setDark);
//     return () => channel.off('DARK_MODE', setDark);
//   }, [channel, setDark]);

//   // render your custom theme provider
//   return (
//     <themes.Provider value={isDark ? darkTheme : defaultTheme}>
//       {props.children}
//     </themes.Provider>
//   );
// }

// export const decorators = [renderStory => (<ThemeWrapper>{renderStory()}</ThemeWrapper>)];
