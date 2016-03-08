'use strict';

const
  tabs = require('sdk/tabs'),
  prefs = require('sdk/simple-prefs').prefs,
  { Hotkey } = require('sdk/hotkeys');

// Store last tab object
let lastTab = null;

// Register tab event
tabs.on('deactivate', tab => lastTab = tab);

// Key combo
let hotkey = Hotkey({
  combo: prefs.combo,
  onPress: x => lastTab ? lastTab.activate() : false
});
