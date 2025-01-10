import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategortService } from "./categort.service";
import { CategortControllerBase } from "./base/categort.controller.base";

@swagger.ApiTags("categorts")
@common.Controller("categorts")
export class CategortController extends CategortControllerBase {
  constructor(
    protected readonly service: CategortService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
