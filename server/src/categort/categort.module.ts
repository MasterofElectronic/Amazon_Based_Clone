import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategortModuleBase } from "./base/categort.module.base";
import { CategortService } from "./categort.service";
import { CategortController } from "./categort.controller";
import { CategortResolver } from "./categort.resolver";

@Module({
  imports: [CategortModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategortController],
  providers: [CategortService, CategortResolver],
  exports: [CategortService],
})
export class CategortModule {}
