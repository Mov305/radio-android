import { I18nManager } from 'react-native';
import Root from './src/root';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
  return (
    <Root />
  );
}


