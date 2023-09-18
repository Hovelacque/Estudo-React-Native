import React from 'react';
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


type SectionProps = PropsWithChildren<{
    title: string;
    functionOutput?: any;
}>;

export function Sections3({ children, title, functionOutput }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View >
            <Text>
                {title}
            </Text>
            <Button
                onPress={functionOutput}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                {children}
            </Text>
        </View>
    );
}


export default function Sections2({ children, title, functionOutput }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View >
            <Text>
                {title}
            </Text>
            <Button
                onPress={functionOutput}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                {children}
            </Text>
        </View>
    );
}