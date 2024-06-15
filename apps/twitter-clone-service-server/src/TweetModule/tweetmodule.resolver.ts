import * as graphql from "@nestjs/graphql";
import { TweetModuleService } from "./tweetmodule.service";

export class TweetModuleResolver {
  constructor(protected readonly service: TweetModuleService) {}
}
