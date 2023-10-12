import * as process from "process";
import {parse} from "ts-jest";

export const config = () => ({

    // Other application configurations.
    port: parseInt(process.env.PORT,10) || 3000,

    database: {
        type: process.env.DATABASE_TYPE,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT,10) || 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: process.env.POSTGRES_SYNCHRONISE,
        entities: ['dist/**/*.entity.js']

    }

})