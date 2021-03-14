import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [posts, setPosts] = useState([]);

  const windowWidth = useWindowDimensions().width;
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const flatlist = useRef();
  const mapPlace = useRef();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) return;
    const index = posts.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });
    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapPlace.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        ref={mapPlace}
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            totalPrice={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 30 }}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth - 60}
          snapToAlignment={"center"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
