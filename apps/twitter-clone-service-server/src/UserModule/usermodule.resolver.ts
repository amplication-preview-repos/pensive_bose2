import * as graphql from "@nestjs/graphql";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}
}
