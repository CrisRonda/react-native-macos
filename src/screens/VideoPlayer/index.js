import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';

import JWPlayer from 'react-native-jw-media-player';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  playerContainer: {
    height: 300,
    width: width - 40,
  },
  player: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    margin: 40,
  },
});

const VideoPlayer = () => {
  const videoRef = useRef();
  const playlistItem = {
    title: 'title',
    mediaId: 'mediaId',
    image: 'https://d3el35u4qe4frz.cloudfront.net/bkaovAYt-480.jpg',
    time: 0,
    file: 'https://playertest.longtailvideo.com/adaptive/oceans/oceans.m3u8',
    autostart: true,
    controls: true,
    repeat: false,
    displayDescription: false,
    displayTitle: false,
    backgroundAudioEnabled: true,
  };
  console.log(playlistItem);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.playerContainer}>
          <JWPlayer
            ref={videoRef}
            style={styles.player}
            playlistItem={playlistItem}
            autostart
            controls
            nativeFullScreen={true}
            nextUpDisplay={false}
            onPlayerError={e => console.log('ERROR PLAYER', e)}
            onSetupPlayerError={e => console.log('ERROR PLAYER', e)}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;
