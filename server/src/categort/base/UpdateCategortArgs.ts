/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategortWhereUniqueInput } from "./CategortWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CategortUpdateInput } from "./CategortUpdateInput";

@ArgsType()
class UpdateCategortArgs {
  @ApiProperty({
    required: true,
    type: () => CategortWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategortWhereUniqueInput)
  @Field(() => CategortWhereUniqueInput, { nullable: false })
  where!: CategortWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CategortUpdateInput,
  })
  @ValidateNested()
  @Type(() => CategortUpdateInput)
  @Field(() => CategortUpdateInput, { nullable: false })
  data!: CategortUpdateInput;
}

export { UpdateCategortArgs as UpdateCategortArgs };