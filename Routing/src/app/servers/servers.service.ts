export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Production Server',
      status: 'Online'
    },
    {
      id: 2,
      name: 'Test Server',
      status: 'Offline'
    },
    {
      id: 3,
      name: 'Dev Server',
      status: 'Offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
