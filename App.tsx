/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Sections2 from './src/Sections';

// type SectionProps = PropsWithChildren<{
//   title: string;
//   functionOutput?: any;
// }>;

function Sections({ title, children, functionOutput }: any): JSX.Element {

  const [batata, setBatata] = useState('batata');

  const isDarkMode = useColorScheme() === 'dark';

  let f = () => {
    setBatata("pepeni");
    console.log(`BATATA: ${batata}`);
  }

  console.log(`BATATA INIT: ${batata}`);

  return (
    <View style={styles.sectionContainer}>

      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
        <Text style={{ marginLeft: 10 }}>{batata}</Text>

      </Text>

      {
        functionOutput ?
          <Button
            onPress={functionOutput}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          :
          <View style={styles.teste}>
            <Text>não tem botão</Text>
          </View>
      }

      <Button
        onPress={f}
        title="Muda texto"
      />

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {

  const [title1, setTitle1] = useState('Step One')
  const [title2, setTitle2] = useState('Step Two')

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter
  };

  useEffect(() => {
    console.log("Começando!")
  }, [])

  useEffect(() => {
    console.log("Title mudou!")
  }, [title1, title2])

  let func = () => {
    setTitle1("Novo");
    Alert.alert("from App 2")
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Sections title={title1} functionOutput={func}>
            Olá <Text style={styles.highlight}>asd.tsx</Text> to change this
            screen and then come back to see your edits.
          </Sections>
          <Sections title={title2}>
            <ReloadInstructions />
          </Sections>
          <Sections title="Debug">
            <DebugInstructions />
          </Sections>
          <Sections title="Learn More">
            Read the docs to discover what to do next:
          </Sections>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  teste: {
    flexDirection: 'row',
  }
});

export default App;
