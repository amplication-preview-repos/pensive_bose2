import { Module } from "@nestjs/common";
import { TweetModuleService } from "./tweetmodule.service";
import { TweetModuleController } from "./tweetmodule.controller";
import { TweetModuleResolver } from "./tweetmodule.resolver";

@Module({
  controllers: [TweetModuleController],
  providers: [TweetModuleService, TweetModuleResolver],
  exports: [TweetModuleService],
})
export class TweetModuleModule {}
