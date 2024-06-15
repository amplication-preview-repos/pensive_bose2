import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommentModuleService } from "./commentmodule.service";

@swagger.ApiTags("commentModules")
@common.Controller("commentModules")
export class CommentModuleController {
  constructor(protected readonly service: CommentModuleService) {}
}
