import { Connection, createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
}

// getConnectionOptions().then((options) => {
//     const newOptions = options as IOptions;
//     newOptions.host = "database"; // Nome dado ao service do banco de dados

//     createConnection({
//         ...options,
//     });
// });

export default async(host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            host,
        })
    )
}