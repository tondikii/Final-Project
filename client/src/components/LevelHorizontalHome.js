import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
} from "native-base";

// import { useQuery } from "@apollo/client";
// import { GET_MOVIES } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function LevelHorizontal({ navigation }) {
  const array = [
    {
      id: 1,
      nama: "Easy",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 2,
      nama: "Medium",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 3,
      nama: "Hard",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
  ];
  //   const { loading, error, data } = useQuery(GET_MOVIES);

  //   if (loading) return <LoadingPage></LoadingPage>;
  //   if (error) return <ErrorPage></ErrorPage>;
  return (
    <FlatList
      horizontal
      data={array}
      renderItem={({ item }) => {
        return (
          <Pressable
          // onPress={() =>
          //   navigation.navigate("Detail", {
          //     id: item.id,
          //     rating: item.rating,
          //   })
          // }
          >
            <Box
              w="380"
              h="180"
              rounded="lg"
              overflow="hidden"
              marginTop="3"
              _dark={{
                borderColor: "gray.800",
                backgroundColor: "gray.800",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "primary.50",
              }}
              marginRight="5"
              borderColor="gray.300"
              borderWidth="1"
            >
              <Box h="150" w="500">
                <AspectRatio>
                  <Image
                    h="150"
                    w="400"
                    // maxW="100%"
                    // borderColor="white"
                    borderWidth="1"
                    rounded="2xl"
                    source={{
                      uri: item.imgUrl,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>

              <Stack p="1">
                <Stack>
                  <Heading
                    size="sm"
                    ml="-1"
                    paddingLeft="5"
                    justifyContent="center"
                  >
                    {item.nama}
                  </Heading>
                </Stack>
              </Stack>
            </Box>
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    marginBottom: "10px",
  },
  top: {
    flex: 1,
    margin: 15,
  },
  bottom: {
    flex: 1,
    margin: 15,
  },
  middle: {
    flex: 1,
  },
  titleCollections: {
    color: "#010203",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});