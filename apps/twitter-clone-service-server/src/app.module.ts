import { Module } from "@nestjs/common";
import { FollowModule } from "./follow/follow.module";
import { CommentModule } from "./comment/comment.module";
import { TweetModule } from "./tweet/tweet.module";
import { LikeModule } from "./like/like.module";
import { UserModule } from "./user/user.module";
import { CommentModuleModule } from "./CommentModule/commentmodule.module";
import { FollowModuleModule } from "./FollowModule/followmodule.module";
import { LikeModuleModule } from "./LikeModule/likemodule.module";
import { TweetModuleModule } from "./TweetModule/tweetmodule.module";
import { UserModuleModule } from "./UserModule/usermodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    FollowModule,
    CommentModule,
    TweetModule,
    LikeModule,
    UserModule,
    CommentModuleModule,
    FollowModuleModule,
    LikeModuleModule,
    TweetModuleModule,
    UserModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
