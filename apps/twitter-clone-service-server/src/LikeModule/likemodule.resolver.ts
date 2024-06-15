import * as graphql from "@nestjs/graphql";
import { LikeModuleService } from "./likemodule.service";

export class LikeModuleResolver {
  constructor(protected readonly service: LikeModuleService) {}
}
