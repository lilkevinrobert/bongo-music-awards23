import { Module } from '@nestjs/common';
import { AuthService} from "./auth.service";
import { AuthResolver} from "./auth.resolver";
import { AuthGuard } from "./auth.guard";

@Module({
    providers: [
        AuthService,
        AuthResolver,
        AuthGuard
    ]
})
export class AuthModule {}
