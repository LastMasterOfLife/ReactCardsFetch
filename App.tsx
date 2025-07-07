import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/Navigations/MyNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

