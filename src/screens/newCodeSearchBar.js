import React, { useContext, useState, useRef, useEffect } from 'react';
// ... Other imports ...

export default function NextScreen({ navigation }) {
  // ... Existing code ...

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(select);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = select.filter((item) =>
      item.data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  // ... Existing code ...

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6DEDC',
      }}
    >
      {/* ... Existing code ... */}
      <View
        style={{
          marginTop: '15%',
          marginRight: '20%',
          marginBottom: '5%',
          backgroundColor: '#FFF5EF',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '90%',
          height: 60,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            marginLeft: '5%',
            fontSize: 20,
            fontWeight: '300',
            letterSpacing: 0,
            color: '#18163A',
          }}
        >
          Who's in the story?
        </Text>
        <Text
          style={{
            fontFamily: 'WorkSans-Light',
            fontSize: 18,
            fontWeight: '300',
            letterSpacing: 0,
            color: '#18163A',
            marginLeft: '5%',
          }}
        >
          (Create in "Characters")
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name="search-outline"
          size={24}
          color="#18163A"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: '#FFF',
            fontFamily: 'WorkSans-Light',
            fontSize: 16,
            color: '#18163A',
          }}
          placeholder="Search for a person..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <ScrollView style={{}}>
        <FlatList
          data={filteredData} // Use the filteredData for rendering
          // ... Rest of the FlatList props ...
        />
        {/* ... Other components ... */}
      </ScrollView>
    </View>
  );
}

// ... Rest of the code ...