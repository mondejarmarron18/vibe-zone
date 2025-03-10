import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/theme";
import Play from "@/components/icons/Play";
import Star from "@/components/icons/Star";

export default function Index() {
  return (
    <View className="flex-1 bg-bg">
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/temp/movie.jpg")}
        className="w-full h-[400px] absolute"
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", colors.bg]}
          className="flex-1"
        />
      </ImageBackground>

      <SafeAreaView className="flex-1 mt-[250px] p-4 gap-6">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-secondary self-center p-4 rounded-full"
        >
          <Play size={24} color="white" solid />
        </TouchableOpacity>
        <View className="gap-1 items-center">
          <Text className="text-text text-xl font-semibold text-center">
            Avenger - Endgame
          </Text>
          <Text className="text-text/80 text-center">
            2020 - 3h 2m - Action, Adventure, Sci-Fi
          </Text>
          <View className="flex-row gap-1 items-center">
            <Star size={15} color="yellow" solid />{" "}
            <Text className="text-text">8.5 / 10 (1.2k votes)</Text>
          </View>
        </View>
        <Text className="text-text/80  text-center leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          laborum quia ducimus quibusdam sunt aut repudiandae distinctio fuga
          obcaecati animi temporibus qui iure nihil sint.
        </Text>

        <FlatList
          data={[
            {
              id: 1,
              name: "Episode 1 - The beginning",
            },
            {
              id: 2,
              name: "Episode 2 - The end",
            },
            {
              id: 3,
              name: "Episode 3 - The middle",
            },
            {
              id: 4,
              name: "Episode 4 - The end",
            },
          ]}
          renderItem={({ item }) => (
            <View className="flex-row items-center bg-primary justify-between">
              <View className="flex-row items-center gap-4">
                <Text className="text-text/80">{item.id}</Text>
                <Text className="text-text">{item.name}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                className="bg-secondary self-center p-2 rounded-full"
              >
                <Play size={24} color="white" solid />
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
      </SafeAreaView>
    </View>
  );
}
