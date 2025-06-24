import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "components/Button";
import { Colors } from "config/theme";
import { FormErrorMessage } from "components/FormErrorMessage";
import { Formik } from "formik";
import { Images } from "config/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Logo } from "components/Logo";
import { ScreenView } from "components/ScreenView";
import { TextInput } from "components/TextInput";
import { auth } from "config/firebase";
import { loginValidationSchema } from "utils/validationSchems";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";

export const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  return (
    <ScreenView>
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {/* LogoContainer: consist app logo and screen title */}
          <View style={styles.logoContainer}>
            <Logo uri={Images.logo} />
            <Text style={styles.screenTitle}>FIREWATCH</Text>
          </View>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => handleLogin(values)}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <>
                {/* Input fields */}
                <TextInput
                  name="email"
                  leftIconName="email"
                  placeholder="Enter email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <FormErrorMessage
                  error={errors.email}
                  visible={touched.email}
                />
                <TextInput
                  name="password"
                  leftIconName="key-variant"
                  placeholder="Enter password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={passwordVisibility}
                  textContentType="password"
                  rightIcon={rightIcon}
                  handlePasswordVisibility={handlePasswordVisibility}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <FormErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                {/* Display Screen Error Messages */}
                {errorState !== "" ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                {/* Login button */}
                <Button style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </Button>
              </>
            )}
          </Formik>
          {/* Button to navigate to SignupScreen to create a new account */}
          <Button
            style={styles.borderlessButtonContainer}
            borderless
            title={"Create a new account?"}
            onPress={() => navigation.navigate("Signup")}
          />
          <Button
            style={styles.borderlessButtonContainer}
            borderless
            title={"Forgot Password"}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </KeyboardAwareScrollView>
      </View>

      {/* App info footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; {new Date().getFullYear()} FIREWATCH
        </Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.primary,
    paddingTop: 20,
  },
  footer: {
    backgroundColor: Colors.background,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.text,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: "700",
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
