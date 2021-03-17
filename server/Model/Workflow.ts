import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stage } from "./Stage";

@ObjectType()
@Entity()
export class Workflow {
	@PrimaryGeneratedColumn()
	id: number;

	@Field(type => [Stage])
	@OneToMany(type => Stage, stage => stage.workflow)
	stages: Stage[];
}