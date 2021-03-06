module.exports = ({
  adapter: { ipc },
  controller: { machine }
}) => {
  ipc.routes({
    'healthcheck': machine.healthcheck,
    'getLogin': machine.login,
    'checkUpdate': machine.checkUpdate,
    'upgradenow': machine.upgradeNow,
  })
}
