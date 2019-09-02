/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const CardSection = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "ddd",
    position: "relative"
  }
};

CardSection.propTypes = {
  children: PropTypes.any
};

export { CardSection };
