import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stage } from "./Stage";

@ObjectType()
@Entity()
export class Card {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field(type => Stage)
	@ManyToOne(type => Stage, stage => stage.cards)
	stage: Stage;

	@Field()
	@Column()
	sample: string;
}