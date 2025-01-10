/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Categort } from "./Categort";
import { CategortCountArgs } from "./CategortCountArgs";
import { CategortFindManyArgs } from "./CategortFindManyArgs";
import { CategortFindUniqueArgs } from "./CategortFindUniqueArgs";
import { CreateCategortArgs } from "./CreateCategortArgs";
import { UpdateCategortArgs } from "./UpdateCategortArgs";
import { DeleteCategortArgs } from "./DeleteCategortArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { CategortService } from "../categort.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Categort)
export class CategortResolverBase {
  constructor(
    protected readonly service: CategortService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "read",
    possession: "any",
  })
  async _categortsMeta(
    @graphql.Args() args: CategortCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Categort])
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "read",
    possession: "any",
  })
  async categorts(
    @graphql.Args() args: CategortFindManyArgs
  ): Promise<Categort[]> {
    return this.service.categorts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Categort, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "read",
    possession: "own",
  })
  async categort(
    @graphql.Args() args: CategortFindUniqueArgs
  ): Promise<Categort | null> {
    const result = await this.service.categort(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Categort)
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "create",
    possession: "any",
  })
  async createCategort(
    @graphql.Args() args: CreateCategortArgs
  ): Promise<Categort> {
    return await this.service.createCategort({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Categort)
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "update",
    possession: "any",
  })
  async updateCategort(
    @graphql.Args() args: UpdateCategortArgs
  ): Promise<Categort | null> {
    try {
      return await this.service.updateCategort({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Categort)
  @nestAccessControl.UseRoles({
    resource: "Categort",
    action: "delete",
    possession: "any",
  })
  async deleteCategort(
    @graphql.Args() args: DeleteCategortArgs
  ): Promise<Categort | null> {
    try {
      return await this.service.deleteCategort(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: Categort,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}