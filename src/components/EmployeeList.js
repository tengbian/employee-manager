/* eslint-disable react/prop-types */
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { employeesFetch } from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  UNSAFE_componentWillMount() {
    this.props.employeesFetch();
    // this.createDataSource(this.props);
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  // this.createDataSource(nextProps);
  // this.render();
  // }

  // createDataSource({ employees }) {
  //   const ds = new FlatList.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.DataSource = ds.cloneWithRows(employees);
  // }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(employee, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
