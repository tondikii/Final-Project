import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ACTIVATE } from "../../mutations";
import { Box, Text, Heading, FormControl, Input, Alert, Button, HStack, VStack, Center, NativeBaseProvider } from "native-base";

export default function Activate({ navigation }) {
  const [pin, setPin] = useState("");
  const [ActivateUser, { data, loading, error }] = useMutation(ACTIVATE);
  const [newError, setNewError] = useState([]);

  const submitPin = async (e) => {
    try {
      e.preventDefault();
      console.log(pin, typeof pin);
      const activate = await ActivateUser({
        variables: {
          pin: pin,
        },
      });

      if (activate.data.activateUser.error) {
        const errors = activate.data.activateUser.error;
        setNewError(errors);
      } else {
        const success = activate.data.activateUser.message;
        navigation.navigate("SignIn", {
          message: success,
          status: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="2xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            style={{ textAlign: "center" }}
          >
            Activate Your Account
          </Heading>
          <VStack space={3} mt="5">
            {newError &&
              newError.map((item, i) => (
                <Alert w="100%" status="error" key={i}>
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                      <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" textAlign="center" color="coolGray.800">
                          {item}
                        </Text>
                      </HStack>
                      {/* <IconButton
                        variant="unstyled"
                        icon={<CloseIcon size="3" color="coolGray.600" />}
                      /> */}
                    </HStack>
                  </VStack>
                </Alert>
              ))}
            <FormControl style={{ alignItems: "center" }}>
              <FormControl.Label textAlign="center">Enter Pin</FormControl.Label>
              <Input
                type="number"
                name="pin"
                placeholder=""
                onChangeText={(value) => setPin(value)}
                keyboardType="numeric"
                textAlign="center"
                width={150}
                fontSize={30}
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo" onPress={(e) => submitPin(e)}>
              Enter Pin
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}