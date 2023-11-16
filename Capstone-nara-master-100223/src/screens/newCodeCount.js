import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

const clarInTheMom_BehavMastFeatList = [
  // ... Your data ...
];

const YourComponent = () => {
  const [select, setSelect] = useState(clarInTheMom_BehavMastFeatList);
  const [dataSelection, setDataSelection] = useState(select[0].data);
  const [selectedDataSet, setSelectedDataSet] = useState(
    clarInTheMom_BehavMastFeatList.map(({ data }) => Array(data.length).fill(false))
  );

  // Calculate the count of selected components for each category
  const selectedCountPerCategory = selectedDataSet.map(data =>
    data.reduce((acc, val) => (val ? acc + 1 : acc), 0)
  );

  useEffect(() => {
    // Update the dataSelection when select state changes
    setDataSelection(flow === 'clarityInTheFuture' ? select[1].data : select[0].data);
  }, [select]);

  const handleOnPress = (item) => {
    // ... Your existing code for handling category selection ...
  };

  const handleOnPressContainer = (item) => {
    // ... Your existing code for handling component selection ...
  };

  const handleCheckBoxPress = (item) => {
    // ... Your existing code for handling checkbox selection ...
  };

  const getSelectedCount = (selectedData) => {
    return selectedData.map((data) => {
      return data.reduce((acc, val) => (val ? acc + 1 : acc), 0);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ... Your existing code ... */}

      <ScrollView style={styles.scrollView}>
        {/* ... Your existing code ... */}

        <View>
          <FlatList
            data={select}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleOnPress(item)}
                style={item.selected ? styles.buttonSelected : styles.button}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={
                      item.selected
                        ? styles.textButtonSelected
                        : styles.textButton
                    }
                  >
                    {item.narrativeElement}
                  </Text>
                  {/* Display the count of selected components if greater than or equal to 1 */}
                  {selectedCountPerCategory[item.id - 1] >= 1 && (
                    <Text style={styles.selectedCountText}>
                      Selected: {selectedCountPerCategory[item.id - 1]}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
            style={styles.categoriesFlatList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            ItemSeparatorComponent={() => {
              return <View style={{}} />;
            }}
          />
        </View>

        {/* ... Your existing code ... */}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6DEDC',
  },
  scrollView: {
    marginTop: '4%',
  },
  categoriesFlatList: {
    marginTop: '5%',
    paddingLeft: '3%',
  },
  buttonSelected: {
    // Your existing styles for selected button...
  },
  button: {
    // Your existing styles for button...
  },
  textButtonSelected: {
    // Your existing styles for selected text...
  },
  textButton: {
    // Your existing styles for text...
  },
  selectedCountText: {
    fontWeight: 'bold',
    color: 'blue', // Choose your desired color for the count text
    marginTop: 5,
  },
  buttonComponents: {
    // Your existing styles for button components...
  },
  buttonComponentsSelected: {
    // Your existing styles for selected button components...
  },
  // Your other styles...
});

export default YourComponent;