import React from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
        'dincondensed': require('./packages/common/fonts/DINCondensed-Bold.tff')
    });


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded){
        return (
            <Home />
        );
    } else {
        return (
        <AppLoading
            startAsync={getFonts}
            onFinish={()=> setFontsLoaded(true)}
        />
        )
    }
}