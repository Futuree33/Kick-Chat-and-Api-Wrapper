// ConnectionManager.ts
export type Connection = {
    chatroom: string
    authorization: string
    xsrfToken: string
    cookie: string
};

class ConnectionManager {
    private static instance: ConnectionManager;
    private connection: Connection;

    private constructor(connection: Connection) {
        this.connection = connection;
    }

    public static initialize(connection: Connection): void {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = new ConnectionManager(connection);
        } else {
            throw new Error("ConnectionManager is already initialized.");
        }
    }

    public static getInstance(): ConnectionManager {
        if (!ConnectionManager.instance) {
            throw new Error("ConnectionManager is not initialized. Call initialize first.");
        }
        return ConnectionManager.instance;
    }

    public getConnection(): Connection {
        return this.connection;
    }
}

export default ConnectionManager;