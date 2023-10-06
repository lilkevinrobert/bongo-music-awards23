import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './modules/auth/auth.module';
import {AdminModule} from './modules/admin/admin.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GenreEntity} from "./modules/admin/entity/genre.entity";
import {CategoryEntity} from "./modules/admin/entity/category.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '#Wilmer16',
            database: 'bma23',
            entities: [GenreEntity, CategoryEntity],
 //           entities: ['./'],
            synchronize: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
        AuthModule,
        AdminModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
