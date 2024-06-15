import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TweetModuleService } from "./tweetmodule.service";

@swagger.ApiTags("tweetModules")
@common.Controller("tweetModules")
export class TweetModuleController {
  constructor(protected readonly service: TweetModuleService) {}
}
