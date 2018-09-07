import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";
import { secondsToTime } from "./../../common/time";

Font.register(
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  { family: "Oswald" }
);

const styles = StyleSheet.create({
  root: {
    width: "60vh",
    minHeight: "80vh",
    backgroundColor: "white",
    border: "none"
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Oswald"
  },
  author: {
    fontSize: 12,
    textAlign: "left",
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald"
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman"
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  headerFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  },
  table: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "middle",
    flexDirection: "row",
    flexGrow: 1,
    width: "100%",
    padding: 3
  },
  cell: {
    textAlign: "left"
  },
  songname: {
    fontSize: 24,
    width: "50%",
    minWidth: "50%",
    maxWidth: "50%"
  },
  mkey: {
    color: "#444",
    fontSize: 12
  },
  bpm: {
    color: "#444",
    fontSize: 12
  }
});

export const SetlistToPDFTemplate = props => {
  const { setlist, songs } = props;
  return (
    <Document style={styles.root} shallow>
      {setlist &&
        setlist.setOrder.map((setId, i) => {
          return (
            <Page style={styles.body} wrap>
              <Text style={styles.header} fixed>
                Radio Future
              </Text>
              <View style={styles.headerFlex}>
                <View>
                  <Text style={styles.title}>
                    Setlist - {setlist && setlist.name}
                  </Text>
                  <Text style={styles.author}>
                    {setlist && setlist.setOrder && setlist.setOrder.length}{" "}
                    Sets - {setlist && setlist.length} Minuten
                  </Text>
                </View>
                <View>
                  <Text style={styles.title}>Set {i + 1}</Text>
                </View>
              </View>
              <View style={styles.table}>
                {setlist !== undefined &&
                  songs !== undefined &&
                  setlist.sets[setId].map(songId => {
                    const song = songs.find(song => song.id === songId);
                    return (
                      <View style={styles.row}>
                        <View style={styles.cell}>
                          <Text style={styles.songname}>{song.name}</Text>
                        </View>
                        <View style={styles.cell}>
                          <Text style={styles.mkey}>{song.mkey}</Text>
                        </View>
                        <View style={styles.cell}>
                          <Text style={styles.bpm}>{song.bpm} Bpm</Text>
                        </View>
                        <View style={styles.cell}>
                          <Text style={styles.length}>
                            {secondsToTime(song.length)}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
              <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          );
        })}
    </Document>
  );
};
