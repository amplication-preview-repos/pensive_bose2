import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LikeModuleService } from "./likemodule.service";

@swagger.ApiTags("likeModules")
@common.Controller("likeModules")
export class LikeModuleController {
  constructor(protected readonly service: LikeModuleService) {}
}
