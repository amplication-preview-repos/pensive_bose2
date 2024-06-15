import * as graphql from "@nestjs/graphql";
import { FollowModuleService } from "./followmodule.service";

export class FollowModuleResolver {
  constructor(protected readonly service: FollowModuleService) {}
}
