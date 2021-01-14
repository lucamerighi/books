import React from 'react';
import { StyleSheet, View } from 'react-native';

import SwitchBar from '../components/SwitchBar';
import { theme } from '../shared/theme';

export default function Home() {
    return (
        <View style={styles.container}>
            <SwitchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: theme.colors.background,
    },
});
