import React from 'react';
import { StyleSheet } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../StyleGuide/ColorExtension';

interface MainContainerProps {
  children: React.ReactNode;
  customEdges?: Edges
}

export default function MainContainer({
  children,
  customEdges,
}: MainContainerProps) {

  return (
    <SafeAreaView style={styles.container} edges={customEdges ?? ['left', 'right']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Colors.bgNeutral2,
  },
});

