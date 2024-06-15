import { Module } from "@nestjs/common";
import { LikeModuleService } from "./likemodule.service";
import { LikeModuleController } from "./likemodule.controller";
import { LikeModuleResolver } from "./likemodule.resolver";

@Module({
  controllers: [LikeModuleController],
  providers: [LikeModuleService, LikeModuleResolver],
  exports: [LikeModuleService],
})
export class LikeModuleModule {}
