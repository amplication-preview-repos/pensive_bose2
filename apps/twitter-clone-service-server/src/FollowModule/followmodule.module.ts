import { Module } from "@nestjs/common";
import { FollowModuleService } from "./followmodule.service";
import { FollowModuleController } from "./followmodule.controller";
import { FollowModuleResolver } from "./followmodule.resolver";

@Module({
  controllers: [FollowModuleController],
  providers: [FollowModuleService, FollowModuleResolver],
  exports: [FollowModuleService],
})
export class FollowModuleModule {}
