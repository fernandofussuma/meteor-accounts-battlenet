Package.describe({
  name: 'fernandofussuma:accounts-battlenet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for Battlenet accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fernandofussuma/meteor-accounts-battlenet.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('battlenet', ['client', 'server']);

  api.addFiles('battlenet_login_button.css', 'client');

  api.addFiles("battlenet.js");

});
