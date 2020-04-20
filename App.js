import React, { Component } from 'react';
import { Platform } from 'react-native';
import Router from './src/config/router';
import * as Permissions from 'expo-permissions';
import TodoStore from './src/data/TodoStore';


export default class App extends Component {
  async componentWillMount() {
    await this._askForCalendarPermissions();
    await this._askForReminderPermissions();
  }

  _askForCalendarPermissions = async () => {
    await Permissions.askAsync(Permissions.CALENDAR);
  };

  _askForReminderPermissions = async () => {
    if (Platform.OS === 'android') {
      return true;
    }

    await Permissions.askAsync(Permissions.REMINDERS);
  };

  render() {
    return (
      <TodoStore>
        <Router />
      </TodoStore>
    );
  }
}
