import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Times-Roman',
    backgroundColor: "wheat"
  },
  header: {
    fontSize: 24,
    fontStyle: 'italic',
    color: "red",
    textAlign: 'center',
    marginBottom: 15,
  },
  section: {
    marginTop: 50,
  },
  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '13%',
    border: '1pt solid black',
    padding: 5,
    borderCollapse: 'collapse',
  
  },
  tableCell: {
    textAlign: 'center',
    fontSize: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: "yellow",
  },
  tableHeaderCell: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: "center",
    color: "maroon",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: 'italic'
  }
});
const MyDocument = ({ products }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>INVENTRY REPORT</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>NO</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Product</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Product Id</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Category</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Location</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Available</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>Reserved</Text>
            </View>
            <View style={[styles.tableCol, styles.tableHeader]}>
              <Text style={styles.tableHeaderCell}>On Hand</Text>
            </View>
          </View>
          {products.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.product}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.productId}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.category}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.location}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.available}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.reserved}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.onhand}</Text>
              </View>
            </View>
          ))}
          <View style={styles.section}>
            <Text style={styles.footer}>Thank for Vist My INVENTRY</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;