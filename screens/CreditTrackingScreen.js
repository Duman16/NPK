import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import { getCreditData } from '../api'; // Подставьте функцию для получения данных о кредитах

const CreditTrackingScreen = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreditData = async () => {
      try {
        const data = await getCreditData(); // Замените на свою функцию API
        setCredits(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreditData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Color.colorSienna} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const renderCreditItem = ({ item }) => (
    <View style={styles.creditItem}>
      <Text style={styles.creditName}>{item.name}</Text>
      <Text style={styles.creditAmount}>{item.amount}</Text>
      <Text style={styles.creditDueDate}>Срок: {item.dueDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={credits}
        renderItem={renderCreditItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.creditList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditList: {
    width: '100%',
  },
  creditItem: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  creditName: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interSemiBold,
    marginBottom: 5,
  },
  creditAmount: {
    fontSize: FontSize.size_sm,
    color: Color.colorSienna,
    marginBottom: 5,
  },
  creditDueDate: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
});

export default CreditTrackingScreen;
