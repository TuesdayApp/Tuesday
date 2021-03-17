import { worker } from "cluster";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";
import { Workflow } from "./Workflow";

@ObjectType()
@Entity()
export class Stage {
	@PrimaryGeneratedColumn()
	id: number;

	@Field(type => [Card])
	@OneToMany(type => Card, card => card.stage)
	cards: Card[];

	@Field(type => Workflow)
	@ManyToOne(type => Workflow, workflow => workflow.id)
	workflow: Workflow;
}