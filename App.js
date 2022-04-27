import React, { useState } from "react";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
  Snackbar,
  Modal,
  Portal,
  Text,
  FAB,
  TextInput,
  Divider,
  Appbar,
  Dialog,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SVGd4 from "./img/light/d4.svg";
import SVGd6 from "./img/light/d6.svg";
import SVGd8 from "./img/light/d8.svg";
import SVGd10 from "./img/light/d10.svg";
import SVGd12 from "./img/light/d12.svg";
import SVGd20 from "./img/light/d20.svg";
import Doorway from "./img/light/doorway.svg";

export default function App() {
  const [isModalvisible, setIsModalVisible] = React.useState(false);
  const [isSnackBarvisible, setIsSnackBarVisible] = React.useState(false);
  const [snackBarMsg, setSnackBarMsg] = React.useState("");
  const [modifier, setModifier] = React.useState(0);
  const [dR, setDR] = useState(0);
  const [logs, setLogs] = useState([]);

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const showModal = () => {
    setIsModalVisible(true);
    setModifier(0);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000000",
      accent: "#f1c40f",
    },
  };

  const roll = (d) => {
    let rand = Math.floor(Math.random() * d) + 1;
    setDR(rand);
    let add = rand + Number(modifier);
    let log = `${rand} + ${modifier} =`;
    setLogs((prev) => {
      return [...prev, { log: log, dice: d, sum: add }];
    });
    onToggleSnackBar();
    hideModal();
  };

  const removeItem = (index) => {
    setLogs(logs.filter((o, i) => index !== i));
    setIsSnackBarVisible(true);
    setSnackBarMsg("Dice Log Deleted");
    setTimeout(() => {
      setIsSnackBarVisible(false);
    }, 1000);
  };

  const removeAllLogs = () => {
    setLogs([]);
    hideDialog();
    setIsSnackBarVisible(true);
    setSnackBarMsg("All Dice Logs Deleted");
    setTimeout(() => {
      setIsSnackBarVisible(false);
    }, 1000);
  };

  const onToggleSnackBar = () => {
    setIsSnackBarVisible(true);
    setSnackBarMsg("Dice Log Added");
    setTimeout(() => {
      setIsSnackBarVisible(false);
    }, 1000);
  };

  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider theme={theme}>
      <Portal>
        <Appbar.Header>
          <Appbar.Content title={<Doorway width={40} height={40} />} />
        </Appbar.Header>

        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text style={styles.dialogTxt}>Are you sure?</Text>
            <Button
              style={styles.dialogDeleteBtn}
              mode="contained"
              onPress={() => removeAllLogs()}
            >
              Delete All Logs
            </Button>
          </Dialog.Content>
        </Dialog>
        <Modal
          style={styles.modal}
          visible={isModalvisible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={styles.modifierWrapper}>
            <TextInput
              mode="outlined"
              label="Add Modifier"
              style={styles.input}
              value={modifier.toString().replace(/^0+/, "")}
              maxLength={4}
              keyboardType={
                Platform.OS === "android" ? "numeric" : "number-pad"
              }
              onChangeText={(modifier) =>
                setModifier(modifier.replace(/[^0-9]/g, ""))
              }
            />
          </View>
          <Text style={styles.subText}>Then select a dice</Text>
          <View style={styles.diceContainer}>
            <View style={styles.container}>
              <SVGd4 width={100} height={100} onPress={() => roll(4)} />
              <SVGd6 width={100} height={100} onPress={() => roll(6)} />
              <SVGd8 width={100} height={100} onPress={() => roll(8)} />
            </View>
            <View style={styles.container}>
              <SVGd10 width={100} height={100} onPress={() => roll(10)} />
              <SVGd12 width={100} height={100} onPress={() => roll(12)} />
              <SVGd20 width={100} height={100} onPress={() => roll(20)} />
            </View>
          </View>
        </Modal>
      </Portal>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.diceList}>
            {logs < 1 ? null : (
              <Text
                style={
                  Platform.OS === "android"
                    ? styles.diceMsgAndroid
                    : styles.diceMsgiOS
                }
              >
                Hold down dice roll for 2 seconds to remove from log
              </Text>
            )}
            {logs < 1 ? null : <Divider style={styles.divider} />}
            {logs
              ? logs.map((log, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        onLongPress={() => {
                          removeItem(index);
                        }}
                        delayLongPress={2000}
                      >
                        <View style={styles.diceRow}>
                          {(() => {
                            switch (log.dice) {
                              case 4:
                                return <SVGd4 width={50} height={50} />;
                              case 6:
                                return <SVGd6 width={50} height={50} />;
                              case 8:
                                return <SVGd8 width={50} height={50} />;
                              case 10:
                                return <SVGd10 width={50} height={50} />;
                              case 12:
                                return <SVGd12 width={50} height={50} />;
                              case 20:
                                return <SVGd20 width={50} height={50} />;
                              default:
                                return null;
                            }
                          })()}
                          <Text style={styles.diceResults}>
                            {log.log} <Text style={styles.sum}>{log.sum}</Text>
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <Divider />
                    </View>
                  );
                })
              : null}
            {logs < 1 ? null : (
              <Button
                style={styles.deleteAllBtn}
                icon="delete"
                mode="contained"
                onPress={() => setVisible(true)}
              >
                Delete All Logs
              </Button>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <Snackbar visible={isSnackBarvisible}>{snackBarMsg}</Snackbar>
      <FAB
        style={styles.fab}
        small
        icon="cube"
        label="Roll Dice"
        onPress={showModal}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  deleteAllBtn: {
    marginTop: 25,
  },
  dialogTxt: {
    textAlign: "center",
    marginBottom: 10,
  },
  dialogDeleteBtn: {
    backgroundColor: "red",
  },
  diceMsgAndroid: {
    textAlign: "center",
    paddingTop: 100,
  },
  diceMsgiOS: {
    textAlign: "center",
    paddingTop: 75,
  },
  sum: {
    color: "#f1c40f",
    fontWeight: "bold",
  },
  divider: {
    marginTop: 20,
  },
  button: {
    width: 60,
    height: 60,
    margin: 20,
  },
  modifierWrapper: {
    paddingLeft: 40,
  },
  input: {
    width: "90%",
    textAlign: "center",
    margin: 0,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  subText: {
    textAlign: "center",
    marginTop: 10,
  },
  diceRow: {
    flexDirection: "row",
    flex: 1,
  },
  diceList: {
    paddingBottom: 50,
  },
  diceResults: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 5,
    paddingBottom: 15,
    fontSize: 18,
  },
  diceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
