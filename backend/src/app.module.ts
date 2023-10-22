import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './modules/auth/auth.module';
import {AdminModule} from './modules/admin/admin.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {config} from "./config/config";
import {DatabaseConfig} from "./config/database.config";
import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [config]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfig,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
        AuthModule,
        AdminModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
