import React from "react";
import { Document, Page } from "react-pdf";
import { pako } from "pako"; // Import pako

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyPdfViewer = () => {
  return (
    <div>
      <Document
        file="../resume/Erik_Lewis_Simaremare_Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default MyPdfViewer;
