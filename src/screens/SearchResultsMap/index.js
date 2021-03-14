import React, { useState } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import places from "../../../assets/data/feed";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            key={place.id}
            coordinate={place.coordinate}
            totalPrice={place.totalPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 40 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth - 60}
          snapToAlignment={"center"}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
