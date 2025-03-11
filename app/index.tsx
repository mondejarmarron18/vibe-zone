import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/theme";
import Play from "@/components/icons/Play";
import Star from "@/components/icons/Star";
import { useEffect, useState } from "react";

const movies = [
  {
    id: "4b5a6c7d",
    name: "The Phantom Menace - Episode I",
    time: "1h 45m",
    isAvenger: false,
    watchProgressPercent: 100,
  },
  {
    id: "6c7d8e9f",
    name: "Attack of the Clones - Episode II",
    time: "2h 5m",
    isAvenger: false,
    watchProgressPercent: 20,
  },
  {
    id: "1d3f4g8h",
    name: "Revenge of the Sith - Episode III",
    time: "2h 10m",
    isAvenger: false,
    watchProgressPercent: 65,
  },
  {
    id: "5b6c7a9e",
    name: "A New Hope - Episode IV",
    time: "1h 40m",
    isAvenger: false,
    watchProgressPercent: 30,
  },
  {
    id: "2f3g4h5i",
    name: "Return of the Jedi - Episode VI",
    time: "2h 20m",
    isAvenger: false,
    watchProgressPercent: 20,
  },
  {
    id: "8f6d1e5g",
    name: "The Force Awakens - Episode VII",
    time: "2h 15m",
    isAvenger: false,
    watchProgressPercent: 0,
  },
  {
    id: "7e8f9g0h",
    name: "The Empire Strikes Back - Episode X",
    time: "2h 20m",
    isAvenger: true,
    watchProgressPercent: 0,
  },
  {
    id: "3k4a7b9c",
    name: "The Last Jedi - Episode IX",
    time: "2h 20m",
    isAvenger: false,
    watchProgressPercent: 0,
  },
  {
    id: "9h7c5b4a",
    name: "The Rise of Skywalker - Episode XI",
    time: "2h 30m",
    isAvenger: false,
    watchProgressPercent: 0,
  },
];

const movieScenes = [
  require("../assets/images/temp/star-wars/scenes/scene-1.jpeg"),
  require("../assets/images/temp/star-wars/scenes/scene-2.jpeg"),
  require("../assets/images/temp/star-wars/scenes/scene-3.jpg"),
];

const RootIndex = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <View className="flex-1 bg-bg">
      <ScrollView className="flex-1">
        <StatusBar style="light" />
        <ImageBackground
          source={require("../assets/images/temp/star-wars/banner.jpg")}
          className="w-full h-[350px] absolute"
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", colors.bg]}
            className="flex-1"
          />
        </ImageBackground>

        <SafeAreaView className="flex-1 mt-[180px] p-4 gap-6">
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-secondary self-center p-4 rounded-full"
          >
            <Play size={24} color="white" solid />
          </TouchableOpacity>
          <View className="gap-1 items-center">
            <Text className="text-text text-xl font-semibold text-center">
              Star Wars
            </Text>
            <Text className="text-text/60 text-sm text-center">
              2020 - 3h 2m - Action, Adventure, Sci-Fi
            </Text>
            <View className="flex-row gap-1 items-center">
              <Star size={12} color="yellow" solid />
              <Text className="text-text/60 text-sm">
                8.5 / 10 (1.2k votes)
              </Text>
            </View>
          </View>
          <View className="gap-2">
            <Text
              className={`text-text/80 text-center leading-6 ${
                isReadMore ? "" : "line-clamp-3"
              }`}
            >
              Embark on an epic journey through the galaxy with this collection
              of iconic Star Wars episodes, featuring legendary characters like
              Luke Skywalker, Han Solo, and Darth Vader. Experience the
              excitement of the Star Wars universe in a visually stunning and
              immersive way.
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsReadMore(!isReadMore)}
            >
              <Text className="text-secondary text-center">
                {isReadMore ? "Read less" : "Read more"}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text className="text-text text-md my-2 font-semibold">Scenes</Text>
            <FlatList
              data={movieScenes}
              keyExtractor={(item) => item}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <Image
                    source={item}
                    className="w-[240px] h-[120px] border rounded-lg overflow-hidden items-center"
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          </View>

          <View className="flex-1">
            <Text className="text-text text-md my-2 font-semibold">
              Episodes
            </Text>
            <View className="gap-2">
              {movies.map((movie) => {
                return (
                  <TouchableOpacity activeOpacity={0.8}>
                    <View className="rounded-lg flex-1 overflow-hidden bg-primary ">
                      <View
                        className={`absolute top-0 left-0 h-full bg-secondary/15 rounded-r-lg`}
                        style={{ width: `${movie.watchProgressPercent}%` }}
                      ></View>
                      <View className="py-4 px-4 flex-row gap-4">
                        <Text className="text-text flex-1 text-sm">
                          {movie.name}
                        </Text>
                        <Text className="text-text/80 text-sm">
                          {movie.time}
                        </Text>
                      </View>
                    </View>{" "}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default RootIndex;
