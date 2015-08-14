Package.describe({
  name: 'fernandofussuma:accounts-battlenet',
  version: '0.0.2',
  summary: 'Login service for Battlenet accounts',
  git: 'https://github.com/fernandofussuma/meteor-accounts-battlenet.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('fernandofussuma:battlenet@0.0.2', ['client', 'server']);

  api.addFiles('battlenet_login_button.css', 'client');

  api.addFiles("battlenet.js");

});
