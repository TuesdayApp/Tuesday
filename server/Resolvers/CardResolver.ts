import { Arg, Int, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Card } from "../Model/Card";
import { CardService } from "../Service/CardService";

@Resolver()
@Service()
export class CardResolver {
	constructor(private readonly cardService: CardService) { }
	
	@Mutation(type => Card)
	async CreateCard(): Promise<Card> {
		return this.cardService.CreateCard();
	}

	@Mutation(type => Int)
	async AddCardToStage(
		@Arg("stageId") stageId: number,
		@Arg("cardId") cardId: number
	): Promise<number | undefined> {
		return (await this.cardService.AddCardToStage(stageId, cardId)).affected;
	}
}