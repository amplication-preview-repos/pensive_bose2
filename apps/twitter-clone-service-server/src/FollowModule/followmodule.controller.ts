import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FollowModuleService } from "./followmodule.service";

@swagger.ApiTags("followModules")
@common.Controller("followModules")
export class FollowModuleController {
  constructor(protected readonly service: FollowModuleService) {}
}
