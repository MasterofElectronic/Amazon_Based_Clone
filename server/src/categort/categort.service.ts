import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategortServiceBase } from "./base/categort.service.base";

@Injectable()
export class CategortService extends CategortServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
