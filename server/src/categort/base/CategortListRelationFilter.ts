/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategortWhereInput } from "./CategortWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CategortListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CategortWhereInput,
  })
  @ValidateNested()
  @Type(() => CategortWhereInput)
  @IsOptional()
  @Field(() => CategortWhereInput, {
    nullable: true,
  })
  every?: CategortWhereInput;

  @ApiProperty({
    required: false,
    type: () => CategortWhereInput,
  })
  @ValidateNested()
  @Type(() => CategortWhereInput)
  @IsOptional()
  @Field(() => CategortWhereInput, {
    nullable: true,
  })
  some?: CategortWhereInput;

  @ApiProperty({
    required: false,
    type: () => CategortWhereInput,
  })
  @ValidateNested()
  @Type(() => CategortWhereInput)
  @IsOptional()
  @Field(() => CategortWhereInput, {
    nullable: true,
  })
  none?: CategortWhereInput;
}
export { CategortListRelationFilter as CategortListRelationFilter };
