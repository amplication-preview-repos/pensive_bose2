import * as graphql from "@nestjs/graphql";
import { CommentModuleService } from "./commentmodule.service";

export class CommentModuleResolver {
  constructor(protected readonly service: CommentModuleService) {}
}
