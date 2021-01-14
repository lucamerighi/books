import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../shared/theme';

export default function SwitchBar() {
    const [active, setActive] = useState('ebook');
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.textContainer, active === 'ebook' && styles.activeOption]}
                onPress={() => setActive('ebook')}>
                <Text style={styles.text}>Ebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.textContainer, active === 'audiobook' && styles.activeOption]}
                onPress={() => setActive('audiobook')}>
                <Text style={styles.text}>Audiobook</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.lightgray,
        flexDirection: 'row',
        padding: 4,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    activeOption: {
        backgroundColor: theme.colors.background,
    },
    text: {},
});
