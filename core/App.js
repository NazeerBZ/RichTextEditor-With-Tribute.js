import React, { Component } from 'react';
import {
  View, StyleSheet, Keyboard
  , TouchableWithoutFeedback, Text
  , KeyboardAvoidingView,
  Alert
} from 'react-native';

import CNEditor, {
  CNToolbar,
  getDefaultStyles
} from "react-native-cn-richtext-editor";

const defaultStyles = getDefaultStyles();


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag: 'body',
      selectedStyles: [],
    };

    this.editor = null;
  }

  onStyleKeyPress = (toolType) => {
    this.editor.applyToolbar(toolType);
  }

  onSelectedTagChanged = (tag) => {
    this.setState({
      selectedTag: tag
    })
  }

  onSelectedStyleChanged = (styles) => {
    this.setState({
      selectedStyles: styles,
    })
  }

  getName = (name) => {
    Alert.alert(name);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#eee',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>


        <View
          style={{ flex: 1 }}
          onTouchStart={() => {
            this.editor && this.editor.blur();
          }}
        >
          <View style={styles.main}
            onTouchStart={(e) => e.stopPropagation()}>

            <CNEditor
              ref={input => this.editor = input}
              onSelectedTagChanged={this.onSelectedTagChanged}
              onSelectedStyleChanged={this.onSelectedStyleChanged}
              style={{ backgroundColor: '#fff' }}
              styleList={defaultStyles}
              initialHtml={``}
              getName={this.getName}
            />
          </View>
        </View>

        <View style={{
          minHeight: 35
        }}>

          <CNToolbar
            style={{
              height: 35,
            }}
            iconSetContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            size={30}
            iconSet={[
              {
                type: 'tool',
                iconArray: [{
                  toolTypeText: 'image',
                  iconComponent:
                    <Text style={styles.toolbarButton}>
                      image
                                            </Text>
                }]
              },
              {
                type: 'tool',
                iconArray: [{
                  toolTypeText: 'bold',
                  buttonTypes: 'style',
                  iconComponent:
                    <Text style={styles.toolbarButton}>
                      bold
                                            </Text>
                }]
              },
              {
                type: 'seperator'
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'body',
                    buttonTypes: 'tag',
                    iconComponent:
                      <Text style={styles.toolbarButton}>
                        body
                                                </Text>
                  },
                ]
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'ul',
                    buttonTypes: 'tag',
                    iconComponent:
                      <Text style={styles.toolbarButton}>
                        ul
                                                </Text>
                  }
                ]
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'ol',
                    buttonTypes: 'tag',
                    iconComponent:
                      <Text style={styles.toolbarButton}>
                        ol
                                                </Text>
                  }
                ]
              },
            ]}
            selectedTag={this.state.selectedTag}
            selectedStyles={this.state.selectedStyles}
            onStyleKeyPress={this.onStyleKeyPress}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 1,
    alignItems: 'stretch',
  },
  toolbarButton: {
    fontSize: 20,
    width: 28,
    height: 28,
    textAlign: 'center'
  },
  italicButton: {
    fontStyle: 'italic'
  },
  boldButton: {
    fontWeight: 'bold'
  },
  underlineButton: {
    textDecorationLine: 'underline'
  },
  lineThroughButton: {
    textDecorationLine: 'line-through'
  },
});

export default App;



