import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const SmartbooksWebView = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://ucenie.smartbooks.sk/' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SmartbooksWebView;