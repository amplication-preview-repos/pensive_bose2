import { Module } from "@nestjs/common";
import { CommentModuleService } from "./commentmodule.service";
import { CommentModuleController } from "./commentmodule.controller";
import { CommentModuleResolver } from "./commentmodule.resolver";

@Module({
  controllers: [CommentModuleController],
  providers: [CommentModuleService, CommentModuleResolver],
  exports: [CommentModuleService],
})
export class CommentModuleModule {}
